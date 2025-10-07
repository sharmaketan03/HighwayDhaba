import { Link } from "react-router-dom";
import {  MapPin, Phone, Mail, Clock } from "lucide-react";
import Logo from "../../assets/Logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-heritage-brown text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* Logo */}
              <div className="w-12 h-12 rounded-full overflow-hidden border border-heritage-gold">
                <img 
                  src={Logo} 
                  alt="PJ Dhaba Logo" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold">PJ Dhaba</h3>
                <p className="text-traditional-gold text-sm">Authentic Taste • Comfortable Stay</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Experience the true flavors of India at PJ Dhaba. We serve authentic traditional cuisine 
              with comfortable accommodation for travelers on the highway.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/pappujatdhaba/" className="text-traditional-gold hover:text-white transition-colors" target="_blank">
                {/* <Facebook className="h-5 w-5" /> */}
              </a>
              <a href="https://www.instagram.com/pj_dhaba/?fbclid=IwY2xjawNIvudleHRuA2FlbQIxMABicmlkETE0SU1iNnlwNktMT2pabEtQAR5fcaQZNQpmFuL2TMIjrKu3P8bGyYBaX5qL7hIyekZeT5X_MPPN4oZA2jPJjA_aem_zteANtQtMw4a3tog-2CxjQ" className="text-traditional-gold hover:text-white transition-colors">
                {/* <Instagram className="h-5 w-5" /> */}
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-traditional-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/menu" className="text-gray-300 hover:text-white transition-colors">Our Menu</Link></li>
              <li><Link to="/rooms" className="text-gray-300 hover:text-white transition-colors">Accommodation</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-traditional-gold">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Traditional Indian Cuisine</li>
              <li>• Comfortable Accommodation</li>
              <li>• 24/7 Food Service</li>
              <li>• Free WiFi</li>
              <li>• Parking Facility</li>
              <li>• Catering Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-traditional-gold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-traditional-gold mt-0.5" />
                <div>
                  <p className="text-gray-300">Highway Road, Near Bus Stand</p>
                  <p className="text-gray-300">Rajasthan, India 123456</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-traditional-gold" />
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-traditional-gold" />
                <p className="text-gray-300">info@PJdhaba.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-traditional-gold mt-0.5" />
                <div>
                  <p className="text-gray-300">Open 24 Hours</p>
                  <p className="text-gray-300">7 Days a Week</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-traditional-gold/30 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 PJ Dhaba. All rights reserved. | Designed with ❤️ for authentic Indian hospitality
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
