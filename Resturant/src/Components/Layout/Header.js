import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";
import Logo from "../../assets/Logo.jpeg";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    // Navigation Links
    const navigation = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Menu", href: "/menu" },
        { name: "Rooms", href: "/rooms" },
        { name: "Services", href: "/services" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
        { name: "Booking", href: "/booking" },
        { name: "Reviews", href: "/reviews" },
        // { name: "Blog", href: "/blog" },
    ];
    return (_jsxs("header", { className: "sticky top-0 z-50 w-full border-b border-heritage-brown/20 bg-background/95 backdrop-blur-sm", children: [_jsx("div", { className: "hidden md:block bg-heritage-brown text-white py-2", children: _jsxs("div", { className: "container mx-auto px-4 flex justify-between items-center text-sm", children: [_jsxs("div", { className: "flex items-center gap-6", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Phone, { className: "h-4 w-4" }), _jsx("span", { children: "+91 98765 43210" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "h-4 w-4" }), _jsx("span", { children: "Highway Road, Rajasthan" })] })] }), _jsx("div", { className: "text-traditional-gold font-medium", children: "Open 24/7 \u2022 Best Dhaba Experience" })] }) }), _jsxs("div", { className: "container mx-auto px-4 py-4 flex items-center justify-between", children: [_jsxs(Link, { to: "/", className: "flex items-center space-x-3", children: [_jsx("img", { src: Logo, alt: "PJ Dhaba Logo", className: "w-12 h-12 object-cover rounded-full border border-heritage-brown" }), _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-heritage-brown", children: "PJ Dhaba" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Authentic Taste \u2022 Comfortable Stay" })] })] }), _jsx("nav", { className: "hidden lg:flex items-center space-x-2", children: navigation.map((item) => (_jsx(Link, { to: item.href, className: `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === item.href
                                ? "bg-traditional-gold text-heritage-brown"
                                : "text-foreground hover:bg-warm-cream hover:text-heritage-brown"}`, children: item.name }, item.name))) }), _jsx("div", { className: "hidden md:flex items-center space-x-4", children: _jsx(Button, { variant: "heritage", size: "lg", asChild: true, children: _jsx(Link, { to: "/booking", children: "Book Now" }) }) }), _jsx("button", { className: "lg:hidden p-2 rounded-md text-foreground hover:bg-warm-cream", onClick: () => setIsMenuOpen(!isMenuOpen), children: isMenuOpen ? _jsx(X, { className: "h-6 w-6" }) : _jsx(Menu, { className: "h-6 w-6" }) })] }), isMenuOpen && (_jsx("nav", { className: "lg:hidden border-t border-heritage-brown/20", children: _jsxs("div", { className: "pt-4 px-4 space-y-2", children: [navigation.map((item) => (_jsx(Link, { to: item.href, className: `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${location.pathname === item.href
                                ? "bg-traditional-gold text-heritage-brown"
                                : "text-foreground hover:bg-warm-cream hover:text-heritage-brown"}`, onClick: () => setIsMenuOpen(false), children: item.name }, item.name))), _jsx("div", { className: "pt-4", children: _jsx(Button, { variant: "heritage", className: "w-full", asChild: true, children: _jsx(Link, { to: "/booking", children: "Book Now" }) }) })] }) }))] }));
};
export default Header;
