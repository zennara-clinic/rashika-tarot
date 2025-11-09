import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, CheckCircle, Clock, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TarotReading = () => {
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
                <Sparkles className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-lg">Tarot Cards Reading</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Unlock the Mysteries of Your Future
              </h1>
              <p className="text-xl text-white/80 mb-8">
                A divination practice using cards to gain insight into your life's aspects, future possibilities, and spiritual guidance through ancient wisdom.
              </p>
              <Link to="/book-session?service=Tarot Reading">
                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-8 py-6 text-lg rounded-none hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all transform hover:scale-105">
                  Schedule a Session
                </Button>
              </Link>
            </div>

            {/* Right - Image */}
            <div className="relative h-[500px] overflow-hidden rounded-none border-8 border-white shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dpkcimnb2/image/upload/v1762612315/Tarot_Cards_Reading_zyjivh.png"
                alt="Tarot Cards Reading"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Tarot Reading */}
      <section className="relative z-10 py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-8">What is Tarot Reading?</h2>
          <div className="space-y-4 text-white/90 text-lg leading-relaxed mb-6">
            <p>
              Tarot reading is a profound spiritual practice that uses a deck of 78 cards to provide insights into your past, present, and future. Each card carries symbolic meanings that, when interpreted by an experienced reader like Rashika Ji, can reveal hidden truths and guide you toward clarity.
            </p>
            <p>
              Through the ancient art of tarot, you can gain deeper understanding of your life's challenges, opportunities, relationships, career paths, and spiritual journey. The cards serve as a mirror to your subconscious, helping you see what lies beneath the surface.
            </p>
          </div>
          <Link to="/about">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black rounded-none transition-all">
              Learn More About Rashika Ji
            </Button>
          </Link>
        </div>
      </section>

      {/* What to Expect */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-12">What to Expect in Your Session</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Duration",
                description: "Sessions typically last 30-60 minutes, giving ample time for in-depth reading and questions."
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Card Spread",
                description: "Various spreads used based on your questions - from simple 3-card to complex Celtic Cross."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Interpretation",
                description: "Detailed explanation of each card's meaning in relation to your specific situation."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Guidance",
                description: "Practical advice and spiritual insights to help you navigate life's challenges."
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
          <h2 className="text-4xl font-bold text-white mb-12">Benefits of Tarot Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Gain clarity on life decisions",
              "Understand relationship dynamics",
              "Navigate career challenges",
              "Discover hidden opportunities",
              "Heal emotional wounds",
              "Connect with your intuition",
              "Plan future endeavors",
              "Overcome obstacles",
              "Find spiritual guidance"
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
            Ready to Discover Your Path?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Book your tarot reading session with Rashika Ji today and gain the insights you need.
          </p>
          <Link to="/book-session?service=Tarot Reading">
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

export default TarotReading;
