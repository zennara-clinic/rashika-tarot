import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, CheckCircle, Zap, Heart, Star, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const KarmicHitsBalancing = () => {
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
                <Flame className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-lg">Karmic Hits Balancing</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Balance Your Karma, Transform Your Life
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Resolving and harmonizing consequences of past actions to bring spiritual growth and balance in your life through powerful techniques.
              </p>
              <Link to="/book-session?service=Karmic Balancing">
                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-8 py-6 text-lg rounded-none hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all transform hover:scale-105">
                  Schedule a Session
                </Button>
              </Link>
            </div>

            <div className="relative h-[500px] overflow-hidden rounded-none border-8 border-white shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dpkcimnb2/image/upload/v1762612315/Karmic_Hits_Balancing_hzj4j2.png"
                alt="Karmic Hits Balancing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Karma Balancing */}
      <section className="relative z-10 py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-8">Understanding Karmic Balancing</h2>
          <div className="space-y-4 text-white/90 text-lg leading-relaxed">
            <p>
              Karma is the universal law of cause and effect - every action creates an energetic imprint that influences your current and future experiences. Karmic hits are the manifestations of past actions that create obstacles, patterns, or challenges in your present life.
            </p>
            <p>
              Through Rashika Ji's powerful karmic balancing techniques, you can neutralize negative planetary effects and past karma. These sacred remedies, prayers, and spiritual practices help balance the cosmic energies, bringing positive outcomes and spiritual evolution.
            </p>
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-12">Karmic Healing Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Star className="w-8 h-8" />,
                title: "Planetary Remedies",
                description: "Specific rituals and practices to balance negative planetary influences in your chart."
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Mantra Chanting",
                description: "Powerful mantras for karma cleansing and spiritual protection."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Energy Healing",
                description: "Chakra balancing and energy clearing to remove karmic blockages."
              },
              {
                icon: <Flame className="w-8 h-8" />,
                title: "Fire Rituals (Homa)",
                description: "Sacred fire ceremonies to burn away negative karmic patterns."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Gemstone Therapy",
                description: "Prescribed gemstones to strengthen beneficial planets and reduce malefic effects."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Charitable Acts",
                description: "Specific donations and service activities to balance karmic debts."
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
          <h2 className="text-4xl font-bold text-white mb-12">Transformation Through Karma Balancing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Remove life obstacles",
              "Heal relationships",
              "Financial prosperity",
              "Mental peace",
              "Physical health",
              "Spiritual growth",
              "Protection from negativity",
              "Enhanced intuition",
              "Life path clarity"
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
            Begin Your Karmic Healing Journey
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Transform your life through powerful karmic balancing with Rashika Ji.
          </p>
          <Link to="/book-session?service=Karmic Balancing">
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

export default KarmicHitsBalancing;
