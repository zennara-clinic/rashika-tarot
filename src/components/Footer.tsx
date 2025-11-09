import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-black/50 backdrop-blur-md border-t border-white/10">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <img 
              src="https://res.cloudinary.com/dpkcimnb2/image/upload/v1762608536/Rashika_Tarot_1_vh8ypj.png"
              alt="Rashika Tarot"
              className="h-16 w-auto"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              God-gifted, intuitive, and internationally famous spiritual guide offering profound insights through Tarot, Astrology, and more.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#home" className="text-white/80 hover:text-yellow-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-yellow-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-white/80 hover:text-yellow-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-yellow-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-white/80 hover:text-yellow-400 transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-white/80 hover:text-yellow-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tarot-reading" className="text-white/80 hover:text-yellow-400 transition-colors text-sm">
                  Tarot Reading
                </Link>
              </li>
              <li>
                <Link to="/astrology" className="text-white/80 hover:text-yellow-400 transition-colors text-sm">
                  Astrology
                </Link>
              </li>
              <li>
                <Link to="/numerology" className="text-white/80 hover:text-yellow-400 transition-colors text-sm">
                  Numerology
                </Link>
              </li>
              <li>
                <Link to="/vastu" className="text-white/80 hover:text-yellow-400 transition-colors text-sm">
                  Vastu Shastra
                </Link>
              </li>
              <li>
                <Link to="/palmistry" className="text-white/80 hover:text-yellow-400 transition-colors text-sm">
                  Palmistry
                </Link>
              </li>
              <li>
                <Link to="/karmic-hits-balancing" className="text-white/80 hover:text-yellow-400 transition-colors text-sm">
                  Karmic Balancing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+919810015794" className="flex items-start gap-2 text-white/80 hover:text-yellow-400 transition-colors text-sm">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>+91-9810015794</p>
                    <p>+91-9811161003</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:predictivehelpline@gmail.com" className="flex items-start gap-2 text-white/80 hover:text-yellow-400 transition-colors text-sm">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>predictivehelpline@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-white/80 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>C-729, 2nd Floor, New Friends Colony, New Delhi - 110025</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Rashika Tarot. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
