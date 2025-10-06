import { useState } from "react";
import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Input } from "../Components/ui/input";
import { Textarea } from "../Components/ui/textarea";
import { Label } from "../Components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
 
  Send,
} from "lucide-react";
import { useToast } from "../Components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    visitDate: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp message construction
    const message = `
📩 *Contact Form Submission*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Visit Date: ${formData.visitDate || "N/A"}
Subject: ${formData.subject}
Message: ${formData.message}
    `;

    const phoneNumber = "8000054835"; // Your WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp...",
      description: "Please confirm and send your message.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      visitDate: ""
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: MapPin, title: "Location", details: ["Highway Road, Near Bus Stand", "Rajasthan, India 123456"], action: "Get Directions" },
    { icon: Phone, title: "Phone", details: ["+91 98765 43210", "+91 98765 43211"], action: "Call Now" },
    { icon: Mail, title: "Email", details: ["info@PJdhaba.com", "bookings@PJdhaba.com"], action: "Send Email" },
    { icon: Clock, title: "Hours", details: ["Open 24 Hours", "7 Days a Week"], action: "Always Open" }
  ];

  const quickContacts = [
    { title: "Restaurant Booking", phone: "+91 98765 43210", description: "Reserve tables for groups and special occasions" },
    { title: "Room Reservation", phone: "+91 98765 43211", description: "Book comfortable accommodation" },
    { title: "Event Catering", phone: "+91 98765 43212", description: "Catering services for parties and events" },
    { title: "Emergency Assistance", phone: "+91 98765 43213", description: "24/7 support for travelers in need" }
  ];

  const faqs = [
    { question: "Do you accept advance bookings?", answer: "Yes, we accept advance bookings for both rooms and restaurant tables. Call us or book online." },
    { question: "Is parking available for trucks?", answer: "Yes, we have ample parking space for trucks, buses, and all types of vehicles with 24/7 security." },
    { question: "Do you serve food 24 hours?", answer: "Yes, our kitchen operates 24/7 to serve hot, fresh meals anytime you visit." },
    { question: "Are pets allowed?", answer: "Pets are allowed with prior permission. Please inform us while booking." },
    { question: "Do you provide catering services?", answer: "Yes, we provide catering services for events, parties, and bulk orders. Contact us for custom packages." }
  ];

  return (
    <div className="min-h-screen">
      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-heritage-brown mb-6">Send us a Message</h2>
              <Card className="p-6 shadow-warm">
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" />
                      </div>
                      <div>
                        <Label htmlFor="visitDate">Planned Visit Date</Label>
                        <Input id="visitDate" name="visitDate" type="date" value={formData.visitDate} onChange={handleChange} />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="What can we help you with?" required />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Please provide details about your inquiry..." rows={5} required />
                    </div>

                    <Button type="submit" variant="heritage" size="lg" className="w-full">
                      <Send className="h-4 w-4 mr-2" /> Send via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-heritage-brown mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 shadow-warm">
                    <CardContent className="flex items-start space-x-4">
                      <div className="bg-gradient-heritage p-3 rounded-lg">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-heritage-brown mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">{detail}</p>
                        ))}
                        <Button variant="traditional" className="mt-3">{info.action}</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
