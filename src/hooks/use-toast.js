import * as React from "react";
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 5000; // 5 seconds for toast removal
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
function reducer(state, action) {
    switch (action.type) {
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t),
            };
        case "DISMISS_TOAST": {
            const { toastId } = action;
            return {
                ...state,
                toasts: state.toasts.map((t) => toastId === undefined || t.id === toastId
                    ? { ...t, open: false }
                    : t),
            };
        }
        case "REMOVE_TOAST":
            if (!action.toastId) {
                return { ...state, toasts: [] };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t) => t.id !== action.toastId),
            };
        default:
            return state;
    }
}
let memoryState = { toasts: [] };
const listeners = [];
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener) => listener(memoryState));
}
function addToRemoveQueue(toastId) {
    if (toastTimeouts.has(toastId))
        return;
    const timeout = setTimeout(() => {
        toastTimeouts.delete(toastId);
        dispatch({ type: "REMOVE_TOAST", toastId });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
}
function clearToastTimeout(toastId) {
    const timeout = toastTimeouts.get(toastId);
    if (timeout) {
        clearTimeout(timeout);
        toastTimeouts.delete(toastId);
    }
}
export function toast(props) {
    const id = genId();
    const update = (updatedProps) => dispatch({ type: "UPDATE_TOAST", toast: { ...updatedProps, id } });
    const dismiss = () => {
        clearToastTimeout(id);
        dispatch({ type: "DISMISS_TOAST", toastId: id });
        addToRemoveQueue(id);
    };
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open) => {
                if (!open)
                    dismiss();
            },
        },
    });
    addToRemoveQueue(id);
    return { id, dismiss, update };
}
export function useToast() {
    const [state, setState] = React.useState(memoryState);
    React.useEffect(() => {
        listeners.push(setState);
        return () => {
            const index = listeners.indexOf(setState);
            if (index > -1)
                listeners.splice(index, 1);
        };
    }, []);
    const dismiss = (toastId) => {
        if (toastId)
            clearToastTimeout(toastId);
        dispatch({ type: "DISMISS_TOAST", toastId });
        if (toastId)
            addToRemoveQueue(toastId);
    };
    return {
        toasts: state.toasts,
        toast,
        dismiss,
    };
}
