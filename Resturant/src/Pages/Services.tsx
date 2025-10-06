import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { 
  Utensils, 
  Bed, 
  Car, 
  Wifi, 
  Coffee, 
  Users, 
  Shield, 
  Clock, 
  Phone,
  Wrench,
  MapPin,
  Fuel,
  Headphones
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: Utensils,
      title: "Restaurant & Kitchen",
      description: "Authentic Indian cuisine served 24/7 with fresh ingredients and traditional recipes",
      features: [
        "24/7 food service",
        "Authentic Indian cuisine",
        "Fresh daily ingredients",
        "Vegetarian & Non-vegetarian options",
        "Custom meal preparation",
        "Takeaway & delivery"
      ],
      popular: true
    },
    {
      icon: Bed,
      title: "Accommodation",
      description: "Clean, comfortable rooms with modern amenities for peaceful rest during your journey",
      features: [
        "AC & Non-AC rooms",
        "Clean bedding & towels",
        "Hot water 24/7",
        "Room service",
        "Family rooms available",
        "Budget to luxury options"
      ],
      popular: true
    },
    {
      icon: Car,
      title: "Parking Facility",
      description: "Secure parking space for all vehicle types with 24/7 security and surveillance",
      features: [
        "Trucks & buses welcome",
        "Car parking available",
        "24/7 security",
        "CCTV surveillance",
        "Well-lit parking area",
        "Easy access to highway"
      ]
    },
    {
      icon: Fuel,
      title: "Fuel Station",
      description: "Convenient fuel station adjacent to our dhaba for diesel, petrol, and other vehicle needs",
      features: [
        "Diesel & petrol available",
        "Quality fuel guaranteed",
        "Quick service",
        "Digital payment accepted",
        "Fuel for all vehicle types",
        "Competitive prices"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "High-speed internet access throughout the property"
    },
    {
      icon: Coffee,
      title: "Tea/Coffee Corner",
      description: "Complimentary tea and coffee available round the clock"
    },
    {
      icon: Phone,
      title: "STD/ISD Calling",
      description: "Long distance calling facility for guests"
    },
    {
      icon: Wrench,
      title: "Vehicle Maintenance",
      description: "Basic vehicle repair and maintenance services"
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock security for guest and vehicle safety"
    },
    {
      icon: Headphones,
      title: "Travel Assistance",
      description: "Local travel information and route guidance"
    },
    {
      icon: Users,
      title: "Group Bookings",
      description: "Special arrangements for large groups and tour parties"
    },
    {
      icon: MapPin,
      title: "Location Services",
      description: "Prime highway location with easy accessibility"
    }
  ];

  const specialServices = [
    {
      title: "Catering Services",
      description: "We provide catering services for events, parties, and large gatherings with authentic Indian cuisine.",
      features: [
        "Wedding catering",
        "Corporate events",
        "Party catering",
        "Bulk meal orders",
        "Custom menu planning",
        "Professional service staff"
      ],
      price: "Starting from ₹200 per person"
    },
    {
      title: "Truck Driver Packages",
      description: "Special packages designed for truck drivers with accommodation, meals, and parking.",
      features: [
        "Room + 3 meals",
        "Secure truck parking",
        "24/7 access",
        "Laundry service",
        "Common rest area",
        "Vehicle maintenance info"
      ],
      price: "Complete package ₹800/day"
    },
    {
      title: "Family Tour Packages",
      description: "Complete packages for families traveling on highways with accommodation and meals.",
      features: [
        "Family rooms",
        "All meals included",
        "Kids play area",
        "Local sightseeing info",
        "Safe environment",
        "Cultural experience"
      ],
      price: "Starting from ₹2500/day for family of 4"
    }
  ];

  const facilities = [
    "Clean and hygienic washrooms",
    "Medical first aid available",
    "ATM facility nearby",
    "Vehicle washing service",
    "Tire puncture repair",
    "Mobile charging points",
    "Common seating area",
    "Newspaper and magazines",
    "Local tourist information",
    "Emergency assistance"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-heritage text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Comprehensive services designed to make your highway journey comfortable, safe, and memorable. 
            From authentic dining to comfortable lodging, we take care of all your travel needs.
          </p>
          <div className="flex justify-center space-x-8 text-traditional-gold">
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm">Service Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-heritage-brown mb-4">Core Services</h2>
            <p className="text-lg text-muted-foreground">
              Essential services that make us your perfect highway companion
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="p-6 shadow-warm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-traditional-gold text-heritage-brown px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-gradient-heritage p-3 rounded-lg">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-heritage-brown mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-heritage-brown mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <span className="text-traditional-gold mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-heritage-brown mb-4">Additional Amenities</h2>
            <p className="text-lg text-muted-foreground">
              Extra conveniences to enhance your travel experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center p-6 bg-card/80 backdrop-blur-sm shadow-warm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <service.icon className="h-10 w-10 text-traditional-gold mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-heritage-brown mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-heritage-brown mb-4">Special Packages</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive packages tailored for different travel needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialServices.map((service, index) => (
              <Card key={index} className="p-6 shadow-warm hover:shadow-elegant transition-all duration-300">
                <CardContent>
                  <h3 className="text-xl font-semibold text-heritage-brown mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-heritage-brown mb-2">Package Includes:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <span className="text-traditional-gold mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="text-xl font-bold text-traditional-gold mb-3">{service.price}</div>
                    <Button variant="traditional" className="w-full" asChild>
                      <Link to="/booking">Book Package</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-heritage-brown text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-traditional-gold">Additional Facilities</h2>
            <p className="text-lg opacity-90">
              More conveniences available at PJ Dhaba for your comfort
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="h-5 w-5 text-traditional-gold flex-shrink-0" />
                <span className="text-sm">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="py-16 bg-traditional-gold text-heritage-brown">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Utensils className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Restaurant</h3>
              <p className="text-lg">24 Hours Daily</p>
              <p className="text-sm opacity-80">Always fresh, always available</p>
            </div>
            <div>
              <Bed className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Accommodation</h3>
              <p className="text-lg">Check-in: 12 PM</p>
              <p className="text-sm opacity-80">Check-out: 11 AM</p>
            </div>
            <div>
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Customer Support</h3>
              <p className="text-lg">24/7 Available</p>
              <p className="text-sm opacity-80">+91 98765 43210</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-royal-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Any of Our Services?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us for any service requirements or special arrangements. 
            Our team is available 24/7 to assist you with your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heritage" size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-royal-blue">
              Call: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
