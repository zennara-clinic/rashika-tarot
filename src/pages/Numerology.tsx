import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Stars, CheckCircle, Clock, Target, TrendingUp, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Numerology = () => {
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
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Stars className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-lg">Numerology</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Decode the Power of Numbers
              </h1>
              <p className="text-xl text-white/80 mb-8">
                The mystical significance of numbers and their powerful influence on human life, destiny, and character traits through ancient wisdom.
              </p>
              <Link to="/book-session?service=Numerology">
                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-8 py-6 text-lg rounded-none hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all transform hover:scale-105">
                  Schedule a Session
                </Button>
              </Link>
            </div>

            <div className="relative h-[500px] overflow-hidden rounded-none border-8 border-white shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dpkcimnb2/image/upload/v1762612319/Numerology_ixogr1.png"
                alt="Numerology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Numerology */}
      <section className="relative z-10 py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-8">The Science of Numbers</h2>
          <div className="space-y-4 text-white/90 text-lg leading-relaxed">
            <p>
              Numerology is the ancient metaphysical science that reveals the hidden meanings behind numbers and their influence on your life. Every number carries a unique vibration and energy that affects your personality, relationships, career, and destiny.
            </p>
            <p>
              Through Rashika Ji's expert numerology analysis, discover how your birth date and name numbers shape your life path. Numbers are magic - your name and life path numbers hold the truth of your destiny and potential.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-12">Numerology Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Life Path Number",
                description: "Discover your core purpose and destiny through your birth date analysis."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Name Analysis",
                description: "Understand how your name influences your personality and life experiences."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Business Numerology",
                description: "Choose the perfect name and numbers for business success and growth."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Personal Year Forecast",
                description: "Know what energies each year brings and how to maximize opportunities."
              },
              {
                icon: <Stars className="w-8 h-8" />,
                title: "Phone & Vehicle Numbers",
                description: "Select auspicious numbers for phone, vehicle, and house for prosperity."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Name Correction",
                description: "Optimize your name spelling for better vibrations and outcomes."
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
          <h2 className="text-4xl font-bold text-white mb-12">Benefits of Numerology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Understand your life purpose",
              "Choose favorable dates",
              "Business name selection",
              "Personal growth insights",
              "Relationship compatibility",
              "Career path guidance",
              "Lucky number identification",
              "Name optimization",
              "Future planning"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-white/90 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unlock Your Numerological Destiny
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Discover the magic in your numbers with Rashika Ji's expert guidance.
          </p>
          <Link to="/book-session?service=Numerology">
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

export default Numerology;
