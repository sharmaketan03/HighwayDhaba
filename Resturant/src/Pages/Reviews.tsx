import { useState } from "react";
import { Card, CardContent } from "../Components/ui/card";


import { Textarea } from "../Components/ui/textarea";

import { Badge } from "../Components/ui/badge";

import { Button } from "../Components/ui/button";
import { Input } from "../Components/ui/input";
import { Label } from "../Components/ui/label";
import { 
  Star, 
  ThumbsUp, 
  MessageCircle, 
  Award, 
  TrendingUp, 
  Users,
  Calendar,
  MapPin,
  Verified,
  Heart,
  Share2
} from "lucide-react";
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

  const handleSubmitReview = (e: React.FormEvent) => {
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

  const handleFormChange = (name: string, value: string | number) => {
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

  const renderStars = (rating: number, size: "sm" | "md" | "lg" = "md") => {
    const sizeClass = size === "sm" ? "h-3 w-3" : size === "lg" ? "h-6 w-6" : "h-4 w-4";
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClass} ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-heritage text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Customer Reviews</h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Read what our guests say about their experience at PJ Dhaba. 
            Your feedback helps us serve you better and guides fellow travelers.
          </p>
          <div className="flex justify-center space-x-8 text-traditional-gold">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="py-12 bg-traditional-gold text-heritage-brown">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                <div className="text-6xl font-bold">4.7</div>
                <div>
                  {renderStars(5, "lg")}
                  <div className="text-sm mt-1">Based on 847 reviews</div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm">Rating improved by 12% this year</span>
              </div>
            </div>
            
            <div className="space-y-2">
              {ratingDistribution.map((rating, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 w-16">
                    <span className="text-sm">{rating.stars}</span>
                    <Star className="h-3 w-3 text-yellow-600 fill-current" />
                  </div>
                  <div className="flex-1 bg-white/30 rounded-full h-2">
                    <div 
                      className="bg-heritage-brown h-2 rounded-full" 
                      style={{ width: `${rating.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm w-16 text-right">
                    {rating.count} ({rating.percentage}%)
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold text-heritage-brown mb-4">Filter Reviews</h3>
              <div className="space-y-2">
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={activeFilter === filter.id ? "heritage" : "outline"}
                    className="w-full justify-between"
                    onClick={() => setActiveFilter(filter.id)}
                  >
                    <span>{filter.name}</span>
                    <Badge variant="secondary" className="ml-2">
                      {filter.count}
                    </Badge>
                  </Button>
                ))}
              </div>

              {/* Write Review */}
              <Card className="mt-8 p-4 shadow-warm">
                <CardContent>
                  <h4 className="font-semibold text-heritage-brown mb-3">Share Your Experience</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Help fellow travelers by sharing your honest review
                  </p>
                  <Button variant="traditional" className="w-full" onClick={() => {
                    document.getElementById('review-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Write a Review
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Reviews List */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-heritage-brown">
                  Reviews ({filteredReviews.length})
                </h2>
                <select className="border rounded-md px-3 py-1 text-sm">
                  <option>Most Recent</option>
                  <option>Highest Rated</option>
                  <option>Most Helpful</option>
                </select>
              </div>

              <div className="space-y-6">
                {filteredReviews.map((review) => (
                  <Card key={review.id} className={`p-6 shadow-warm hover:shadow-elegant transition-all duration-300 ${review.featured ? 'border-traditional-gold border-2' : ''}`}>
                    <CardContent>
                      {review.featured && (
                        <Badge className="mb-4 bg-traditional-gold text-heritage-brown">
                          <Award className="h-3 w-3 mr-1" />
                          Featured Review
                        </Badge>
                      )}
                      
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-12 h-12 bg-gradient-heritage rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">
                              {review.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="font-semibold text-heritage-brown">{review.name}</h4>
                              {review.verified && (
                                <Verified className="h-4 w-4 text-blue-500" />
                              )}
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-3 w-3" />
                                <span>{review.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-3 w-3" />
                                <span>{new Date(review.date).toLocaleDateString()}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          {renderStars(review.rating)}
                          <Badge variant="secondary" className="mt-1 text-xs capitalize">
                            {review.category}
                          </Badge>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-heritage-brown mb-2">{review.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{review.review}</p>

                      {review.photos > 0 && (
                        <div className="mb-4">
                          <span className="text-sm text-muted-foreground">
                            📷 {review.photos} photo{review.photos > 1 ? 's' : ''} attached
                          </span>
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center space-x-4">
                          <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                            <ThumbsUp className="h-4 w-4" />
                            <span>Helpful ({review.helpful})</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>Like</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                            <Share2 className="h-4 w-4" />
                            <span>Share</span>
                          </Button>
                        </div>
                        {review.verified && (
                          <span className="text-xs text-green-600 flex items-center">
                            <Verified className="h-3 w-3 mr-1" />
                            Verified Stay
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="traditional" size="lg">
                  Load More Reviews
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Write Review Form */}
      <section id="review-form" className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-heritage-brown mb-4">Write a Review</h2>
              <p className="text-lg text-muted-foreground">
                Share your experience and help fellow travelers
              </p>
            </div>

            <Card className="p-6 shadow-elegant">
              <CardContent>
                <form onSubmit={handleSubmitReview} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="review-name">Your Name *</Label>
                      <Input
                        id="review-name"
                        value={reviewForm.name}
                        onChange={(e) => handleFormChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="review-email">Email Address *</Label>
                      <Input
                        id="review-email"
                        type="email"
                        value={reviewForm.email}
                        onChange={(e) => handleFormChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="visit-date">Visit Date</Label>
                      <Input
                        id="visit-date"
                        type="date"
                        value={reviewForm.visitDate}
                        onChange={(e) => handleFormChange("visitDate", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>Overall Rating *</Label>
                      <div className="flex items-center space-x-2 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleFormChange("rating", star)}
                            className="focus:outline-none"
                          >
                            <Star
                              className={`h-8 w-8 ${
                                star <= reviewForm.rating
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          </button>
                        ))}
                        <span className="ml-2 text-sm text-muted-foreground">
                          ({reviewForm.rating} star{reviewForm.rating !== 1 ? 's' : ''})
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="review-title">Review Title *</Label>
                    <Input
                      id="review-title"
                      value={reviewForm.title}
                      onChange={(e) => handleFormChange("title", e.target.value)}
                      placeholder="Summarize your experience in a few words"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="review-text">Your Review *</Label>
                    <Textarea
                      id="review-text"
                      value={reviewForm.review}
                      onChange={(e) => handleFormChange("review", e.target.value)}
                      placeholder="Share details about your experience, food quality, service, cleanliness, etc."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <p>By submitting this review, you agree that:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Your review is based on your own experience</li>
                      <li>You haven't been paid or incentivized to write this review</li>
                      <li>Your review may be published on our website and social media</li>
                    </ul>
                  </div>

                  <Button type="submit" variant="heritage" size="lg" className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Submit Review
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;