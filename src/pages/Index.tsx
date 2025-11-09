import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Sparkles, Moon, Stars, CircleDot, Hand, Flame } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrbitalAnimation from "@/components/OrbitalAnimation";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  // Auto-slide testimonials every 5 seconds (10 slides total, 3 cards each)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 10);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Tarot Cards Reading",
      description: "A divination practice using cards to gain insight into your life's aspects, future possibilities, and spiritual guidance.",
      icon: <Sparkles className="w-12 h-12" />,
      image: "https://res.cloudinary.com/dpkcimnb2/image/upload/v1762612315/Tarot_Cards_Reading_zyjivh.png",
      link: "/tarot-reading"
    },
    {
      title: "Astrology",
      description: "Study of celestial bodies and their profound influence on human behavior, events, and life patterns.",
      icon: <Moon className="w-12 h-12" />,
      image: "https://res.cloudinary.com/dpkcimnb2/image/upload/v1762612314/Astrology_q2sqny.png",
      link: "/astrology"
    },
    {
      title: "Numerology",
      description: "The mystical significance of numbers and their powerful influence on human life, destiny, and character traits.",
      icon: <Stars className="w-12 h-12" />,
      image: "https://res.cloudinary.com/dpkcimnb2/image/upload/v1762612319/Numerology_ixogr1.png",
      link: "/numerology"
    },
    {
      title: "Vastu",
      description: "Ancient Indian architectural practice harmonizing energy flow in living spaces to promote well-being and prosperity.",
      icon: <CircleDot className="w-12 h-12" />,
      image: "https://res.cloudinary.com/dpkcimnb2/image/upload/v1762612315/Vastu_cidorf.png",
      link: "/vastu"
    },
    {
      title: "Palmistry",
      description: "The art of analyzing palm lines and features to interpret character traits, future prospects, and life events.",
      icon: <Hand className="w-12 h-12" />,
      image: "https://res.cloudinary.com/dpkcimnb2/image/upload/v1762612314/Palmistry_b7nkle.png",
      link: "/palmistry"
    },
    {
      title: "Karmic Hits Balancing",
      description: "Resolving and harmonizing consequences of past actions to bring spiritual growth and balance in your life.",
      icon: <Flame className="w-12 h-12" />,
      image: "https://res.cloudinary.com/dpkcimnb2/image/upload/v1762612315/Karmic_Hits_Balancing_hzj4j2.png",
      link: "/karmic-hits-balancing"
    }
  ];

  const testimonials = [
    { name: "Priya Sharma", role: "Entrepreneur", gender: "female", text: "Rashika Ji's tarot reading was incredibly accurate and gave me the clarity I needed to make important business decisions. Her insights are truly remarkable!" },
    { name: "Amit Patel", role: "Software Engineer", gender: "male", text: "The astrology consultation helped me understand my life path better. The predictions were spot on and the remedies suggested have brought positive changes." },
    { name: "Neha Kapoor", role: "Designer", gender: "female", text: "Rashika Ji's numerology reading revealed aspects of my personality I never understood. Her guidance has been invaluable in my personal growth journey." },
    { name: "Rajesh Kumar", role: "Business Owner", gender: "male", text: "The Vastu consultation transformed my office space. Within months, I saw significant improvements in business growth and team harmony." },
    { name: "Sneha Reddy", role: "Marketing Manager", gender: "female", text: "Her palmistry reading was eye-opening! She predicted events that came true and helped me prepare for challenges with confidence." },
    { name: "Vikram Singh", role: "Consultant", gender: "male", text: "The karmic balancing techniques have brought peace and prosperity into my life. Rashika Ji's spiritual guidance is truly a blessing." },
    { name: "Ananya Desai", role: "Doctor", gender: "female", text: "The tarot card session helped me make crucial career decisions. Rashika Ji's intuitive abilities are exceptional and deeply insightful." },
    { name: "Rohan Mehta", role: "Architect", gender: "male", text: "Her Vastu recommendations completely transformed my home's energy. I've experienced improved relationships and better sleep quality." },
    { name: "Kavita Joshi", role: "Teacher", gender: "female", text: "The numerology analysis was spot-on! It helped me understand my strengths and weaknesses, leading to personal transformation." },
    { name: "Arjun Nair", role: "Finance Manager", gender: "male", text: "Rashika Ji's astrology predictions have been remarkably accurate. Her remedies have brought stability and growth in my career." },
    { name: "Deepa Malhotra", role: "HR Professional", gender: "female", text: "The palmistry session revealed so much about my life path. Her guidance has helped me navigate challenging times with confidence." },
    { name: "Sanjay Verma", role: "Entrepreneur", gender: "male", text: "Her karmic healing techniques have brought profound peace into my life. I'm grateful for her spiritual wisdom and compassionate guidance." },
    { name: "Ritu Saxena", role: "Content Writer", gender: "female", text: "The tarot reading sessions have been transformative. Rashika Ji's insights helped me align with my true purpose and passion." },
    { name: "Karan Chopra", role: "IT Professional", gender: "male", text: "The astrology consultation provided clarity on relationship matters. Her predictions and remedies have strengthened my family bonds." },
    { name: "Meera Iyer", role: "Yoga Instructor", gender: "female", text: "Her numerology reading helped me choose the perfect name for my wellness center. Business has flourished beyond expectations!" },
    { name: "Aditya Bose", role: "Chartered Accountant", gender: "male", text: "The Vastu corrections suggested for my office have brought remarkable positive changes in client relationships and revenue growth." },
    { name: "Pooja Agarwal", role: "Fashion Designer", gender: "female", text: "Rashika Ji's palmistry insights were incredibly accurate. Her guidance helped me make confident decisions about my creative ventures." },
    { name: "Manish Gupta", role: "Real Estate Developer", gender: "male", text: "Her karmic balancing techniques have brought harmony to my professional and personal life. Truly grateful for her wisdom." },
    { name: "Simran Kaur", role: "Psychologist", gender: "female", text: "The tarot sessions provided deep insights into my clients' needs. Rashika Ji's spiritual guidance enhanced my practice significantly." },
    { name: "Rahul Khanna", role: "Photographer", gender: "male", text: "Her astrology readings helped me time my projects perfectly. The remedies suggested have opened new creative opportunities." },
    { name: "Divya Shah", role: "Banker", gender: "female", text: "The numerology consultation helped me understand my life's purpose better. Her guidance has been invaluable in my spiritual journey." },
    { name: "Nikhil Rao", role: "Lawyer", gender: "male", text: "Rashika Ji's Vastu recommendations for my office have brought clarity and success in my legal practice. Highly recommended!" },
    { name: "Shruti Pillai", role: "Journalist", gender: "female", text: "Her palmistry reading revealed hidden talents I never knew I had. It's helped me pursue new career opportunities with confidence." },
    { name: "Abhishek Tiwari", role: "Chef", gender: "male", text: "The karmic healing sessions have brought balance and creativity to my culinary journey. Her spiritual insights are profound." },
    { name: "Anjali Menon", role: "Event Manager", gender: "female", text: "Rashika Ji's tarot guidance helped me navigate complex business decisions. Her predictions have been remarkably accurate!" },
    { name: "Varun Shetty", role: "Sports Coach", gender: "male", text: "The astrology consultation provided timing insights for major competitions. Her remedies have enhanced my team's performance." },
    { name: "Lakshmi Krishnan", role: "Artist", gender: "female", text: "Her numerology reading helped me find the perfect exhibition dates. My art sales have increased significantly since then!" },
    { name: "Siddharth Jain", role: "Businessman", gender: "male", text: "The Vastu corrections transformed my showroom's energy. Customer footfall and sales have doubled in just six months!" },
    { name: "Preeti Bajaj", role: "Interior Designer", gender: "female", text: "Rashika Ji's palmistry insights helped me understand my creative potential. Her guidance has been a turning point in my career." },
    { name: "Kunal Sharma", role: "Digital Marketer", gender: "male", text: "Her karmic balancing and spiritual guidance have brought clarity and success to my professional endeavors. Truly blessed!" }
  ];

  const getAvatar = (gender: string) => {
    if (gender === "female") {
      return (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="#FCD34D"/>
          <circle cx="50" cy="40" r="20" fill="#FBBF24"/>
          <path d="M25 75C25 60 35 55 50 55C65 55 75 60 75 75" fill="#FBBF24"/>
          <circle cx="42" cy="38" r="3" fill="#000"/>
          <circle cx="58" cy="38" r="3" fill="#000"/>
          <path d="M42 48C45 50 55 50 58 48" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    } else {
      return (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="#60A5FA"/>
          <circle cx="50" cy="40" r="20" fill="#3B82F6"/>
          <path d="M25 75C25 60 35 55 50 55C65 55 75 60 75 75" fill="#3B82F6"/>
          <circle cx="42" cy="38" r="3" fill="#000"/>
          <circle cx="58" cy="38" r="3" fill="#000"/>
          <path d="M42 48C45 50 55 50 58 48" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Cosmic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{ background: 'var(--gradient-mystical)' }} />
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: Math.random() * 3 + 2 + 's'
              }}
            />
          ))}
        </div>
      </div>

      {/* Header - Sticky Navigation */}
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Miraculous Journey
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Through Your Destiny
              </h2>
              <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
                Expert Tarot Card Reading, Astrology, Numerology, Palmistry and Vastu Consultation services to guide you towards clarity, balance, and spiritual enlightenment
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <Link to="/#services">
                  <Button 
                    size="default"
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold text-base px-6 py-3 rounded-none hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all transform hover:scale-105"
                  >
                    Book a Session
                  </Button>
                </Link>
                <Link to="/about">
                  <Button 
                    size="default"
                    variant="outline"
                    className="border-2 border-white text-white font-semibold text-base px-6 py-3 rounded-none hover:bg-white hover:text-black transition-all transform hover:scale-105"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Orbital Animation */}
            <div className="hidden lg:block relative h-[600px]">
              <OrbitalAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="relative z-10 py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - About Rashika Ji */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Rashika Ji</span>
              </h2>
              
              <p className="text-lg text-white/90 leading-relaxed">
                Rashika Ji is a <span className="text-yellow-400 font-semibold">God-gifted, intuitive, and internationally famous</span> spiritual guide with an excellent grip over the Art of Tarot Card Reading.
              </p>

              <p className="text-lg text-white/90 leading-relaxed">
                With years of expertise in Tarot Cards, Astrology, Numerology, Palmistry, and Vastu, Rashika Ji offers profound insights that guide individuals toward clarity, balance, and spiritual enlightenment.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Link to="/about">
                  <Button 
                    size="default"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-black text-base px-6 py-3 rounded-none transition-all transform hover:scale-105"
                  >
                    Learn More About Me
                  </Button>
                </Link>
                <Link to="/#services">
                  <Button 
                    size="default"
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold text-base px-6 py-3 rounded-none hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all transform hover:scale-105"
                  >
                    Book a Session
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Photo */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border-8 border-white shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/dpkcimnb2/image/upload/v1762607767/Rasika-jis-Photo-scaled_sob3yo.jpg"
                  alt="Rashika Ji"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400/20 blur-3xl rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary to-yellow-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg text-white/80 mb-12 max-w-3xl">
            Discover our comprehensive range of spiritual and mystical services designed to guide you on your journey towards clarity, balance, and enlightenment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-white overflow-hidden border-0 rounded-none hover:shadow-2xl transition-all duration-300 group"
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Full-width thumbnail image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 text-yellow-400">
                    {service.icon}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <Link to={service.link}>
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold text-sm px-4 py-2 rounded-none hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] transition-all transform hover:scale-105"
                    >
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 py-20 px-4 bg-black/20 overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary to-yellow-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-lg text-white/80 mb-12 max-w-3xl">
            Hear from those who have experienced transformative guidance through our spiritual services.
          </p>

          {/* Auto-Sliding Testimonial Carousel - 3 Cards Per Slide */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {[...Array(10)].map((_, slideIndex) => (
                  <div key={slideIndex} className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                    {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial, cardIndex) => (
                      <Card 
                        key={cardIndex}
                        className="bg-white/95 backdrop-blur-md border-0 rounded-none shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
                      >
                        <CardContent className="p-6">
                          {/* Avatar and Rating */}
                          <div className="flex flex-col items-center mb-4">
                            <div className="mb-3">
                              {getAvatar(testimonial.gender)}
                            </div>
                            <div className="flex gap-1 mb-3">
                              {[...Array(5)].map((_, i) => (
                                <Stars key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>

                          {/* Testimonial Text */}
                          <p className="text-gray-700 text-sm leading-relaxed mb-4 italic text-center min-h-[120px]">
                            "{testimonial.text}"
                          </p>

                          {/* Client Info */}
                          <div className="text-center border-t border-gray-200 pt-4">
                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-xs text-gray-600">{testimonial.role}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(10)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'w-8 bg-yellow-400' 
                      : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + 10) % 10)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % 10)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section id="contact" className="relative z-10 py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary to-yellow-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-none">
                
                <div className="space-y-6">
                  {/* Session Info */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Sessions Available</h4>
                    <p className="text-white/80 text-sm">
                      Sessions are conducted Online – Phone sessions or Video sessions as well as in-person at our office in South Delhi. All our services are pre-paid and time based.
                    </p>
                  </div>

                  {/* Phone Numbers */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Phone</h4>
                    <div className="space-y-2">
                      <a 
                        href="tel:+919810015794" 
                        className="flex items-center space-x-3 text-white/90 hover:text-yellow-400 transition-colors group"
                      >
                        <Phone className="w-5 h-5 text-yellow-400" />
                        <div>
                          <p className="font-medium">Ajay Ji (2PM IST to 10PM IST)</p>
                          <p className="text-sm">+91-9810015794</p>
                        </div>
                      </a>
                      <a 
                        href="tel:+919811161003" 
                        className="flex items-center space-x-3 text-white/90 hover:text-yellow-400 transition-colors pl-8"
                      >
                        <p className="text-sm">+91-9811161003</p>
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                    <a 
                      href="mailto:predictivehelpline@gmail.com" 
                      className="flex items-center space-x-3 text-white/90 hover:text-yellow-400 transition-colors"
                    >
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>predictivehelpline@gmail.com</span>
                    </a>
                  </div>

                  {/* Address */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Address</h4>
                    <div className="flex items-start space-x-3 text-white/90">
                      <svg className="w-5 h-5 text-yellow-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p>C - 729, 2nd Floor,</p>
                        <p>New Friends Colony,</p>
                        <p>New Delhi - 110025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Inquiry Form */}
            <div className="bg-white p-8 rounded-none shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Drop Us a Line</h3>
              <p className="text-gray-600 mb-6">Please share your message for general inquiries. We will contact you. Thank you.</p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="What is this regarding?"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-4 rounded-none hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
