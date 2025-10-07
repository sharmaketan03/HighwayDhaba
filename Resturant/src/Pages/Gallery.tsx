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
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const galleryItems = [
    {
      id: 1,
      image:"src/assets/ChatGPT.png",
      title: "Traditional Dhaba Interior",
      category: "interior",
      description: "Authentic Indian dhaba atmosphere with traditional decor and warm lighting",
      likes: 245,
      type: "photo"
    },
    {
      id: 2,
      image:"src/assets/tali.jpg" ,
      title: "Authentic Indian Thali",
      category: "food",
      description: "Complete Indian meal with various curries, dal, rice, and bread",
      likes: 189,
      type: "photo",
      popular: true
    },
    {
      id: 3,
      image:"src/assets/hotel-room.jpg" ,
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
      image: "src/assets/images.jpeg" ,
      title: "Rajasthani Special Thali",
      category: "food",
      description: "Regional specialties from the heart of Rajasthan",
      likes: 223,
      type: "photo",
      popular: true
    }
  ];

  const toggleLike = (id: number) => {
    setLikedItems(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  const stats = [
    { label: "Photos", value: "500+" },
    { label: "Happy Customers", value: "50,000+" },
    { label: "Years of Service", value: "15+" },
    { label: "Daily Visitors", value: "200+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-heritage text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTIwIDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-4">
            <Badge className="bg-traditional-gold text-heritage-brown px-4 py-2 text-sm font-semibold">
              <Sparkles className="h-4 w-4 mr-2 inline" />
              Photo Gallery
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Experience PG Dhaba
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
            Take a visual journey through authentic cuisine, comfortable rooms, 
            and the happy faces of our satisfied customers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            {stats.map((stat, index) => (
              <div key={index} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
                <div className="text-3xl md:text-4xl font-bold text-traditional-gold mb-1">{stat.value}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="py-16 bg-gradient-gold">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-heritage-brown">Why Our Guests Love Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: ChefHat, title: "Authentic Recipes", desc: "Traditional cooking methods" },
                { icon: Building, title: "Clean Accommodation", desc: "Comfortable & hygienic rooms" },
                { icon: Users, title: "Warm Hospitality", desc: "Treating guests like family" },
                { icon: Camera, title: "Memorable Moments", desc: "Creating lasting memories" }
              ].map((item, index) => (
                <div key={index} className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-warm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <item.icon className="h-10 w-10 mx-auto mb-3 text-warm-orange" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Gallery Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Photo Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of authentic cuisine, comfortable rooms, and happy moments
            </p>
          </div>

          {/* Masonry Gallery Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="break-inside-avoid group overflow-hidden shadow-warm hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown/80 via-heritage-brown/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-primary-foreground">
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="bg-card/30 backdrop-blur-md border-primary-foreground/30 text-primary-foreground hover:bg-card hover:text-foreground"
                            onClick={() => toggleLike(item.id)}
                          >
                            <Heart className={`h-4 w-4 ${likedItems.includes(item.id) ? 'fill-spice-red text-spice-red' : ''}`} />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="bg-card/30 backdrop-blur-md border-primary-foreground/30 text-primary-foreground hover:bg-card hover:text-foreground"
                          >
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="bg-card/30 backdrop-blur-md border-primary-foreground/30 text-primary-foreground hover:bg-card hover:text-foreground"
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.featured && (
                      <Badge className="bg-traditional-gold text-heritage-brown font-semibold shadow-lg">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    {item.popular && (
                      <Badge className="bg-spice-red text-primary-foreground font-semibold shadow-lg">
                        Popular
                      </Badge>
                    )}
                    {item.type === "video" && (
                      <Badge className="bg-primary text-primary-foreground font-semibold shadow-lg">
                        <Play className="h-3 w-3 mr-1" />
                        Video
                      </Badge>
                    )}
                  </div>

                  {/* Likes Counter */}
                  <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                    <Heart className="h-3.5 w-3.5 text-spice-red fill-spice-red" />
                    <span className="text-xs font-semibold text-foreground">
                      {likedItems.includes(item.id) ? item.likes + 1 : item.likes}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs capitalize font-medium">
                      {item.category}
                    </Badge>
                    <Button size="sm" variant="ghost" className="text-xs h-8">
                      View Full
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <Button variant="traditional" size="lg" className="px-12 text-base h-12">
              <Camera className="h-5 w-5 mr-2" />
              Load More Photos
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Showing {galleryItems.length} of 500+ photos
            </p>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-warm-orange text-primary-foreground px-4 py-2 mb-4">
              Virtual Experience
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">Take a Virtual Tour</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Experience PG Dhaba from the comfort of your home with our immersive virtual tours
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Utensils, title: "Restaurant Tour", desc: "Explore our dining areas and kitchen", gradient: "from-warm-orange to-spice-red" },
                { icon: Building, title: "Room Tour", desc: "See our comfortable accommodation", gradient: "from-traditional-gold to-warm-orange" },
                { icon: Camera, title: "Full Property", desc: "Complete walkthrough of PG Dhaba", gradient: "from-heritage-brown to-warm-orange" }
              ].map((tour, index) => (
                <Card key={index} className="group p-8 bg-card shadow-warm hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-traditional-gold">
                  <CardContent className="text-center p-0">
                    <div className={`w-20 h-20 bg-gradient-to-br ${tour.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <tour.icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{tour.title}</h3>
                    <p className="text-muted-foreground mb-6">{tour.desc}</p>
                    <Button variant="traditional" className="w-full">
                      <Play className="h-4 w-4 mr-2" />
                      Start Tour
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Contest Section */}
      <section className="relative py-24 bg-heritage-brown text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTIwIDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6">
            <Badge className="bg-traditional-gold text-heritage-brown px-4 py-2 text-base">
              <Camera className="h-4 w-4 mr-2 inline" />
              Community Challenge
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-traditional-gold">Share Your Moments</h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Visited PG Dhaba? Share your photos with us and get featured in our gallery! 
            Tag us on social media or submit your best shots.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="heritage" size="lg" className="text-lg px-10 h-14 shadow-xl">
              <Camera className="h-5 w-5 mr-2" />
              Submit Photos
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-heritage-brown text-lg px-10 h-14 backdrop-blur-sm"
            >
              <Share2 className="h-5 w-5 mr-2" />
              Follow Us
            </Button>
          </div>
          <div className="bg-traditional-gold/20 backdrop-blur-sm border border-traditional-gold/30 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-sm md:text-base font-medium">
              Use hashtag <span className="text-traditional-gold font-bold">#PGDhabaMemories</span> • 
              Best photos get featured • Monthly contests with prizes
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
