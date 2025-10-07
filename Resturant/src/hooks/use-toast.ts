import * as React from "react";
import type { ToastActionElement, ToastProps } from "../Components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 5000; // 5 seconds for toast removal

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

// const actionTypes = {
//   ADD_TOAST: "ADD_TOAST",
//   UPDATE_TOAST: "UPDATE_TOAST",
//   DISMISS_TOAST: "DISMISS_TOAST",
//   REMOVE_TOAST: "REMOVE_TOAST",
// } as const;

type Action =
  | { type: "ADD_TOAST"; toast: ToasterToast }
  | { type: "UPDATE_TOAST"; toast: Partial<ToasterToast> & { id: string } }
  | { type: "DISMISS_TOAST"; toastId?: string }
  | { type: "REMOVE_TOAST"; toastId?: string };

interface State {
  toasts: ToasterToast[];
}

let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          toastId === undefined || t.id === toastId
            ? { ...t, open: false }
            : t
        ),
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

let memoryState: State = { toasts: [] };
const listeners: Array<(state: State) => void> = [];

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => listener(memoryState));
}

function addToRemoveQueue(toastId: string) {
  if (toastTimeouts.has(toastId)) return;

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({ type: "REMOVE_TOAST", toastId });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
}

function clearToastTimeout(toastId: string) {
  const timeout = toastTimeouts.get(toastId);
  if (timeout) {
    clearTimeout(timeout);
    toastTimeouts.delete(toastId);
  }
}

export function toast(props: Omit<ToasterToast, "id">) {
  const id = genId();

  const update = (updatedProps: Partial<ToasterToast>) =>
    dispatch({ type: "UPDATE_TOAST", toast: { ...updatedProps, id } });

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
        if (!open) dismiss();
      },
    },
  });

  addToRemoveQueue(id);

  return { id, dismiss, update };
}

export function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  const dismiss = (toastId?: string) => {
    if (toastId) clearToastTimeout(toastId);
    dispatch({ type: "DISMISS_TOAST", toastId });
    if (toastId) addToRemoveQueue(toastId);
  };

  return {
    toasts: state.toasts,
    toast,
    dismiss,
  };
}
