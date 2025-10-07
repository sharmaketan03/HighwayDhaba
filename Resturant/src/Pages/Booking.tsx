import { useState, type ChangeEvent, type FormEvent } from "react";
import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Input } from "../Components/ui/input";
import { Label } from "../Components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Components/ui/select";
import { Textarea } from "../Components/ui/textarea";
import {
  CreditCard,
  CheckCircle,
  Shield,
  Phone,
  Star,
  Percent,
} from "lucide-react";
import { useToast } from "../Components/ui/use-toast";

// 🧩 Type for booking data
type BookingData = {
  roomType: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  rooms: string;
  tableDate: string;
  tableTime: string;
  partySize: string;
  occasion: string;
  name: string;
  email: string;
  phone: string;
  specialRequests: string;
};

const Booking = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"rooms" | "tables">("rooms");

  const [bookingData, setBookingData] = useState<BookingData>({
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
  const handleChange = (name: keyof BookingData, value: string) => {
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Strongly typed submit handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `
Booking Details:
${activeTab === "rooms" ? "Room Booking" : "Table Reservation"}

Name: ${bookingData.name}
Phone: ${bookingData.phone}
Email: ${bookingData.email || "N/A"}
${
  activeTab === "rooms"
    ? `Room Type: ${bookingData.roomType}
Check-in: ${bookingData.checkIn}
Check-out: ${bookingData.checkOut}
Guests: ${bookingData.guests}
Rooms: ${bookingData.rooms}`
    : `Date: ${bookingData.tableDate}
Time: ${bookingData.tableTime}
Party Size: ${bookingData.partySize}
Occasion: ${bookingData.occasion || "N/A"}`
}
Special Requests: ${bookingData.specialRequests || "N/A"}
    `;

    const phoneNumber = "8239237508";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp...",
      description: "Please confirm your booking by sending the message.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-50 py-10">
      <section className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          <Button
            variant={activeTab === "rooms" ? "heritage" : "outline"}
            onClick={() => setActiveTab("rooms")}
          >
            Room Booking
          </Button>
          <Button
            variant={activeTab === "tables" ? "heritage" : "outline"}
            onClick={() => setActiveTab("tables")}
          >
            Table Reservation
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent>
                <h2 className="text-2xl font-bold text-heritage-brown mb-6">
                  {activeTab === "rooms" ? "Room Booking" : "Table Reservation"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={bookingData.name}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleChange("name", e.target.value)
                      }
                      required
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={bookingData.email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleChange("email", e.target.value)
                      }
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleChange("phone", e.target.value)
                      }
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Conditional Fields */}
                  {activeTab === "rooms" && (
                    <>
                      {/* Room Type */}
                      <div>
                        <Label htmlFor="roomType">Room Type</Label>
                        <Select
                          onValueChange={(value) =>
                            handleChange("roomType", value)
                          }
                          value={bookingData.roomType}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select room type" />
                          </SelectTrigger>
                          <SelectContent>
                            {roomTypes.map((room) => (
                              <SelectItem key={room.id} value={room.name}>
                                {room.name} (₹{room.price}/night)
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Check-in & Check-out */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="checkIn">Check-in</Label>
                          <Input
                            id="checkIn"
                            type="date"
                            value={bookingData.checkIn}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              handleChange("checkIn", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="checkOut">Check-out</Label>
                          <Input
                            id="checkOut"
                            type="date"
                            value={bookingData.checkOut}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              handleChange("checkOut", e.target.value)
                            }
                            required
                          />
                        </div>
                      </div>

                      {/* Guests & Rooms */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="guests">Guests</Label>
                          <Input
                            id="guests"
                            type="number"
                            min="1"
                            value={bookingData.guests}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              handleChange("guests", e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <Label htmlFor="rooms">Rooms</Label>
                          <Input
                            id="rooms"
                            type="number"
                            min="1"
                            value={bookingData.rooms}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              handleChange("rooms", e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === "tables" && (
                    <>
                      {/* Table Reservation Fields */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="tableDate">Date</Label>
                          <Input
                            id="tableDate"
                            type="date"
                            value={bookingData.tableDate}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              handleChange("tableDate", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="tableTime">Time</Label>
                          <Select
                            onValueChange={(value) =>
                              handleChange("tableTime", value)
                            }
                            value={bookingData.tableTime}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((slot) => (
                                <SelectItem key={slot} value={slot}>
                                  {slot}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Party Size & Occasion */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="partySize">Party Size</Label>
                          <Input
                            id="partySize"
                            type="number"
                            min="1"
                            value={bookingData.partySize}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              handleChange("partySize", e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <Label htmlFor="occasion">Occasion</Label>
                          <Select
                            onValueChange={(value) =>
                              handleChange("occasion", value)
                            }
                            value={bookingData.occasion}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select occasion" />
                            </SelectTrigger>
                            <SelectContent>
                              {occasions.map((occ) => (
                                <SelectItem key={occ} value={occ}>
                                  {occ}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Special Requests */}
                  <div>
                    <Label htmlFor="specialRequests">Special Requests</Label>
                    <Textarea
                      id="specialRequests"
                      value={bookingData.specialRequests}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                        handleChange("specialRequests", e.target.value)
                      }
                      placeholder="Any special requests?"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="heritage"
                    size="lg"
                    className="w-full flex justify-center items-center space-x-2"
                  >
                    <CheckCircle className="h-5 w-5" />
                    <span>Confirm Booking (via WhatsApp)</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Benefits */}
          <div>
            <Card className="p-6">
              <CardContent>
                <h3 className="text-lg font-semibold mb-4">Why Book With Us?</h3>
                <ul className="space-y-2">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <b.icon className="h-4 w-4 text-green-600" />
                      <span>{b.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
