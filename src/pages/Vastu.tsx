import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CircleDot, CheckCircle, Home, Building2, MapPin, Compass } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Vastu = () => {
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
                <CircleDot className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-lg">Vastu Shastra</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Harmonize Your Living Spaces
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Ancient Indian architectural practice harmonizing energy flow in living spaces to promote well-being and prosperity through scientific placement.
              </p>
              <Link to="/book-session?service=Vastu">
                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-8 py-6 text-lg rounded-none hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all transform hover:scale-105">
                  Schedule a Session
                </Button>
              </Link>
            </div>

            <div className="relative h-[500px] overflow-hidden rounded-none border-8 border-white shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dpkcimnb2/image/upload/v1762612315/Vastu_cidorf.png"
                alt="Vastu"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Vastu */}
      <section className="relative z-10 py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-8">Understanding Vastu Shastra</h2>
          <div className="space-y-4 text-white/90 text-lg leading-relaxed">
            <p>
              Vastu Shastra is the ancient Indian science of architecture that harmonizes buildings with the natural forces of the universe. By aligning your living or working space with cosmic energies, you can attract prosperity, health, and happiness.
            </p>
            <p>
              Through detailed analysis of gridded scaled maps of houses, apartments, shops, and office spaces, Rashika Ji provides practical Vastu solutions that balance the five elements and directional energies to create positive environments.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-12">Vastu Consultation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Home className="w-8 h-8" />,
                title: "Residential Vastu",
                description: "Complete analysis of homes, apartments, and plots for family harmony and prosperity."
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Commercial Vastu",
                description: "Office, shop, and factory Vastu for business growth and success."
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Plot Selection",
                description: "Guidance for selecting auspicious land and property based on Vastu principles."
              },
              {
                icon: <Compass className="w-8 h-8" />,
                title: "Direction Analysis",
                description: "Optimal placement of rooms, doors, and furniture according to directions."
              },
              {
                icon: <CircleDot className="w-8 h-8" />,
                title: "Vastu Corrections",
                description: "Remedies for existing Vastu defects without demolition or major changes."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "New Construction",
                description: "Vastu planning for new buildings from foundation to completion."
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
          <h2 className="text-4xl font-bold text-white mb-12">Vastu Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Enhanced prosperity",
              "Better health & wellness",
              "Family harmony",
              "Business growth",
              "Improved relationships",
              "Mental peace",
              "Career advancement",
              "Positive energy flow",
              "Overall well-being"
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
            Transform Your Space with Vastu
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get expert Vastu consultation and create a harmonious environment.
          </p>
          <Link to="/book-session?service=Vastu">
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

export default Vastu;
