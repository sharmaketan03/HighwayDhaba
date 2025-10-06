import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";
import Logo from "../../assets/Logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation Links
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Rooms", href: "/rooms" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Booking", href: "/booking" },
    { name: "Reviews", href: "/reviews" },
    // { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-heritage-brown/20 bg-background/95 backdrop-blur-sm">
      
      {/* Top bar */}
      <div className="hidden md:block bg-heritage-brown text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Highway Road, Rajasthan</span>
            </div>
          </div>
          <div className="text-traditional-gold font-medium">
            Open 24/7 • Best Dhaba Experience
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src={Logo} 
            alt="PJ Dhaba Logo" 
            className="w-12 h-12 object-cover rounded-full border border-heritage-brown"
          />
          <div>
            <h1 className="text-2xl font-bold text-heritage-brown">PJ Dhaba</h1>
            <p className="text-sm text-muted-foreground">Authentic Taste • Comfortable Stay</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.href
                  ? "bg-traditional-gold text-heritage-brown"
                  : "text-foreground hover:bg-warm-cream hover:text-heritage-brown"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="heritage" size="lg" asChild>
            <Link to="/booking">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md text-foreground hover:bg-warm-cream"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden border-t border-heritage-brown/20">
          <div className="pt-4 px-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? "bg-traditional-gold text-heritage-brown"
                    : "text-foreground hover:bg-warm-cream hover:text-heritage-brown"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button variant="heritage" className="w-full" asChild>
                <Link to="/booking">Book Now</Link>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
