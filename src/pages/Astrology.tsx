import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Moon, CheckCircle, Clock, Star, Calendar, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Astrology = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Cosmic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{ background: 'var(--gradient-mystical)' }} />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Moon className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-lg">Astrology Consultation</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Navigate Life Through Celestial Wisdom
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Study of celestial bodies and their profound influence on human behavior, events, and life patterns with precise predictions and powerful remedies.
              </p>
              <Link to="/book-session?service=Astrology">
                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-8 py-6 text-lg rounded-none hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all transform hover:scale-105">
                  Schedule a Session
                </Button>
              </Link>
            </div>

            {/* Right - Image */}
            <div className="relative h-[500px] overflow-hidden rounded-none border-8 border-white shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dpkcimnb2/image/upload/v1762612314/Astrology_q2sqny.png"
                alt="Astrology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Astrology */}
      <section className="relative z-10 py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-8">Understanding Astrology</h2>
          <div className="space-y-4 text-white/90 text-lg leading-relaxed">
            <p>
              Astrology is the ancient science of understanding how planetary positions and movements influence human life. Through careful analysis of your birth chart (Kundli), we can reveal your strengths, challenges, opportunities, and life patterns.
            </p>
            <p>
              Rashika Ji combines traditional Vedic astrology with modern insights to provide accurate predictions about career, relationships, health, finances, and spiritual growth. Her expertise in timing and remedies helps you make informed decisions and overcome obstacles.
            </p>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-12">Astrology Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Birth Chart Analysis",
                description: "Complete Kundli reading with detailed insights into all 12 houses and planetary positions."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Timing Predictions",
                description: "Precise prediction of favorable and challenging periods using Dasha and transit analysis."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Relationship Compatibility",
                description: "Match-making and relationship analysis for marriage, partnerships, and personal bonds."
              },
              {
                icon: <Moon className="w-8 h-8" />,
                title: "Remedial Measures",
                description: "Powerful astrological remedies including gemstones, mantras, and rituals to balance planets."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Career Guidance",
                description: "Career path analysis, job changes, business ventures, and professional growth timing."
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Annual Predictions",
                description: "Year-ahead forecast covering all aspects of life with monthly breakdowns."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 border rounded-none hover:bg-white/15 transition-all">
                <CardContent className="p-6">
                  <div className="text-yellow-400 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative z-10 py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-12">Why Choose Astrology?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Accurate life predictions",
              "Career and business timing",
              "Relationship compatibility",
              "Health and wellness insights",
              "Financial growth periods",
              "Education guidance",
              "Marriage timing",
              "Property matters",
              "Spiritual evolution"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-white/90 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unlock Your Cosmic Blueprint
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get personalized astrological insights and remedies from Rashika Ji.
          </p>
          <Link to="/book-session?service=Astrology">
            <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-12 py-6 text-lg rounded-none hover:shadow-[0_0_40px_rgba(251,191,36,0.7)] transition-all transform hover:scale-105">
              Schedule a Session
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Astrology;
