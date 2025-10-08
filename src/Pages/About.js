import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Users, Award, Heart, MapPin, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";
const About = () => {
    const values = [
        {
            icon: Heart,
            title: "Authenticity",
            description: "We preserve traditional cooking methods and recipes passed down through generations, ensuring every dish maintains its authentic flavor and cultural heritage."
        },
        {
            icon: Users,
            title: "Hospitality",
            description: "Our commitment to Indian hospitality means treating every guest like family, providing warm service and making everyone feel welcome and comfortable."
        },
        {
            icon: Award,
            title: "Qualities",
            description: "We source the finest ingredients and maintain the highest standards of hygiene and food safety to deliver exceptional dining experiences."
        },
        {
            icon: Target,
            title: "Excellence",
            description: "Continuous improvement in our services, facilities, and guest experience drives us to excel in everything we do."
        }
    ];
    const timeline = [
        {
            year: "2009",
            title: "Humble Beginning",
            description: "Started as a small roadside eatery with just 4 tables, serving traditional meals to truck drivers and travelers."
        },
        {
            year: "2012",
            title: "First Expansion",
            description: "Added our first guest rooms to accommodate travelers, becoming a true dhaba with lodging facilities."
        },
        {
            year: "2015",
            title: "Modern UPJrades",
            description: "Introduced modern amenities while preserving traditional cooking methods and authentic recipes."
        },
        {
            year: "2018",
            title: "Recognition",
            description: "Awarded 'Best Highway Dhaba' by Rajasthan Tourism Board for outstanding service and food quality."
        },
        {
            year: "2021",
            title: "Digital Integration",
            description: "Launched online booking system and digital menu while maintaining our traditional charm."
        },
        {
            year: "2024",
            title: "Today",
            description: "Serving 500+ customers daily with 25 comfortable rooms and 100+ authentic dishes on our menu."
        }
    ];
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx("section", { className: "py-20 bg-gradient-warm", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [_jsx("h1", { className: "text-5xl font-bold text-heritage-brown mb-6", children: "Our Journey of Authentic Hospitality" }), _jsx("p", { className: "text-xl text-muted-foreground mb-8 leading-relaxed", children: "For over 15 years, PJ Dhaba has been a beacon of traditional Indian hospitality on the highway, serving authentic cuisine and providing comfortable accommodation to thousands of travelers." }), _jsxs("div", { className: "flex items-center justify-center space-x-8 text-heritage-brown", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-traditional-gold", children: "15+" }), _jsx("div", { className: "text-sm", children: "Years of Service" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-traditional-gold", children: "50,000+" }), _jsx("div", { className: "text-sm", children: "Happy Customers" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-traditional-gold", children: "25" }), _jsx("div", { className: "text-sm", children: "Comfortable Rooms" })] })] })] }) }) }), _jsx("section", { className: "py-20", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [_jsxs("div", { className: "space-y-6", children: [_jsx("h2", { className: "text-4xl font-bold text-heritage-brown", children: "Our Story" }), _jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "PJ Dhaba began as a dream of Shri Ram Kumar Sharma in 2009, who wanted to create a place where travelers could experience the true essence of Indian hospitality. Starting with just four tables and a small kitchen, we served simple yet delicious meals to truck drivers and highway travelers." }), _jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "What started as a modest roadside eatery has grown into a beloved destination that combines traditional cooking with modern comfort. Our recipes have been passed down through generations, and every dish is prepared with the same love and care that our founder envisioned." }), _jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "Today, we're proud to be a home away from home for travelers from across India and beyond. Our commitment to authenticity, quality, and warm hospitality remains unchanged, making every guest feel like part of our extended family." })] }), _jsx("div", { className: "relative", children: _jsx(Card, { className: "p-8 bg-gradient-heritage text-white shadow-elegant", children: _jsxs(CardContent, { className: "text-center", children: [_jsx("h3", { className: "text-2xl font-bold mb-4", children: "Our Mission" }), _jsx("p", { className: "text-lg leading-relaxed", children: "To preserve and share the authentic flavors of Indian cuisine while providing exceptional hospitality and comfortable accommodation to every traveler who stops at our dhaba." })] }) }) })] }) }) }), _jsx("section", { className: "py-20 bg-gradient-warm", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-heritage-brown mb-4", children: "Our Values" }), _jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "These core values guide everything we do, from preparing each meal to welcoming every guest." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: values.map((value, index) => (_jsx(Card, { className: "text-center p-6 bg-card/80 backdrop-blur-sm shadow-warm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1", children: _jsxs(CardContent, { className: "pt-6", children: [_jsx(value.icon, { className: "h-12 w-12 text-traditional-gold mx-auto mb-4" }), _jsx("h3", { className: "text-xl font-semibold text-heritage-brown mb-3", children: value.title }), _jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: value.description })] }) }, index))) })] }) }), _jsx("section", { className: "py-20", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-heritage-brown mb-4", children: "Our Journey" }), _jsx("p", { className: "text-lg text-muted-foreground", children: "From humble beginnings to becoming a trusted name on the highway" })] }), _jsx("div", { className: "max-w-4xl mx-auto", children: _jsx("div", { className: "space-y-8", children: timeline.map((item, index) => (_jsxs("div", { className: "flex items-start space-x-6", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("div", { className: "w-16 h-16 bg-gradient-heritage rounded-full flex items-center justify-center", children: _jsx("span", { className: "text-white font-bold", children: item.year }) }) }), _jsx(Card, { className: "flex-1 p-6 shadow-warm hover:shadow-elegant transition-all duration-300", children: _jsxs(CardContent, { children: [_jsx("h3", { className: "text-xl font-semibold text-heritage-brown mb-2", children: item.title }), _jsx("p", { className: "text-muted-foreground leading-relaxed", children: item.description })] }) })] }, index))) }) })] }) }), _jsx("section", { className: "py-20 bg-heritage-brown text-white", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-4xl font-bold mb-6 text-traditional-gold", children: "Visit Us Today" }), _jsx("p", { className: "text-lg mb-8 opacity-90 leading-relaxed", children: "Located on the main highway, PJ Dhaba is easily accessible for all types of vehicles. With ample parking space and round-the-clock service, we're here to serve you whenever you need us." }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(MapPin, { className: "h-6 w-6 text-traditional-gold" }), _jsx("span", { className: "text-lg", children: "Highway Road, Near Bus Stand, Rajasthan 123456" })] }), _jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(Clock, { className: "h-6 w-6 text-traditional-gold" }), _jsx("span", { className: "text-lg", children: "Open 24 Hours, 7 Days a Week" })] })] }), _jsx("div", { className: "mt-8", children: _jsx(Button, { variant: "heritage", size: "lg", asChild: true, children: _jsx(Link, { to: "/contact", children: "Get Directions" }) }) })] }), _jsx("div", { className: "text-center", children: _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg p-8", children: [_jsx("h3", { className: "text-2xl font-bold mb-6 text-traditional-gold", children: "Awards & Recognition" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between p-4 bg-white/5 rounded-lg", children: [_jsx(Award, { className: "h-8 w-8 text-traditional-gold" }), _jsxs("div", { className: "text-left flex-1 ml-4", children: [_jsx("div", { className: "font-semibold", children: "Best Highway Dhaba" }), _jsx("div", { className: "text-sm opacity-80", children: "Rajasthan Tourism Board - 2018" })] })] }), _jsxs("div", { className: "flex items-center justify-between p-4 bg-white/5 rounded-lg", children: [_jsx(Award, { className: "h-8 w-8 text-traditional-gold" }), _jsxs("div", { className: "text-left flex-1 ml-4", children: [_jsx("div", { className: "font-semibold", children: "Excellence in Service" }), _jsx("div", { className: "text-sm opacity-80", children: "Highway Association - 2020" })] })] }), _jsxs("div", { className: "flex items-center justify-between p-4 bg-white/5 rounded-lg", children: [_jsx(Award, { className: "h-8 w-8 text-traditional-gold" }), _jsxs("div", { className: "text-left flex-1 ml-4", children: [_jsx("div", { className: "font-semibold", children: "Customer Choice Award" }), _jsx("div", { className: "text-sm opacity-80", children: "Travel Guide India - 2023" })] })] })] })] }) })] }) }) })] }));
};
export default About;
