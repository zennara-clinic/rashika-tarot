import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 px-4 transition-all duration-300">
      <div className="container mx-auto">
        <div className={`rounded-full px-8 py-4 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : ''
        }`}>
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src={isScrolled 
                  ? "https://res.cloudinary.com/dpkcimnb2/image/upload/v1762607765/Rashika_Tarot_x2jqqq.png"
                  : "https://res.cloudinary.com/dpkcimnb2/image/upload/v1762608536/Rashika_Tarot_1_vh8ypj.png"
                }
                alt="Rasika Tarot" 
                className="h-16 w-auto transition-all duration-300 cursor-pointer hover:opacity-90"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/#home" 
              className={`relative font-medium transition-colors group ${
                isScrolled ? 'text-gray-800 hover:text-yellow-500' : 'text-white hover:text-yellow-400'
              }`}
            >
              Home
              <span className={`absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                isScrolled ? 'bg-yellow-500' : 'bg-yellow-400'
              }`}></span>
            </Link>
            <Link 
              to="/about" 
              className={`relative font-medium transition-colors group ${
                isScrolled ? 'text-gray-800 hover:text-yellow-500' : 'text-white hover:text-yellow-400'
              }`}
            >
              About
              <span className={`absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                isScrolled ? 'bg-yellow-500' : 'bg-yellow-400'
              }`}></span>
            </Link>
            <Link 
              to="/blog" 
              className={`relative font-medium transition-colors group ${
                isScrolled ? 'text-gray-800 hover:text-yellow-500' : 'text-white hover:text-yellow-400'
              }`}
            >
              Blog
              <span className={`absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                isScrolled ? 'bg-yellow-500' : 'bg-yellow-400'
              }`}></span>
            </Link>
            <Link 
              to="/#contact" 
              className={`relative font-medium transition-colors group ${
                isScrolled ? 'text-gray-800 hover:text-yellow-500' : 'text-white hover:text-yellow-400'
              }`}
            >
              Contact Us
              <span className={`absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                isScrolled ? 'bg-yellow-500' : 'bg-yellow-400'
              }`}></span>
            </Link>
          </div>

          {/* Right Side - Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+919810015794" 
              className={`flex items-center space-x-2 transition-colors ${
                isScrolled ? 'text-gray-800 hover:text-yellow-500' : 'text-white hover:text-yellow-400'
              }`}
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+91-9810015794</span>
            </a>
            <Link to="/#services">
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-6 py-3 rounded-none hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all transform hover:scale-105">
                Book a Session
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 rounded-3xl p-6 space-y-4">
            <Link to="/#home" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-yellow-400 transition-colors font-medium">Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-yellow-400 transition-colors font-medium">About</Link>
            <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-yellow-400 transition-colors font-medium">Blog</Link>
            <Link to="/#contact" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-yellow-400 transition-colors font-medium">Contact Us</Link>
            <a href="tel:+919810015794" className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors pt-4">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">+91-9810015794</span>
            </a>
            <Link to="/#services" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-3 rounded-none">
                Book a Session
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
