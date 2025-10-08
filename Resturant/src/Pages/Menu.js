import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Badge } from "../Components/ui/badge";
import { Utensils, Leaf, Flame } from "lucide-react";
const Menu = () => {
    const [activeCategory, setActiveCategory] = useState("starters");
    const categories = [
        { id: "starters", name: "Starters", icon: Utensils },
        { id: "main-veg", name: "Main Course (Veg)", icon: Leaf },
        { id: "rice-bread", name: "Rice & Bread", icon: Utensils },
        { id: "beverages", name: "Beverages", icon: Utensils },
        { id: "desserts", name: "Desserts", icon: Utensils },
    ];
    const menuItems = {
        starters: [
            {
                name: "Samosa (2 pcs)",
                price: "₹40",
                description: "Crispy pastry filled with spiced potatoes and peas",
                veg: true,
                popular: true,
                image: "src/assets/potato-samosas-_2.webp",
            },
            {
                name: "Paneer Tikka",
                price: "₹180",
                description: "Grilled cottage cheese marinated in spices",
                veg: true,
                image: "src/assets/paneer-tikka.jpg",
            },
            {
                name: "Cold Coffee",
                price: "₹220",
                description: "Chilled coffee with ice cream and cream",
                veg: true,
                spicy: false,
                image: "src/assets/cold-coffee.jpg",
            },
            {
                name: "Hot Coffee",
                price: "₹60",
                description: "This is a hot coffee",
                veg: true,
                image: "src/assets/hot-coffee.jpg",
            },
            {
                name: "Paneer Pakoda",
                price: "₹120",
                description: "Assorted vegetable fritters",
                veg: true,
                image: "src/assets/paneer-pakoda.webp",
            },
            {
                name: "Aloo Paratha",
                price: "₹280",
                description: "Fresh marinated with traditional spices",
                veg: true,
                image: "src/assets/aloo-paratha.jpg",
            },
        ],
        "main-veg": [
            {
                name: "Dal Tadka",
                price: "₹140",
                description: "Yellow lentils tempered with aromatic spices",
                veg: true,
                popular: true,
                image: "src/assets/dal-tadka.webp",
            },
            {
                name: "Paneer Butter Masala",
                price: "₹220",
                description: "Cottage cheese in rich tomato and butter gravy",
                veg: true,
                popular: true,
                image: "src/assets/paneer-butter-masala.jpeg",
            },
            {
                name: "Aloo Gobi",
                price: "₹160",
                description: "Potatoes and cauliflower cooked with spices",
                veg: true,
                image: "src/assets/aloo-gobi.jpg",
            },
            {
                name: "Palak Paneer",
                price: "₹200",
                description: "Cottage cheese in creamy spinach curry",
                veg: true,
                image: "src/assets/palak-paneer.jpg",
            },
            {
                name: "Rajma",
                price: "₹160",
                description: "Red kidney beans in thick curry",
                veg: true,
                image: "src/assets/rajma-masala.jpg",
            },
            {
                name: "Malai Kofta",
                price: "₹240",
                description: "Cottage cheese dumplings in creamy curry",
                veg: true,
                image: "src/assets/malai-kofta-2.jpg",
            },
        ],
        // other categories (rice-bread, beverages, desserts) can stay same
    };
    return (_jsx("div", { className: "min-h-screen", children: _jsx("section", { className: "py-20", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: categories.map((category) => (_jsxs(Button, { variant: activeCategory === category.id ? "heritage" : "outline", className: "flex items-center space-x-2", onClick: () => setActiveCategory(category.id), children: [_jsx(category.icon, { className: "h-4 w-4" }), _jsx("span", { children: category.name })] }, category.id))) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: menuItems[activeCategory]?.map((item, index) => (_jsx(Card, { className: "p-6 shadow-warm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1", children: _jsxs(CardContent, { children: [item.image && (_jsx("img", { src: item.image, alt: item.name, className: "w-full h-40 object-cover rounded-md mb-4" })), _jsxs("div", { className: "flex justify-between items-start mb-3", children: [_jsx("h3", { className: "text-lg font-semibold text-heritage-brown", children: item.name }), _jsx("span", { className: "text-xl font-bold text-traditional-gold", children: item.price })] }), _jsx("p", { className: "text-muted-foreground text-sm mb-4 leading-relaxed", children: item.description }), _jsxs("div", { className: "flex space-x-2", children: [item?.veg && (_jsxs(Badge, { className: "bg-green-100 text-green-800 border-green-300", children: [_jsx(Leaf, { className: "h-3 w-3 mr-1" }), "Veg"] })), !item?.veg && (_jsxs(Badge, { className: "bg-red-100 text-red-800 border-red-300", children: [_jsx(Flame, { className: "h-3 w-3 mr-1" }), "Non-Veg"] })), item?.popular && (_jsx(Badge, { className: "bg-traditional-gold/20 text-heritage-brown border-traditional-gold/30", children: "Popular" })), item?.spicy && (_jsx(Badge, { className: "bg-orange-100 text-orange-800 border-orange-300", children: "Spicy" }))] })] }) }, index))) })] }) }) }));
};
export default Menu;
