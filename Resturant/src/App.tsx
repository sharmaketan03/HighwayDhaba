import { Suspense, lazy, useEffect, useState } from "react";
import { Toaster } from "./Components/ui/toaster";
import { Toaster as Sonner } from "./Components/ui/sonner";
import { TooltipProvider } from "./Components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Logo from "../src/assets/Logo.jpeg";

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
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
    <div className="text-center">
      {/* Animated logo */}
      <div className="relative mb-8">
        <div className="relative w-40 h-40 mx-auto rounded-full bg-white shadow-2xl flex items-center justify-center overflow-hidden animate-slide-lr">
          <img 
            src={Logo} 
            alt="PJ Dhaba Logo" 
            className="w-36 h-36 object-cover rounded-full"
          />
        </div>
      </div>
      
      {/* Loading text */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-amber-700">PJ Dhaba</h2>
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg font-medium text-amber-800">Loading</span>
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-amber-600 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-orange-600 rounded-full animate-bounce delay-100"></span>
            <span className="w-2 h-2 bg-amber-600 rounded-full animate-bounce delay-200"></span>
          </div>
        </div>
        <p className="text-sm text-amber-600/80">
          Please wait while we prepare your experience
        </p>
      </div>
    </div>
    
    <style >{`
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
    `}</style>
  </div>
);

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
    return <PageLoader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
