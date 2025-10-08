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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-heritage-brown mb-6">
              Our Journey of Authentic Hospitality
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              For over 15 years, PJ Dhaba has been a beacon of traditional Indian hospitality on the highway, 
              serving authentic cuisine and providing comfortable accommodation to thousands of travelers.
            </p>
            <div className="flex items-center justify-center space-x-8 text-heritage-brown">
              <div className="text-center">
                <div className="text-3xl font-bold text-traditional-gold">15+</div>
                <div className="text-sm">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-traditional-gold">50,000+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-traditional-gold">25</div>
                <div className="text-sm">Comfortable Rooms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-heritage-brown">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                PJ Dhaba began as a dream of Shri Ram Kumar Sharma in 2009, who wanted to create a place where 
                travelers could experience the true essence of Indian hospitality. Starting with just four tables 
                and a small kitchen, we served simple yet delicious meals to truck drivers and highway travelers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What started as a modest roadside eatery has grown into a beloved destination that combines 
                traditional cooking with modern comfort. Our recipes have been passed down through generations, 
                and every dish is prepared with the same love and care that our founder envisioned.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're proud to be a home away from home for travelers from across India and beyond. 
                Our commitment to authenticity, quality, and warm hospitality remains unchanged, making every 
                guest feel like part of our extended family.
              </p>
            </div>
            <div className="relative">
              <Card className="p-8 bg-gradient-heritage text-white shadow-elegant">
                <CardContent className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg leading-relaxed">
                    To preserve and share the authentic flavors of Indian cuisine while providing 
                    exceptional hospitality and comfortable accommodation to every traveler who 
                    stops at our dhaba.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-heritage-brown mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do, from preparing each meal to welcoming every guest.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 bg-card/80 backdrop-blur-sm shadow-warm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <value.icon className="h-12 w-12 text-traditional-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-heritage-brown mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-heritage-brown mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              From humble beginnings to becoming a trusted name on the highway
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-heritage rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{item.year}</span>
                    </div>
                  </div>
                  <Card className="flex-1 p-6 shadow-warm hover:shadow-elegant transition-all duration-300">
                    <CardContent>
                      <h3 className="text-xl font-semibold text-heritage-brown mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-heritage-brown text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-traditional-gold">Visit Us Today</h2>
              <p className="text-lg mb-8 opacity-90 leading-relaxed">
                Located on the main highway, PJ Dhaba is easily accessible for all types of vehicles. 
                With ample parking space and round-the-clock service, we're here to serve you whenever you need us.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-traditional-gold" />
                  <span className="text-lg">Highway Road, Near Bus Stand, Rajasthan 123456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-traditional-gold" />
                  <span className="text-lg">Open 24 Hours, 7 Days a Week</span>
                </div>
              </div>
              <div className="mt-8">
                <Button variant="heritage" size="lg" asChild>
                  <Link to="/contact">Get Directions</Link>
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-traditional-gold">Awards & Recognition</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <Award className="h-8 w-8 text-traditional-gold" />
                    <div className="text-left flex-1 ml-4">
                      <div className="font-semibold">Best Highway Dhaba</div>
                      <div className="text-sm opacity-80">Rajasthan Tourism Board - 2018</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <Award className="h-8 w-8 text-traditional-gold" />
                    <div className="text-left flex-1 ml-4">
                      <div className="font-semibold">Excellence in Service</div>
                      <div className="text-sm opacity-80">Highway Association - 2020</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <Award className="h-8 w-8 text-traditional-gold" />
                    <div className="text-left flex-1 ml-4">
                      <div className="font-semibold">Customer Choice Award</div>
                      <div className="text-sm opacity-80">Travel Guide India - 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;