import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Badge } from "../Components/ui/badge";
import {
  Bed, Wifi, Car, Tv, Wind, Coffee, Shield, Users, Bath, Phone, Utensils
} from "lucide-react";
import { Link } from "react-router-dom";

const Rooms = () => {
  // Common amenities shown in separate section
  const amenitiesList = [
    { icon: Wifi, name: "Free WiFi" },
    { icon: Wind, name: "Air Conditioning" },
    { icon: Tv, name: "Television" },
    { icon: Car, name: "Free Parking" },
    { icon: Coffee, name: "Tea/Coffee" },
    { icon: Shield, name: "24/7 Security" },
    { icon: Bath, name: "Hot Water" },
    { icon: Phone, name: "Room Service" },
    { icon: Utensils, name: "In-room Dining" }
  ];

  const roomTypes = [
    {
      name: "Standard AC Room",
      price: "₹1000",
      originalPrice: "₹1200",
      capacity: "2 Adults",
      size: "200 sq ft",
      popular: true,
      amenities: ["AC", "TV", "WiFi", "Hot Water", "Room Service"],
      description:
        "Comfortable AC room with modern amenities, perfect for couples or solo travelers seeking a peaceful rest.",
      features: [
        "Queen size bed with quality mattress",
        "Attached bathroom with hot water",
        "24-inch LED TV with cable",
        "Free high-speed WiFi",
        "Tea/Coffee making facility",
        "Room service available"
      ]
    },
    {
      name: "Deluxe AC Room",
      price: "₹1500",
      originalPrice: "₹1700",
      capacity: "3 Adults",
      size: "300 sq ft",
      premium: true,
      amenities: ["AC", "TV", "WiFi", "Mini Fridge", "Sofa", "Hot Water"],
      description:
        "Spacious deluxe room with additional comfort features and seating area for families.",
      features: [
        "King size bed + extra bed option",
        "Spacious room with seating area",
        "32-inch Smart TV with streaming",
        "Mini refrigerator",
        "Premium bathroom amenities",
        "Complimentary breakfast"
      ]
    },
    {
      name: "Family Suite",
      price: "₹2000",
      originalPrice: "₹2500",
      capacity: "5 Adults",
      size: "500 sq ft",
      luxury: true,
      amenities: ["AC", "TV", "WiFi", "Kitchenette", "Dining", "Hot Water"],
      description:
        "Large family suite with separate living area and kitchenette, ideal for extended stays.",
      features: [
        "Two bedrooms with quality bedding",
        "Separate living and dining area",
        "Kitchenette with basic cooking facility",
        "Large bathroom with premium fittings",
        "Balcony with highway view",
        "Priority room service"
      ]
    }
  ];

  const policies = [
    "Check-in: 12:00 PM | Check-out: 11:00 AM",
    "Valid ID proof required for all guests",
    "No smoking inside rooms",
    "Pets allowed with prior permission",
    "Room service available 24/7",
    "Free cancellation up to 6 hours before check-in",
    "Extra bed charges: ₹300 per night",
    "Children below 5 years stay free"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Comfortable Accommodation</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Rest peacefully in our clean, comfortable rooms designed for travelers.
            From budget-friendly options to luxurious suites, we have accommodation for every need.
          </p>
          <div className="flex justify-center space-x-8 text-yellow-200">
            <div>
              <div className="text-3xl font-bold">25</div>
              <div className="text-sm">Rooms Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm">Room Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold">Safe</div>
              <div className="text-sm">& Secure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-800 mb-4">Choose Your Room</h2>
            <p className="text-lg text-gray-600">
              Select from our range of accommodation options designed for comfort and convenience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {roomTypes.map((room, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-amber-800">{room.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" /> {room.capacity}
                        </div>
                        <div className="flex items-center">
                          <Bed className="h-4 w-4 mr-1" /> {room.size}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-amber-700">{room.price}</div>
                      <div className="text-sm line-through text-gray-500">
                        {room.originalPrice}
                      </div>
                      <div className="text-xs text-gray-600">per night</div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{room.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-amber-800 mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-amber-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-amber-800 mb-2">Amenities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="heritage" className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                    <Link to="/booking">Book This Room</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Amenities */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-amber-800 mb-8">
            Common Amenities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {amenitiesList.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-amber-600 mb-2" />
                <span className="text-sm font-medium text-amber-800">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Policies */}
      <section className="py-16 bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-center">Hotel Policies</h2>
          <div className="max-w-3xl mx-auto bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <ul className="space-y-2">
              {policies.map((policy, index) => (
                <li key={index} className="flex items-start text-sm">
                  <span className="text-yellow-300 mr-2">•</span>
                  {policy}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
