import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sparkles, 
  Moon, 
  Stars, 
  Heart, 
  Award, 
  Users, 
  Globe, 
  Target,
  Zap,
  BookOpen,
  Lightbulb,
  Shield
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const expertise = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Tarot Reading",
      description: "Expert interpretation of the 78-card deck to reveal hidden truths and future possibilities.",
      gradient: "from-yellow-400 to-amber-500"
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: "Astrology",
      description: "Deep understanding of celestial influences and planetary alignments on your life path.",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: <Stars className="w-8 h-8" />,
      title: "Numerology",
      description: "Decode the mystical significance of numbers and their impact on your destiny.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Palmistry",
      description: "Read the lines of your palm to uncover life patterns and hidden potential.",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Vastu Shastra",
      description: "Harmonize your living spaces with ancient principles of energy flow and balance.",
      gradient: "from-red-400 to-rose-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Karmic Healing",
      description: "Identify and balance karmic hits to unlock spiritual growth and inner peace.",
      gradient: "from-teal-400 to-cyan-500"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Compassion",
      description: "Every reading is conducted with deep empathy and understanding of your unique journey."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Accuracy",
      description: "God-gifted intuition combined with years of expertise ensures precise and meaningful insights."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Trust",
      description: "Complete confidentiality and a safe space for you to explore your spiritual questions."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Transformation",
      description: "Guidance aimed at bringing positive change and spiritual awakening in your life."
    }
  ];

  const achievements = [
    {
      number: "10000+",
      label: "Satisfied Clients",
      icon: <Users className="w-6 h-6" />
    },
    {
      number: "15+",
      label: "Years of Experience",
      icon: <Award className="w-6 h-6" />
    },
    {
      number: "25+",
      label: "Countries Served",
      icon: <Globe className="w-6 h-6" />
    },
    {
      number: "98%",
      label: "Accuracy Rate",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const journey = [
    {
      year: "Early Years",
      title: "The Divine Calling",
      description: "Blessed with an innate spiritual gift, Rashika Ji discovered her extraordinary intuitive abilities at a young age, recognizing the sacred responsibility to guide souls."
    },
    {
      year: "The Mastery",
      title: "Years of Learning",
      description: "Dedicated years to mastering the ancient arts of Tarot, Astrology, Numerology, Palmistry, and Vastu under the guidance of renowned spiritual masters."
    },
    {
      year: "Going Global",
      title: "International Recognition",
      description: "Word of her accurate readings and transformative guidance spread globally, helping thousands of clients across 25+ countries find clarity and peace."
    },
    {
      year: "Present Day",
      title: "A Beacon of Light",
      description: "Today, Rashika Ji continues to illuminate paths, offering profound spiritual insights that empower individuals to live their most authentic lives."
    }
  ];

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
            {/* Left - Image with Decorative Elements */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-none border-8 border-white shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/dpkcimnb2/image/upload/v1762607767/Rasika-jis-Photo-scaled_sob3yo.jpg"
                  alt="Rashika Ji"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-yellow-400/30 blur-3xl rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-500/30 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-12 w-24 h-24 bg-blue-400/20 blur-2xl rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-lg uppercase tracking-wider">About Rashika Ji</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                A Journey of <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Divine Guidance</span>
              </h1>
              <div className="space-y-4 text-lg text-white/90 leading-relaxed mb-8">
                <p>
                  Welcome to a sacred space where ancient wisdom meets modern spirituality. I'm <span className="text-yellow-400 font-semibold">Rashika Ji</span>, a <span className="text-yellow-400 font-semibold">God-gifted, intuitive, and internationally recognized</span> spiritual guide.
                </p>
                <p>
                  For over 15 years, I've had the profound honor of helping thousands of souls across the globe navigate their life's journey through the mystical arts of Tarot, Astrology, Numerology, Palmistry, and Vastu Shastra.
                </p>
                <p>
                  My mission is simple yet profound: to illuminate your path, provide clarity in moments of uncertainty, and empower you to embrace your true spiritual destiny.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/#services">
                  <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-8 py-6 text-lg rounded-none hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all transform hover:scale-105">
                    Book a Session
                  </Button>
                </Link>
                <Link to="/#contact">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-none transition-all transform hover:scale-105">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative z-10 py-20 px-4 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 border rounded-none hover:bg-white/15 transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4 text-yellow-400 group-hover:scale-110 transition-transform">
                    {achievement.icon}
                  </div>
                  <div className="text-5xl font-bold text-white mb-2">{achievement.number}</div>
                  <div className="text-white/70 text-sm uppercase tracking-wider">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The Sacred <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              From divine calling to global recognition, a story of dedication, mastery, and unwavering commitment to spiritual service.
            </p>
          </div>

          <div className="space-y-8">
            {journey.map((milestone, index) => (
              <div key={index} className="relative pl-8 md:pl-12 border-l-4 border-yellow-400/30">
                {/* Timeline Dot */}
                <div className="absolute -left-3 top-0 w-6 h-6 bg-yellow-400 rounded-full border-4 border-black shadow-lg shadow-yellow-400/50"></div>
                
                <Card className="bg-white/10 backdrop-blur-md border-white/20 border rounded-none hover:bg-white/15 transition-all ml-4">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">{milestone.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-white/80 leading-relaxed">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative z-10 py-20 px-4 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Areas of <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Master of ancient spiritual arts, offering comprehensive guidance across multiple disciplines to illuminate your path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 border rounded-none hover:bg-white/15 transition-all group overflow-hidden relative">
                {/* Gradient Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`}></div>
                
                <CardContent className="p-8">
                  <div className={`inline-flex p-4 rounded-none bg-gradient-to-br ${item.gradient} mb-4 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                My <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Philosophy</span>
              </h2>
              <div className="space-y-4 text-lg text-white/90 leading-relaxed">
                <p>
                  I believe that every soul carries within it a unique divine blueprint, a sacred purpose waiting to be discovered and fulfilled. My role is not to dictate your path, but to illuminate it.
                </p>
                <p>
                  Through the ancient wisdom of Tarot, Astrology, and other mystical arts, I help you connect with your inner truth, recognize patterns that may be holding you back, and embrace the transformative power of spiritual awareness.
                </p>
                <p>
                  Each reading is a sacred conversation between the universe and your soul. I serve as a channel, translating cosmic messages into practical guidance that empowers you to make informed decisions and live authentically.
                </p>
                <p className="text-yellow-400 font-semibold italic">
                  "Your destiny is not written in stone. It is a canvas waiting for your conscious choices to paint its masterpiece."
                </p>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-gradient-to-br from-yellow-400/20 to-purple-500/20 backdrop-blur-md border-white/20 border rounded-none p-8">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white">My Promise to You</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Complete confidentiality and privacy",
                      "Honest, accurate, and compassionate readings",
                      "Practical guidance you can apply immediately",
                      "Non-judgmental and safe space",
                      "Empowerment, not dependency",
                      "Ongoing support on your spiritual journey"
                    ].map((promise, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <span className="text-white/90">{promise}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-20 px-4 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Core <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              The guiding principles that shape every reading, every insight, and every moment of spiritual guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 border rounded-none hover:bg-white/15 transition-all group text-center">
                <CardContent className="p-8">
                  <div className="inline-flex p-6 rounded-full bg-gradient-to-br from-yellow-400/20 to-purple-500/20 mb-4 text-yellow-400 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-yellow-400/10 via-purple-500/10 to-blue-500/10 backdrop-blur-md border-white/20 border-2 rounded-none overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full"></div>
            
            <CardContent className="p-12 text-center relative z-10">
              <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Begin Your Spiritual Journey Today
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Take the first step towards clarity, transformation, and spiritual awakening. Book a personalized session and discover what the universe has in store for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#services">
                  <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-12 py-6 text-lg rounded-none hover:shadow-[0_0_40px_rgba(251,191,36,0.7)] transition-all transform hover:scale-105">
                    Book a Session Now
                  </Button>
                </Link>
                <a href="tel:+919810015794">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black px-12 py-6 text-lg rounded-none transition-all transform hover:scale-105">
                    Call +91-9810015794
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
