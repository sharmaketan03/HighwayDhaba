import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Input } from "../Components/ui/input";
import { Label } from "../Components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "../Components/ui/select";
import { Textarea } from "../Components/ui/textarea";
import { CreditCard, CheckCircle, Shield, Phone, Star, Percent, } from "lucide-react";
import { useToast } from "../Components/ui/use-toast";
const Booking = () => {
    const { toast } = useToast();
    const [activeTab, setActiveTab] = useState("rooms");
    const [bookingData, setBookingData] = useState({
        roomType: "",
        checkIn: "",
        checkOut: "",
        guests: "1",
        rooms: "1",
        tableDate: "",
        tableTime: "",
        partySize: "2",
        occasion: "",
        name: "",
        email: "",
        phone: "",
        specialRequests: "",
    });
    const roomTypes = [
        { id: "standard-ac", name: "Standard AC Room", price: 800 },
        { id: "deluxe-ac", name: "Deluxe AC Room", price: 1200 },
        { id: "family-suite", name: "Family Suite", price: 2000 },
        { id: "budget-room", name: "Budget Non-AC Room", price: 400 },
    ];
    const timeSlots = [
        "12:00 PM",
        "12:30 PM",
        "1:00 PM",
        "1:30 PM",
        "2:00 PM",
        "7:00 PM",
        "7:30 PM",
        "8:00 PM",
        "8:30 PM",
        "9:00 PM",
    ];
    const occasions = [
        "Birthday Celebration",
        "Anniversary",
        "Family Gathering",
        "Business Meeting",
        "Casual Dining",
        "Special Occasion",
    ];
    const benefits = [
        { icon: CheckCircle, text: "Instant confirmation" },
        { icon: CreditCard, text: "Flexible payment options" },
        { icon: Phone, text: "24/7 customer support" },
        { icon: Shield, text: "Secure booking process" },
        { icon: Percent, text: "Best price guarantee" },
        { icon: Star, text: "Loyalty rewards" },
    ];
    // ✅ Strongly typed change handler
    const handleChange = (name, value) => {
        setBookingData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    // ✅ Strongly typed submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `
Booking Details:
${activeTab === "rooms" ? "Room Booking" : "Table Reservation"}

Name: ${bookingData.name}
Phone: ${bookingData.phone}
Email: ${bookingData.email || "N/A"}
${activeTab === "rooms"
            ? `Room Type: ${bookingData.roomType}
Check-in: ${bookingData.checkIn}
Check-out: ${bookingData.checkOut}
Guests: ${bookingData.guests}
Rooms: ${bookingData.rooms}`
            : `Date: ${bookingData.tableDate}
Time: ${bookingData.tableTime}
Party Size: ${bookingData.partySize}
Occasion: ${bookingData.occasion || "N/A"}`}
Special Requests: ${bookingData.specialRequests || "N/A"}
    `;
        const phoneNumber = "8239237508";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
        toast({
            title: "Redirecting to WhatsApp...",
            description: "Please confirm your booking by sending the message.",
        });
    };
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-b from-amber-100 to-amber-50 py-10", children: _jsxs("section", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "flex justify-center mb-8 space-x-4", children: [_jsx(Button, { variant: activeTab === "rooms" ? "heritage" : "outline", onClick: () => setActiveTab("rooms"), children: "Room Booking" }), _jsx(Button, { variant: activeTab === "tables" ? "heritage" : "outline", onClick: () => setActiveTab("tables"), children: "Table Reservation" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsx("div", { className: "lg:col-span-2", children: _jsx(Card, { className: "p-6 shadow-lg bg-white/90 backdrop-blur-sm", children: _jsxs(CardContent, { children: [_jsx("h2", { className: "text-2xl font-bold text-heritage-brown mb-6", children: activeTab === "rooms" ? "Room Booking" : "Table Reservation" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "name", children: "Name" }), _jsx(Input, { id: "name", value: bookingData.name, onChange: (e) => handleChange("name", e.target.value), required: true, placeholder: "Enter your name" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { id: "email", type: "email", value: bookingData.email, onChange: (e) => handleChange("email", e.target.value), placeholder: "Enter your email" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "phone", children: "Phone" }), _jsx(Input, { id: "phone", type: "tel", value: bookingData.phone, onChange: (e) => handleChange("phone", e.target.value), required: true, placeholder: "Enter your phone number" })] }), activeTab === "rooms" && (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "roomType", children: "Room Type" }), _jsxs(Select, { onValueChange: (value) => handleChange("roomType", value), value: bookingData.roomType, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select room type" }) }), _jsx(SelectContent, { children: roomTypes.map((room) => (_jsxs(SelectItem, { value: room.name, children: [room.name, " (\u20B9", room.price, "/night)"] }, room.id))) })] })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "checkIn", children: "Check-in" }), _jsx(Input, { id: "checkIn", type: "date", value: bookingData.checkIn, onChange: (e) => handleChange("checkIn", e.target.value), required: true })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "checkOut", children: "Check-out" }), _jsx(Input, { id: "checkOut", type: "date", value: bookingData.checkOut, onChange: (e) => handleChange("checkOut", e.target.value), required: true })] })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "guests", children: "Guests" }), _jsx(Input, { id: "guests", type: "number", min: "1", value: bookingData.guests, onChange: (e) => handleChange("guests", e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "rooms", children: "Rooms" }), _jsx(Input, { id: "rooms", type: "number", min: "1", value: bookingData.rooms, onChange: (e) => handleChange("rooms", e.target.value) })] })] })] })), activeTab === "tables" && (_jsxs(_Fragment, { children: [_jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "tableDate", children: "Date" }), _jsx(Input, { id: "tableDate", type: "date", value: bookingData.tableDate, onChange: (e) => handleChange("tableDate", e.target.value), required: true })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "tableTime", children: "Time" }), _jsxs(Select, { onValueChange: (value) => handleChange("tableTime", value), value: bookingData.tableTime, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select time" }) }), _jsx(SelectContent, { children: timeSlots.map((slot) => (_jsx(SelectItem, { value: slot, children: slot }, slot))) })] })] })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "partySize", children: "Party Size" }), _jsx(Input, { id: "partySize", type: "number", min: "1", value: bookingData.partySize, onChange: (e) => handleChange("partySize", e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "occasion", children: "Occasion" }), _jsxs(Select, { onValueChange: (value) => handleChange("occasion", value), value: bookingData.occasion, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select occasion" }) }), _jsx(SelectContent, { children: occasions.map((occ) => (_jsx(SelectItem, { value: occ, children: occ }, occ))) })] })] })] })] })), _jsxs("div", { children: [_jsx(Label, { htmlFor: "specialRequests", children: "Special Requests" }), _jsx(Textarea, { id: "specialRequests", value: bookingData.specialRequests, onChange: (e) => handleChange("specialRequests", e.target.value), placeholder: "Any special requests?", rows: 4 })] }), _jsxs(Button, { type: "submit", variant: "heritage", size: "lg", className: "w-full flex justify-center items-center space-x-2", children: [_jsx(CheckCircle, { className: "h-5 w-5" }), _jsx("span", { children: "Confirm Booking (via WhatsApp)" })] })] })] }) }) }), _jsx("div", { children: _jsx(Card, { className: "p-6", children: _jsxs(CardContent, { children: [_jsx("h3", { className: "text-lg font-semibold mb-4", children: "Why Book With Us?" }), _jsx("ul", { className: "space-y-2", children: benefits.map((b, i) => (_jsxs("li", { className: "flex items-center space-x-2", children: [_jsx(b.icon, { className: "h-4 w-4 text-green-600" }), _jsx("span", { children: b.text })] }, i))) })] }) }) })] })] }) }));
};
export default Booking;
