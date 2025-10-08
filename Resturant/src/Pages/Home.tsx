import { Button } from "../Components/ui/button";
import { Card, CardContent } from "../Components/ui/card";
import { Link } from "react-router-dom";
import { Star, Users, MapPin, Clock, Utensils, Bed, Wifi, Car } from "lucide-react";
import heroImage from "../assets/ChatGPT.png";
import foodImage from "../assets/tali.jpg";
import roomImage from "../assets/hotel-room.jpg";

const Home = () => {
  const features = [
    {
      icon: Utensils,
      title: "Authentic Cuisine",
      description: "Traditional Indian dishes prepared with authentic spices and recipes passed down through generations."
    },
    {
      icon: Bed,
      title: "Comfortable Stay",
      description: "Clean and comfortable rooms with modern amenities for a peaceful night's rest during your journey."
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "We're open round the clock to serve you delicious food and provide accommodation whenever you need."
    },
    {
      icon: Car,
      title: "Ample Parking",
      description: "Secure parking space for trucks, buses, cars and all types of vehicles with 24/7 security."
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      comment: "Best dhaba on the highway! Authentic taste and clean rooms. The staff is very helpful and courteous."
    },
    {
      name: "Priya Sharma",
      location: "Mumbai", 
      rating: 5,
      comment: "Amazing food quality and hygienic environment. Perfect place for families traveling on the highway."
    },
    {
      name: "Suresh Patel",
      location: "Gujarat",
      rating: 5,
      comment: "Been coming here for years. Consistently good food and service. Feels like home away from home."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-heritage-brown/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shimmer animate-float">
            Welcome to PJ Dhaba
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Experience Authentic Indian Flavors & Comfortable Stay on the Highway
          </p>
          <p className="text-lg mb-12 opacity-90 max-w-2xl mx-auto">
            From traditional Dal-Chawal to Royal Thalis, from comfortable rooms to warm hospitality - 
            your perfect stop for taste and rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heritage" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/menu">Explore Menu</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-heritage-brown" asChild>
              <Link to="/booking">Book Room</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-heritage-brown mb-4">
              Why Choose PJ Dhaba?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine traditional Indian hospitality with modern amenities to give you the best highway experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 bg-card/80 backdrop-blur-sm shadow-warm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-traditional-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-heritage-brown mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Food & Accommodation Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Food Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-heritage-brown mb-4">
                  Taste the Authentic Flavors
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our kitchen serves traditional Indian cuisine prepared with the finest ingredients and 
                  authentic spices. From regional specialties to popular favorites, every dish tells a story.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-traditional-gold mr-3" />
                    Fresh ingredients sourced daily
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-traditional-gold mr-3" />
                    Traditional recipes and cooking methods
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-traditional-gold mr-3" />
                    Hygienic food preparation
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-traditional-gold mr-3" />
                    Variety of vegetarian and non-vegetarian options
                  </li>
                </ul>
                <Button variant="traditional" size="lg" className="mt-6" asChild>
                  <Link to="/menu">View Full Menu</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={foodImage} 
                alt="Traditional Indian Thali"
                className="rounded-lg shadow-elegant w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Accommodation Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
            <div className="order-2 lg:order-1 relative">
              <img 
                src={roomImage} 
                alt="Comfortable Room"
                className="rounded-lg shadow-elegant w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown/20 to-transparent rounded-lg"></div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-heritage-brown mb-4">
                  Rest in Comfort
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  After a long journey, relax in our clean and comfortable rooms equipped with modern amenities. 
                  We ensure a peaceful stay so you can continue your journey refreshed.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <Wifi className="h-5 w-5 text-traditional-gold mr-3" />
                    Free WiFi in all rooms
                  </li>
                  <li className="flex items-center">
                    <Users className="h-5 w-5 text-traditional-gold mr-3" />
                    AC and Non-AC options available
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-traditional-gold mr-3" />
                    Prime highway location
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 text-traditional-gold mr-3" />
                    24/7 room service
                  </li>
                </ul>
                <Button variant="royal" size="lg" className="mt-6" asChild>
                  <Link to="/rooms">View Rooms</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-heritage-brown text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-traditional-gold mb-2">50,000+</div>
              <div className="text-lg">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-traditional-gold mb-2">15+</div>
              <div className="text-lg">Years of Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-traditional-gold mb-2">100+</div>
              <div className="text-lg">Menu Items</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-traditional-gold mb-2">24/7</div>
              <div className="text-lg">Service Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-heritage-brown mb-4">
              What Our Guests Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from travelers who made PJ Dhaba their preferred stop
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card/80 backdrop-blur-sm shadow-warm hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-traditional-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-heritage-brown">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-royal-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for an Authentic Experience?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your table or room today and taste the difference tradition makes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heritage" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white hover:text-royal-blue" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
