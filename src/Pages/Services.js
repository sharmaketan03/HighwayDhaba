import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Utensils, Bed, Car, Wifi, Coffee, Users, Shield, Clock, Phone, Wrench, MapPin, Fuel, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
const Services = () => {
    const mainServices = [
        {
            icon: Utensils,
            title: "Restaurant & Kitchen",
            description: "Authentic Indian cuisine served 24/7 with fresh ingredients and traditional recipes",
            features: [
                "24/7 food service",
                "Authentic Indian cuisine",
                "Fresh daily ingredients",
                "Vegetarian & Non-vegetarian options",
                "Custom meal preparation",
                "Takeaway & delivery"
            ],
            popular: true
        },
        {
            icon: Bed,
            title: "Accommodation",
            description: "Clean, comfortable rooms with modern amenities for peaceful rest during your journey",
            features: [
                "AC & Non-AC rooms",
                "Clean bedding & towels",
                "Hot water 24/7",
                "Room service",
                "Family rooms available",
                "Budget to luxury options"
            ],
            popular: true
        },
        {
            icon: Car,
            title: "Parking Facility",
            description: "Secure parking space for all vehicle types with 24/7 security and surveillance",
            features: [
                "Trucks & buses welcome",
                "Car parking available",
                "24/7 security",
                "CCTV surveillance",
                "Well-lit parking area",
                "Easy access to highway"
            ]
        },
        {
            icon: Fuel,
            title: "Fuel Station",
            description: "Convenient fuel station adjacent to our dhaba for diesel, petrol, and other vehicle needs",
            features: [
                "Diesel & petrol available",
                "Quality fuel guaranteed",
                "Quick service",
                "Digital payment accepted",
                "Fuel for all vehicle types",
                "Competitive prices"
            ]
        }
    ];
    const additionalServices = [
        {
            icon: Wifi,
            title: "Free WiFi",
            description: "High-speed internet access throughout the property"
        },
        {
            icon: Coffee,
            title: "Tea/Coffee Corner",
            description: "Complimentary tea and coffee available round the clock"
        },
        {
            icon: Phone,
            title: "STD/ISD Calling",
            description: "Long distance calling facility for guests"
        },
        {
            icon: Wrench,
            title: "Vehicle Maintenance",
            description: "Basic vehicle repair and maintenance services"
        },
        {
            icon: Shield,
            title: "24/7 Security",
            description: "Round-the-clock security for guest and vehicle safety"
        },
        {
            icon: Headphones,
            title: "Travel Assistance",
            description: "Local travel information and route guidance"
        },
        {
            icon: Users,
            title: "Group Bookings",
            description: "Special arrangements for large groups and tour parties"
        },
        {
            icon: MapPin,
            title: "Location Services",
            description: "Prime highway location with easy accessibility"
        }
    ];
    const specialServices = [
        {
            title: "Catering Services",
            description: "We provide catering services for events, parties, and large gatherings with authentic Indian cuisine.",
            features: [
                "Wedding catering",
                "Corporate events",
                "Party catering",
                "Bulk meal orders",
                "Custom menu planning",
                "Professional service staff"
            ],
            price: "Starting from ₹200 per person"
        },
        {
            title: "Truck Driver Packages",
            description: "Special packages designed for truck drivers with accommodation, meals, and parking.",
            features: [
                "Room + 3 meals",
                "Secure truck parking",
                "24/7 access",
                "Laundry service",
                "Common rest area",
                "Vehicle maintenance info"
            ],
            price: "Complete package ₹800/day"
        },
        {
            title: "Family Tour Packages",
            description: "Complete packages for families traveling on highways with accommodation and meals.",
            features: [
                "Family rooms",
                "All meals included",
                "Kids play area",
                "Local sightseeing info",
                "Safe environment",
                "Cultural experience"
            ],
            price: "Starting from ₹2500/day for family of 4"
        }
    ];
    const facilities = [
        "Clean and hygienic washrooms",
        "Medical first aid available",
        "ATM facility nearby",
        "Vehicle washing service",
        "Tire puncture repair",
        "Mobile charging points",
        "Common seating area",
        "Newspaper and magazines",
        "Local tourist information",
        "Emergency assistance"
    ];
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx("section", { className: "py-20 bg-gradient-heritage text-white", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h1", { className: "text-5xl font-bold mb-6", children: "Our Services" }), _jsx("p", { className: "text-xl mb-8 opacity-90 max-w-3xl mx-auto", children: "Comprehensive services designed to make your highway journey comfortable, safe, and memorable. From authentic dining to comfortable lodging, we take care of all your travel needs." }), _jsxs("div", { className: "flex justify-center space-x-8 text-traditional-gold", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold", children: "24/7" }), _jsx("div", { className: "text-sm", children: "Service Available" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold", children: "15+" }), _jsx("div", { className: "text-sm", children: "Years Experience" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold", children: "100%" }), _jsx("div", { className: "text-sm", children: "Customer Satisfaction" })] })] })] }) }), _jsx("section", { className: "py-20", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-heritage-brown mb-4", children: "Core Services" }), _jsx("p", { className: "text-lg text-muted-foreground", children: "Essential services that make us your perfect highway companion" })] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: mainServices.map((service, index) => (_jsxs(Card, { className: "p-6 shadow-warm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 relative overflow-hidden", children: [service.popular && (_jsx("div", { className: "absolute top-4 right-4", children: _jsx("span", { className: "bg-traditional-gold text-heritage-brown px-3 py-1 rounded-full text-sm font-medium", children: "Most Popular" }) })), _jsxs(CardContent, { className: "pt-6", children: [_jsxs("div", { className: "flex items-start space-x-4 mb-4", children: [_jsx("div", { className: "bg-gradient-heritage p-3 rounded-lg", children: _jsx(service.icon, { className: "h-8 w-8 text-white" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-xl font-semibold text-heritage-brown mb-2", children: service.title }), _jsx("p", { className: "text-muted-foreground", children: service.description })] })] }), _jsxs("div", { className: "mt-6", children: [_jsx("h4", { className: "font-semibold text-heritage-brown mb-3", children: "Key Features:" }), _jsx("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: service.features.map((feature, idx) => (_jsxs("li", { className: "flex items-center text-sm text-muted-foreground", children: [_jsx("span", { className: "text-traditional-gold mr-2", children: "\u2022" }), feature] }, idx))) })] })] })] }, index))) })] }) }), _jsx("section", { className: "py-20 bg-gradient-warm", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-heritage-brown mb-4", children: "Additional Amenities" }), _jsx("p", { className: "text-lg text-muted-foreground", children: "Extra conveniences to enhance your travel experience" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: additionalServices.map((service, index) => (_jsx(Card, { className: "text-center p-6 bg-card/80 backdrop-blur-sm shadow-warm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1", children: _jsxs(CardContent, { className: "pt-6", children: [_jsx(service.icon, { className: "h-10 w-10 text-traditional-gold mx-auto mb-3" }), _jsx("h3", { className: "text-lg font-semibold text-heritage-brown mb-2", children: service.title }), _jsx("p", { className: "text-muted-foreground text-sm", children: service.description })] }) }, index))) })] }) }), _jsx("section", { className: "py-20", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-heritage-brown mb-4", children: "Special Packages" }), _jsx("p", { className: "text-lg text-muted-foreground", children: "Comprehensive packages tailored for different travel needs" })] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: specialServices.map((service, index) => (_jsx(Card, { className: "p-6 shadow-warm hover:shadow-elegant transition-all duration-300", children: _jsxs(CardContent, { children: [_jsx("h3", { className: "text-xl font-semibold text-heritage-brown mb-3", children: service.title }), _jsx("p", { className: "text-muted-foreground mb-4", children: service.description }), _jsxs("div", { className: "mb-4", children: [_jsx("h4", { className: "font-semibold text-heritage-brown mb-2", children: "Package Includes:" }), _jsx("ul", { className: "space-y-1", children: service.features.map((feature, idx) => (_jsxs("li", { className: "flex items-center text-sm text-muted-foreground", children: [_jsx("span", { className: "text-traditional-gold mr-2", children: "\u2022" }), feature] }, idx))) })] }), _jsxs("div", { className: "border-t pt-4", children: [_jsx("div", { className: "text-xl font-bold text-traditional-gold mb-3", children: service.price }), _jsx(Button, { variant: "traditional", className: "w-full", asChild: true, children: _jsx(Link, { to: "/booking", children: "Book Package" }) })] })] }) }, index))) })] }) }), _jsx("section", { className: "py-20 bg-heritage-brown text-white", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold mb-4 text-traditional-gold", children: "Additional Facilities" }), _jsx("p", { className: "text-lg opacity-90", children: "More conveniences available at PJ Dhaba for your comfort" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto", children: facilities.map((facility, index) => (_jsxs("div", { className: "flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4", children: [_jsx(Clock, { className: "h-5 w-5 text-traditional-gold flex-shrink-0" }), _jsx("span", { className: "text-sm", children: facility })] }, index))) })] }) }), _jsx("section", { className: "py-16 bg-traditional-gold text-heritage-brown", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 text-center", children: [_jsxs("div", { children: [_jsx(Utensils, { className: "h-12 w-12 mx-auto mb-4" }), _jsx("h3", { className: "text-xl font-bold mb-2", children: "Restaurant" }), _jsx("p", { className: "text-lg", children: "24 Hours Daily" }), _jsx("p", { className: "text-sm opacity-80", children: "Always fresh, always available" })] }), _jsxs("div", { children: [_jsx(Bed, { className: "h-12 w-12 mx-auto mb-4" }), _jsx("h3", { className: "text-xl font-bold mb-2", children: "Accommodation" }), _jsx("p", { className: "text-lg", children: "Check-in: 12 PM" }), _jsx("p", { className: "text-sm opacity-80", children: "Check-out: 11 AM" })] }), _jsxs("div", { children: [_jsx(Phone, { className: "h-12 w-12 mx-auto mb-4" }), _jsx("h3", { className: "text-xl font-bold mb-2", children: "Customer Support" }), _jsx("p", { className: "text-lg", children: "24/7 Available" }), _jsx("p", { className: "text-sm opacity-80", children: "+91 98765 43210" })] })] }) }) }), _jsx("section", { className: "py-20 bg-royal-blue text-white", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-4xl font-bold mb-6", children: "Need Any of Our Services?" }), _jsx("p", { className: "text-lg mb-8 opacity-90 max-w-2xl mx-auto", children: "Contact us for any service requirements or special arrangements. Our team is available 24/7 to assist you with your needs." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { variant: "heritage", size: "lg", className: "text-lg px-8", asChild: true, children: _jsx(Link, { to: "/contact", children: "Contact Us" }) }), _jsx(Button, { variant: "outline", size: "lg", className: "border-white/30 text-white hover:bg-white hover:text-royal-blue", children: "Call: +91 98765 43210" })] })] }) })] }));
};
export default Services;
