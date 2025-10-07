import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Input } from "../Components/ui/input";
import { Textarea } from "../Components/ui/textarea";
import { Label } from "../Components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "../Components/ui/use-toast";
const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        visitDate: "",
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.subject || !formData.message) {
            toast({
                title: "Error",
                description: "Please fill in all required fields (*)",
            });
            return;
        }
        const message = `
📩 *Contact Form Submission*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Visit Date: ${formData.visitDate || "N/A"}
Subject: ${formData.subject}
Message: ${formData.message}
    `;
        const phoneNumber = "8000054835";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
        toast({
            title: "Redirecting to WhatsApp...",
            description: "Please confirm and send your message.",
        });
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            visitDate: "",
        });
    };
    const contactInfo = [
        {
            icon: MapPin,
            title: "Location",
            details: ["Highway Road, Near Bus Stand", "Rajasthan, India 123456"],
            action: "Get Directions",
        },
        {
            icon: Phone,
            title: "Phone",
            details: ["+91 98765 43210", "+91 98765 43211"],
            action: "Call Now",
        },
        {
            icon: Mail,
            title: "Email",
            details: ["info@PJdhaba.com", "bookings@PJdhaba.com"],
            action: "Send Email",
        },
        {
            icon: Clock,
            title: "Hours",
            details: ["Open 24 Hours", "7 Days a Week"],
            action: "Always Open",
        },
    ];
    return (_jsx("div", { className: "min-h-screen bg-background", children: _jsx("section", { className: "py-20", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-3xl font-bold text-heritage-brown mb-6", children: "Send us a Message" }), _jsx(Card, { className: "p-6 shadow-warm", children: _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "name", children: "Full Name *" }), _jsx(Input, { id: "name", name: "name", value: formData.name, onChange: handleChange, placeholder: "Your full name", required: true })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "phone", children: "Phone Number *" }), _jsx(Input, { id: "phone", name: "phone", type: "tel", value: formData.phone, onChange: handleChange, placeholder: "+91 98765 43210", required: true })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "email", children: "Email Address" }), _jsx(Input, { id: "email", name: "email", type: "email", value: formData.email, onChange: handleChange, placeholder: "your@email.com" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "visitDate", children: "Planned Visit Date" }), _jsx(Input, { id: "visitDate", name: "visitDate", type: "date", value: formData.visitDate, onChange: handleChange })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "subject", children: "Subject *" }), _jsx(Input, { id: "subject", name: "subject", value: formData.subject, onChange: handleChange, placeholder: "What can we help you with?", required: true })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "message", children: "Message *" }), _jsx(Textarea, { id: "message", name: "message", value: formData.message, onChange: handleChange, placeholder: "Please provide details about your inquiry...", rows: 5, required: true })] }), _jsxs(Button, { type: "submit", variant: "heritage", size: "lg", className: "w-full flex items-center justify-center", children: [_jsx(Send, { className: "h-4 w-4 mr-2" }), " Send via WhatsApp"] })] }) }) })] }), _jsxs("div", { children: [_jsx("h2", { className: "text-3xl font-bold text-heritage-brown mb-6", children: "Get in Touch" }), _jsx("div", { className: "space-y-6", children: contactInfo.map((info, index) => (_jsx(Card, { className: "p-6 shadow-warm", children: _jsxs(CardContent, { className: "flex items-start space-x-4", children: [_jsx("div", { className: "bg-gradient-heritage p-3 rounded-lg", children: _jsx(info.icon, { className: "h-6 w-6 text-white" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-xl font-semibold text-heritage-brown mb-2", children: info.title }), info.details.map((detail, idx) => (_jsx("p", { className: "text-muted-foreground", children: detail }, idx))), _jsx(Button, { variant: "traditional", className: "mt-3", children: info.action })] })] }) }, index))) })] })] }) }) }) }));
};
export default Contact;
