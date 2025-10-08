import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, lazy, useEffect, useState } from "react";
import { Toaster } from "./Components/ui/toaster";
import { Toaster as Sonner } from "./Components/ui/sonner";
import { TooltipProvider } from "./Components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
// import Logo from "../src/assets/Logo.jpeg"
// Lazy load all pages for better performance
const Home = lazy(() => import("../src/Pages/Home"));
const About = lazy(() => import("../src/Pages/About"));
const Menu = lazy(() => import("../src/Pages/Menu"));
const Rooms = lazy(() => import("../src/Pages/Rooms"));
const Services = lazy(() => import("../src/Pages/Services"));
const Gallery = lazy(() => import("../src/Pages/Gallery"));
const Contact = lazy(() => import("../src/Pages/Contact"));
const Booking = lazy(() => import("../src/Pages/Booking"));
const Reviews = lazy(() => import("../src/Pages/Reviews"));
const NotFound = lazy(() => import("../src/Pages/NotFound"));
// Enhanced Loading component with animation
const PageLoader = () => (_jsxs("div", { className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "relative mb-8", children: _jsx("div", { className: "relative w-40 h-40 mx-auto rounded-full bg-white shadow-2xl flex items-center justify-center overflow-hidden animate-slide-lr", children: _jsx("img", { src: "../src/assets/Logo.jpeg", alt: "PJ Dhaba Logo", className: "w-36 h-36 object-cover rounded-full" }) }) }), _jsxs("div", { className: "space-y-3", children: [_jsx("h2", { className: "text-2xl font-bold text-amber-700", children: "PJ Dhaba" }), _jsxs("div", { className: "flex items-center justify-center gap-2", children: [_jsx("span", { className: "text-lg font-medium text-amber-800", children: "Loading" }), _jsxs("div", { className: "flex gap-1", children: [_jsx("span", { className: "w-2 h-2 bg-amber-600 rounded-full animate-bounce" }), _jsx("span", { className: "w-2 h-2 bg-orange-600 rounded-full animate-bounce delay-100" }), _jsx("span", { className: "w-2 h-2 bg-amber-600 rounded-full animate-bounce delay-200" })] })] }), _jsx("p", { className: "text-sm text-amber-600/80", children: "Please wait while we prepare your experience" })] })] }), _jsx("style", { children: `
      @keyframes slide-lr {
        0%, 100% {
          transform: translateX(-10px);
        }
        50% {
          transform: translateX(10px);
        }
      }
      
      .animate-slide-lr {
        animation: slide-lr 2s ease-in-out infinite;
      }
      
      .delay-100 {
        animation-delay: 0.1s;
      }
      
      .delay-200 {
        animation-delay: 0.2s;
      }
    ` })] }));
const queryClient = new QueryClient();
const App = () => {
    const [showLoader, setShowLoader] = useState(true);
    useEffect(() => {
        // 3–4 second delay before showing the actual app
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 3500); // 3.5 seconds
        return () => clearTimeout(timer);
    }, []);
    if (showLoader) {
        return _jsx(PageLoader, {});
    }
    return (_jsx(QueryClientProvider, { client: queryClient, children: _jsxs(TooltipProvider, { children: [_jsx(Toaster, {}), _jsx(Sonner, {}), _jsx(BrowserRouter, { children: _jsx(Layout, { children: _jsx(Suspense, { fallback: _jsx(PageLoader, {}), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/menu", element: _jsx(Menu, {}) }), _jsx(Route, { path: "/rooms", element: _jsx(Rooms, {}) }), _jsx(Route, { path: "/services", element: _jsx(Services, {}) }), _jsx(Route, { path: "/gallery", element: _jsx(Gallery, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/booking", element: _jsx(Booking, {}) }), _jsx(Route, { path: "/reviews", element: _jsx(Reviews, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }) }) })] }) }));
};
export default App;
