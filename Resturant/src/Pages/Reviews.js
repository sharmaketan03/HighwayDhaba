import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent } from "../Components/ui/card";
import { Textarea } from "../Components/ui/textarea";
import { Badge } from "../Components/ui/badge";
import { Button } from "../Components/ui/button";
import { Input } from "../Components/ui/input";
import { Label } from "../Components/ui/label";
import { Star, ThumbsUp, MessageCircle, Award, TrendingUp, Users, Calendar, MapPin, Verified, Heart, Share2 } from "lucide-react";
import { useToast } from "../Components/ui/use-toast";
const Reviews = () => {
    const { toast } = useToast();
    const [activeFilter, setActiveFilter] = useState("all");
    const [reviewForm, setReviewForm] = useState({
        name: "",
        email: "",
        rating: 5,
        title: "",
        review: "",
        visitDate: ""
    });
    const filters = [
        { id: "all", name: "All Reviews", count: 847 },
        { id: "excellent", name: "Excellent (5★)", count: 623 },
        { id: "good", name: "Good (4★)", count: 156 },
        { id: "average", name: "Average (3★)", count: 45 },
        { id: "food", name: "Food Reviews", count: 432 },
        { id: "rooms", name: "Room Reviews", count: 298 },
        { id: "service", name: "Service Reviews", count: 387 }
    ];
    const reviews = [
        {
            id: 1,
            name: "Rajesh Kumar",
            location: "Delhi",
            rating: 5,
            date: "2024-01-15",
            title: "Excellent food and clean rooms!",
            review: "Been traveling on this highway for 10 years and PJ Dhaba is by far the best stop. The food is authentic, rooms are spotlessly clean, and staff is very courteous. The dal tadka and butter chicken are must-try items. Highly recommended for families and solo travelers alike.",
            category: "food",
            helpful: 24,
            verified: true,
            photos: 3
        },
        {
            id: 2,
            name: "Priya Sharma",
            location: "Mumbai",
            rating: 5,
            date: "2024-01-12",
            title: "Perfect highway stop for families",
            review: "Traveled with my family including elderly parents and kids. The dhaba exceeded our expectations. Food was hygienic and delicious, rooms were comfortable with AC, and there's ample parking. The staff helped us with our luggage and were very accommodating. Will definitely stop here again!",
            category: "rooms",
            helpful: 18,
            verified: true,
            photos: 2
        },
        {
            id: 3,
            name: "Suresh Patel",
            location: "Ahmedabad",
            rating: 4,
            date: "2024-01-10",
            title: "Great food, good service",
            review: "The thali here is amazing with authentic Rajasthani flavors. Portion sizes are generous and prices are reasonable. Room was clean but could use some minor maintenance. Overall a good experience and would recommend to other travelers.",
            category: "food",
            helpful: 15,
            verified: false,
            photos: 1
        },
        {
            id: 4,
            name: "Amit Singh",
            location: "Jaipur",
            rating: 5,
            date: "2024-01-08",
            title: "Best dhaba on the highway!",
            review: "As a truck driver, I've been coming here for 5 years. The food is consistently good, staff remembers regular customers, and parking is safe. The special truck driver package is great value for money. This place feels like home away from home.",
            category: "service",
            helpful: 31,
            verified: true,
            photos: 0,
            featured: true
        },
        {
            id: 5,
            name: "Kavita Mehta",
            location: "Pune",
            rating: 5,
            date: "2024-01-06",
            title: "Authentic taste and warm hospitality",
            review: "The chicken biryani and dal makhani were exceptional. The flavors remind me of home-cooked meals. Room was spacious and well-maintained. The staff went out of their way to arrange a birthday cake for my daughter. Truly heartwarming experience!",
            category: "food",
            helpful: 22,
            verified: true,
            photos: 4
        },
        {
            id: 6,
            name: "Vikram Chauhan",
            location: "Gurgaon",
            rating: 4,
            date: "2024-01-04",
            title: "Good value for money",
            review: "Clean rooms, decent food, and reasonable prices. The masala chai is excellent. WiFi worked well throughout my stay. Only suggestion would be to improve the breakfast variety. Overall satisfied with the service and will visit again.",
            category: "rooms",
            helpful: 12,
            verified: false,
            photos: 2
        }
    ];
    const stats = [
        { label: "Total Reviews", value: "847", icon: MessageCircle },
        { label: "Average Rating", value: "4.7", icon: Star },
        { label: "Happy Customers", value: "50,000+", icon: Users },
        { label: "Years Serving", value: "15+", icon: Award }
    ];
    const ratingDistribution = [
        { stars: 5, count: 623, percentage: 73.6 },
        { stars: 4, count: 156, percentage: 18.4 },
        { stars: 3, count: 45, percentage: 5.3 },
        { stars: 2, count: 15, percentage: 1.8 },
        { stars: 1, count: 8, percentage: 0.9 }
    ];
    const handleSubmitReview = (e) => {
        e.preventDefault();
        toast({
            title: "Review Submitted!",
            description: "Thank you for your feedback. Your review will be published after verification.",
        });
        setReviewForm({
            name: "",
            email: "",
            rating: 5,
            title: "",
            review: "",
            visitDate: ""
        });
    };
    const handleFormChange = (name, value) => {
        setReviewForm(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const filteredReviews = activeFilter === "all" ? reviews :
        activeFilter === "excellent" ? reviews.filter(r => r.rating === 5) :
            activeFilter === "good" ? reviews.filter(r => r.rating === 4) :
                activeFilter === "average" ? reviews.filter(r => r.rating === 3) :
                    reviews.filter(r => r.category === activeFilter);
    const renderStars = (rating, size = "md") => {
        const sizeClass = size === "sm" ? "h-3 w-3" : size === "lg" ? "h-6 w-6" : "h-4 w-4";
        return (_jsx("div", { className: "flex", children: [1, 2, 3, 4, 5].map((star) => (_jsx(Star, { className: `${sizeClass} ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}` }, star))) }));
    };
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx("section", { className: "py-20 bg-gradient-heritage text-white", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h1", { className: "text-5xl font-bold mb-6", children: "Customer Reviews" }), _jsx("p", { className: "text-xl mb-8 opacity-90 max-w-3xl mx-auto", children: "Read what our guests say about their experience at PJ Dhaba. Your feedback helps us serve you better and guides fellow travelers." }), _jsx("div", { className: "flex justify-center space-x-8 text-traditional-gold", children: stats.map((stat, index) => (_jsxs("div", { className: "text-center", children: [_jsx(stat.icon, { className: "h-8 w-8 mx-auto mb-2" }), _jsx("div", { className: "text-3xl font-bold", children: stat.value }), _jsx("div", { className: "text-sm", children: stat.label })] }, index))) })] }) }), _jsx("section", { className: "py-12 bg-traditional-gold text-heritage-brown", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center", children: [_jsxs("div", { className: "text-center lg:text-left", children: [_jsxs("div", { className: "flex items-center justify-center lg:justify-start space-x-4 mb-4", children: [_jsx("div", { className: "text-6xl font-bold", children: "4.7" }), _jsxs("div", { children: [renderStars(5, "lg"), _jsx("div", { className: "text-sm mt-1", children: "Based on 847 reviews" })] })] }), _jsxs("div", { className: "flex items-center justify-center lg:justify-start space-x-4", children: [_jsx(TrendingUp, { className: "h-5 w-5" }), _jsx("span", { className: "text-sm", children: "Rating improved by 12% this year" })] })] }), _jsx("div", { className: "space-y-2", children: ratingDistribution.map((rating, index) => (_jsxs("div", { className: "flex items-center space-x-3", children: [_jsxs("div", { className: "flex items-center space-x-1 w-16", children: [_jsx("span", { className: "text-sm", children: rating.stars }), _jsx(Star, { className: "h-3 w-3 text-yellow-600 fill-current" })] }), _jsx("div", { className: "flex-1 bg-white/30 rounded-full h-2", children: _jsx("div", { className: "bg-heritage-brown h-2 rounded-full", style: { width: `${rating.percentage}%` } }) }), _jsxs("div", { className: "text-sm w-16 text-right", children: [rating.count, " (", rating.percentage, "%)"] })] }, index))) })] }) }) }), _jsx("section", { className: "py-20", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-8", children: [_jsxs("div", { className: "lg:col-span-1", children: [_jsx("h3", { className: "text-xl font-semibold text-heritage-brown mb-4", children: "Filter Reviews" }), _jsx("div", { className: "space-y-2", children: filters.map((filter) => (_jsxs(Button, { variant: activeFilter === filter.id ? "heritage" : "outline", className: "w-full justify-between", onClick: () => setActiveFilter(filter.id), children: [_jsx("span", { children: filter.name }), _jsx(Badge, { variant: "secondary", className: "ml-2", children: filter.count })] }, filter.id))) }), _jsx(Card, { className: "mt-8 p-4 shadow-warm", children: _jsxs(CardContent, { children: [_jsx("h4", { className: "font-semibold text-heritage-brown mb-3", children: "Share Your Experience" }), _jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Help fellow travelers by sharing your honest review" }), _jsx(Button, { variant: "traditional", className: "w-full", onClick: () => {
                                                        document.getElementById('review-form')?.scrollIntoView({ behavior: 'smooth' });
                                                    }, children: "Write a Review" })] }) })] }), _jsxs("div", { className: "lg:col-span-3", children: [_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsxs("h2", { className: "text-2xl font-bold text-heritage-brown", children: ["Reviews (", filteredReviews.length, ")"] }), _jsxs("select", { className: "border rounded-md px-3 py-1 text-sm", children: [_jsx("option", { children: "Most Recent" }), _jsx("option", { children: "Highest Rated" }), _jsx("option", { children: "Most Helpful" })] })] }), _jsx("div", { className: "space-y-6", children: filteredReviews.map((review) => (_jsx(Card, { className: `p-6 shadow-warm hover:shadow-elegant transition-all duration-300 ${review.featured ? 'border-traditional-gold border-2' : ''}`, children: _jsxs(CardContent, { children: [review.featured && (_jsxs(Badge, { className: "mb-4 bg-traditional-gold text-heritage-brown", children: [_jsx(Award, { className: "h-3 w-3 mr-1" }), "Featured Review"] })), _jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "w-12 h-12 bg-gradient-heritage rounded-full flex items-center justify-center", children: _jsx("span", { className: "text-white font-semibold", children: review.name.charAt(0) }) }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("h4", { className: "font-semibold text-heritage-brown", children: review.name }), review.verified && (_jsx(Verified, { className: "h-4 w-4 text-blue-500" }))] }), _jsxs("div", { className: "flex items-center space-x-4 text-sm text-muted-foreground", children: [_jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(MapPin, { className: "h-3 w-3" }), _jsx("span", { children: review.location })] }), _jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(Calendar, { className: "h-3 w-3" }), _jsx("span", { children: new Date(review.date).toLocaleDateString() })] })] })] })] }), _jsxs("div", { className: "text-right", children: [renderStars(review.rating), _jsx(Badge, { variant: "secondary", className: "mt-1 text-xs capitalize", children: review.category })] })] }), _jsx("h3", { className: "text-lg font-semibold text-heritage-brown mb-2", children: review.title }), _jsx("p", { className: "text-muted-foreground mb-4 leading-relaxed", children: review.review }), review.photos > 0 && (_jsx("div", { className: "mb-4", children: _jsxs("span", { className: "text-sm text-muted-foreground", children: ["\uD83D\uDCF7 ", review.photos, " photo", review.photos > 1 ? 's' : '', " attached"] }) })), _jsxs("div", { className: "flex items-center justify-between pt-4 border-t", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs(Button, { variant: "ghost", size: "sm", className: "flex items-center space-x-1", children: [_jsx(ThumbsUp, { className: "h-4 w-4" }), _jsxs("span", { children: ["Helpful (", review.helpful, ")"] })] }), _jsxs(Button, { variant: "ghost", size: "sm", className: "flex items-center space-x-1", children: [_jsx(Heart, { className: "h-4 w-4" }), _jsx("span", { children: "Like" })] }), _jsxs(Button, { variant: "ghost", size: "sm", className: "flex items-center space-x-1", children: [_jsx(Share2, { className: "h-4 w-4" }), _jsx("span", { children: "Share" })] })] }), review.verified && (_jsxs("span", { className: "text-xs text-green-600 flex items-center", children: [_jsx(Verified, { className: "h-3 w-3 mr-1" }), "Verified Stay"] }))] })] }) }, review.id))) }), _jsx("div", { className: "text-center mt-8", children: _jsx(Button, { variant: "traditional", size: "lg", children: "Load More Reviews" }) })] })] }) }) }), _jsx("section", { id: "review-form", className: "py-20 bg-gradient-warm", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "max-w-2xl mx-auto", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h2", { className: "text-4xl font-bold text-heritage-brown mb-4", children: "Write a Review" }), _jsx("p", { className: "text-lg text-muted-foreground", children: "Share your experience and help fellow travelers" })] }), _jsx(Card, { className: "p-6 shadow-elegant", children: _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmitReview, className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "review-name", children: "Your Name *" }), _jsx(Input, { id: "review-name", value: reviewForm.name, onChange: (e) => handleFormChange("name", e.target.value), placeholder: "Your full name", required: true })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "review-email", children: "Email Address *" }), _jsx(Input, { id: "review-email", type: "email", value: reviewForm.email, onChange: (e) => handleFormChange("email", e.target.value), placeholder: "your@email.com", required: true })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "visit-date", children: "Visit Date" }), _jsx(Input, { id: "visit-date", type: "date", value: reviewForm.visitDate, onChange: (e) => handleFormChange("visitDate", e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, { children: "Overall Rating *" }), _jsxs("div", { className: "flex items-center space-x-2 mt-2", children: [[1, 2, 3, 4, 5].map((star) => (_jsx("button", { type: "button", onClick: () => handleFormChange("rating", star), className: "focus:outline-none", children: _jsx(Star, { className: `h-8 w-8 ${star <= reviewForm.rating
                                                                                ? "text-yellow-400 fill-current"
                                                                                : "text-gray-300"}` }) }, star))), _jsxs("span", { className: "ml-2 text-sm text-muted-foreground", children: ["(", reviewForm.rating, " star", reviewForm.rating !== 1 ? 's' : '', ")"] })] })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "review-title", children: "Review Title *" }), _jsx(Input, { id: "review-title", value: reviewForm.title, onChange: (e) => handleFormChange("title", e.target.value), placeholder: "Summarize your experience in a few words", required: true })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "review-text", children: "Your Review *" }), _jsx(Textarea, { id: "review-text", value: reviewForm.review, onChange: (e) => handleFormChange("review", e.target.value), placeholder: "Share details about your experience, food quality, service, cleanliness, etc.", rows: 5, required: true })] }), _jsxs("div", { className: "text-sm text-muted-foreground", children: [_jsx("p", { children: "By submitting this review, you agree that:" }), _jsxs("ul", { className: "list-disc list-inside mt-2 space-y-1", children: [_jsx("li", { children: "Your review is based on your own experience" }), _jsx("li", { children: "You haven't been paid or incentivized to write this review" }), _jsx("li", { children: "Your review may be published on our website and social media" })] })] }), _jsxs(Button, { type: "submit", variant: "heritage", size: "lg", className: "w-full", children: [_jsx(MessageCircle, { className: "h-4 w-4 mr-2" }), "Submit Review"] })] }) }) })] }) }) })] }));
};
export default Reviews;
