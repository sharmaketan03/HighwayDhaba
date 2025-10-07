import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Badge } from "../Components/ui/badge";
import { Camera, Play, Heart, Share2, Download, ChefHat, Users, Building, Utensils, Sparkles } from "lucide-react";
// import heroImage from "../assets/ChatGPT Image Sep 28, 2025, 11_51_22 AM.png"
// import foodImage from "../assets/tali.jpg";
// import roomImage from "../assets/hotel room.jpg";
// import rrajasthaniThaliImage from "../assets/images.jpeg";
// import kitchenImage from "@/assets/kitchen-gallery.jpg";
// import customersImage from "@/assets/happy-customers.jpg";
// import nightImage from "@/assets/dhaba-night.jpg";
// import dalTadkaImage from "../assets/daltdka.webp";
// import tandoorImage from "../assets/tandoor.jpg";
// import truckDriversImage from "@/assets/truck-drivers.jpg";
// import traditionalSeatingImage from "@/assets/traditional-seating.jpg";
// import familySuiteImage from "@/assets/family-suite.jpg";
const Gallery = () => {
    const [likedItems, setLikedItems] = useState([]);
    const galleryItems = [
        {
            id: 1,
            image: "src/assets/ChatGPT.png",
            title: "Traditional Dhaba Interior",
            category: "interior",
            description: "Authentic Indian dhaba atmosphere with traditional decor and warm lighting",
            likes: 245,
            type: "photo"
        },
        {
            id: 2,
            image: "src/assets/tali.jpg",
            title: "Authentic Indian Thali",
            category: "food",
            description: "Complete Indian meal with various curries, dal, rice, and bread",
            likes: 189,
            type: "photo",
            popular: true
        },
        {
            id: 3,
            image: "src/assets/hotel-room.jpg",
            title: "Comfortable Guest Room",
            category: "rooms",
            description: "Clean and comfortable accommodation for highway travelers",
            likes: 156,
            type: "photo"
        },
        {
            id: 4,
            // image: kitchenImage,
            title: "Live Kitchen Experience",
            category: "kitchen",
            description: "Our chefs preparing fresh authentic food in traditional style",
            likes: 278,
            type: "photo",
            featured: true
        },
        {
            id: 5,
            // image: customersImage,
            title: "Happy Family Dining",
            category: "customers",
            description: "Families enjoying our authentic cuisine and warm hospitality",
            likes: 198,
            type: "photo"
        },
        {
            id: 6,
            // image: nightImage,
            title: "Dhaba Night View",
            category: "exterior",
            description: "PG Dhaba at night - welcoming travelers 24/7",
            likes: 167,
            type: "photo"
        },
        {
            id: 7,
            image: "src/assets/daltdka.webp",
            title: "Dal Tadka Special",
            category: "food",
            description: "Our signature dal tadka with perfect tempering",
            likes: 134,
            type: "photo"
        },
        {
            id: 8,
            // image: familySuiteImage,
            title: "Family Suite",
            category: "rooms",
            description: "Spacious family accommodation with modern amenities",
            likes: 142,
            type: "photo"
        },
        {
            id: 9,
            // image: traditionalSeatingImage,
            title: "Traditional Seating Area",
            category: "interior",
            description: "Comfortable seating with traditional Indian ambiance",
            likes: 156,
            type: "photo"
        },
        {
            id: 10,
            image: "src/assets/tandoor.jpg",
            title: "Tandoor Cooking",
            category: "kitchen",
            description: "Fresh bread and tandoori items from our clay oven",
            likes: 201,
            type: "photo"
        },
        {
            id: 11,
            // image: truckDriversImage,
            title: "Truck Drivers Dining",
            category: "customers",
            description: "Serving our highway heroes with hot, fresh meals",
            likes: 187,
            type: "photo"
        },
        {
            id: 12,
            image: "src/assets/images.jpeg",
            title: "Rajasthani Special Thali",
            category: "food",
            description: "Regional specialties from the heart of Rajasthan",
            likes: 223,
            type: "photo",
            popular: true
        }
    ];
    const toggleLike = (id) => {
        setLikedItems(prev => prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]);
    };
    const stats = [
        { label: "Photos", value: "500+" },
        { label: "Happy Customers", value: "50,000+" },
        { label: "Years of Service", value: "15+" },
        { label: "Daily Visitors", value: "200+" }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("section", { className: "relative py-24 bg-gradient-heritage text-primary-foreground overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 opacity-10", children: _jsx("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTIwIDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" }) }), _jsxs("div", { className: "container mx-auto px-4 text-center relative z-10", children: [_jsx("div", { className: "inline-block mb-4", children: _jsxs(Badge, { className: "bg-traditional-gold text-heritage-brown px-4 py-2 text-sm font-semibold", children: [_jsx(Sparkles, { className: "h-4 w-4 mr-2 inline" }), "Photo Gallery"] }) }), _jsx("h1", { className: "text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700", children: "Experience PG Dhaba" }), _jsx("p", { className: "text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100", children: "Take a visual journey through authentic cuisine, comfortable rooms, and the happy faces of our satisfied customers" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200", children: stats.map((stat, index) => (_jsxs("div", { className: "bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20", children: [_jsx("div", { className: "text-3xl md:text-4xl font-bold text-traditional-gold mb-1", children: stat.value }), _jsx("div", { className: "text-sm md:text-base opacity-90", children: stat.label })] }, index))) })] })] }), _jsx("section", { className: "py-16 bg-gradient-gold", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-8 text-heritage-brown", children: "Why Our Guests Love Us" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [
                                    { icon: ChefHat, title: "Authentic Recipes", desc: "Traditional cooking methods" },
                                    { icon: Building, title: "Clean Accommodation", desc: "Comfortable & hygienic rooms" },
                                    { icon: Users, title: "Warm Hospitality", desc: "Treating guests like family" },
                                    { icon: Camera, title: "Memorable Moments", desc: "Creating lasting memories" }
                                ].map((item, index) => (_jsxs("div", { className: "bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-warm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1", children: [_jsx(item.icon, { className: "h-10 w-10 mx-auto mb-3 text-warm-orange" }), _jsx("h3", { className: "font-bold text-lg mb-2 text-foreground", children: item.title }), _jsx("p", { className: "text-sm text-muted-foreground", children: item.desc })] }, index))) })] }) }) }), _jsx("section", { className: "py-20", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-4xl font-bold text-foreground mb-4", children: "Our Photo Gallery" }), _jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Explore our collection of authentic cuisine, comfortable rooms, and happy moments" })] }), _jsx("div", { className: "columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6", children: galleryItems.map((item, index) => (_jsxs(Card, { className: "break-inside-avoid group overflow-hidden shadow-warm hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4", style: { animationDelay: `${index * 50}ms` }, children: [_jsxs("div", { className: "relative overflow-hidden", children: [_jsx("img", { src: item.image, alt: item.title, className: "w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700", loading: "lazy" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-heritage-brown/80 via-heritage-brown/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500", children: _jsx("div", { className: "absolute bottom-4 left-4 right-4", children: _jsxs("div", { className: "flex items-center justify-between text-primary-foreground", children: [_jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { size: "sm", variant: "outline", className: "bg-card/30 backdrop-blur-md border-primary-foreground/30 text-primary-foreground hover:bg-card hover:text-foreground", onClick: () => toggleLike(item.id), children: _jsx(Heart, { className: `h-4 w-4 ${likedItems.includes(item.id) ? 'fill-spice-red text-spice-red' : ''}` }) }), _jsx(Button, { size: "sm", variant: "outline", className: "bg-card/30 backdrop-blur-md border-primary-foreground/30 text-primary-foreground hover:bg-card hover:text-foreground", children: _jsx(Share2, { className: "h-4 w-4" }) })] }), _jsx(Button, { size: "sm", variant: "outline", className: "bg-card/30 backdrop-blur-md border-primary-foreground/30 text-primary-foreground hover:bg-card hover:text-foreground", children: _jsx(Download, { className: "h-4 w-4" }) })] }) }) }), _jsxs("div", { className: "absolute top-4 left-4 flex gap-2", children: [item.featured && (_jsxs(Badge, { className: "bg-traditional-gold text-heritage-brown font-semibold shadow-lg", children: [_jsx(Sparkles, { className: "h-3 w-3 mr-1" }), "Featured"] })), item.popular && (_jsx(Badge, { className: "bg-spice-red text-primary-foreground font-semibold shadow-lg", children: "Popular" })), item.type === "video" && (_jsxs(Badge, { className: "bg-primary text-primary-foreground font-semibold shadow-lg", children: [_jsx(Play, { className: "h-3 w-3 mr-1" }), "Video"] }))] }), _jsxs("div", { className: "absolute top-4 right-4 bg-card/90 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg", children: [_jsx(Heart, { className: "h-3.5 w-3.5 text-spice-red fill-spice-red" }), _jsx("span", { className: "text-xs font-semibold text-foreground", children: likedItems.includes(item.id) ? item.likes + 1 : item.likes })] })] }), _jsxs(CardContent, { className: "p-5", children: [_jsx("h3", { className: "text-lg font-bold text-foreground mb-2 line-clamp-1", children: item.title }), _jsx("p", { className: "text-muted-foreground text-sm line-clamp-2 mb-4", children: item.description }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Badge, { variant: "secondary", className: "text-xs capitalize font-medium", children: item.category }), _jsx(Button, { size: "sm", variant: "ghost", className: "text-xs h-8", children: "View Full" })] })] })] }, item.id))) }), _jsxs("div", { className: "text-center mt-16", children: [_jsxs(Button, { variant: "traditional", size: "lg", className: "px-12 text-base h-12", children: [_jsx(Camera, { className: "h-5 w-5 mr-2" }), "Load More Photos"] }), _jsxs("p", { className: "text-sm text-muted-foreground mt-4", children: ["Showing ", galleryItems.length, " of 500+ photos"] })] })] }) }), _jsx("section", { className: "py-20 bg-gradient-warm", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "text-center mb-16", children: [_jsx(Badge, { className: "bg-warm-orange text-primary-foreground px-4 py-2 mb-4", children: "Virtual Experience" }), _jsx("h2", { className: "text-4xl font-bold text-foreground mb-4", children: "Take a Virtual Tour" }), _jsx("p", { className: "text-lg text-muted-foreground mb-12 max-w-2xl mx-auto", children: "Experience PG Dhaba from the comfort of your home with our immersive virtual tours" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
                                    { icon: Utensils, title: "Restaurant Tour", desc: "Explore our dining areas and kitchen", gradient: "from-warm-orange to-spice-red" },
                                    { icon: Building, title: "Room Tour", desc: "See our comfortable accommodation", gradient: "from-traditional-gold to-warm-orange" },
                                    { icon: Camera, title: "Full Property", desc: "Complete walkthrough of PG Dhaba", gradient: "from-heritage-brown to-warm-orange" }
                                ].map((tour, index) => (_jsx(Card, { className: "group p-8 bg-card shadow-warm hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-traditional-gold", children: _jsxs(CardContent, { className: "text-center p-0", children: [_jsx("div", { className: `w-20 h-20 bg-gradient-to-br ${tour.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`, children: _jsx(tour.icon, { className: "h-10 w-10 text-primary-foreground" }) }), _jsx("h3", { className: "text-xl font-bold text-foreground mb-3", children: tour.title }), _jsx("p", { className: "text-muted-foreground mb-6", children: tour.desc }), _jsxs(Button, { variant: "traditional", className: "w-full", children: [_jsx(Play, { className: "h-4 w-4 mr-2" }), "Start Tour"] })] }) }, index))) })] }) }) }), _jsxs("section", { className: "relative py-24 bg-heritage-brown text-primary-foreground overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 opacity-10", children: _jsx("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTIwIDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10" }) }), _jsxs("div", { className: "container mx-auto px-4 text-center relative z-10", children: [_jsx("div", { className: "inline-block mb-6", children: _jsxs(Badge, { className: "bg-traditional-gold text-heritage-brown px-4 py-2 text-base", children: [_jsx(Camera, { className: "h-4 w-4 mr-2 inline" }), "Community Challenge"] }) }), _jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 text-traditional-gold", children: "Share Your Moments" }), _jsx("p", { className: "text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto", children: "Visited PG Dhaba? Share your photos with us and get featured in our gallery! Tag us on social media or submit your best shots." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-8", children: [_jsxs(Button, { variant: "heritage", size: "lg", className: "text-lg px-10 h-14 shadow-xl", children: [_jsx(Camera, { className: "h-5 w-5 mr-2" }), "Submit Photos"] }), _jsxs(Button, { variant: "outline", size: "lg", className: "border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-heritage-brown text-lg px-10 h-14 backdrop-blur-sm", children: [_jsx(Share2, { className: "h-5 w-5 mr-2" }), "Follow Us"] })] }), _jsx("div", { className: "bg-traditional-gold/20 backdrop-blur-sm border border-traditional-gold/30 rounded-xl p-6 max-w-2xl mx-auto", children: _jsxs("p", { className: "text-sm md:text-base font-medium", children: ["Use hashtag ", _jsx("span", { className: "text-traditional-gold font-bold", children: "#PGDhabaMemories" }), " \u2022 Best photos get featured \u2022 Monthly contests with prizes"] }) })] })] })] }));
};
export default Gallery;
