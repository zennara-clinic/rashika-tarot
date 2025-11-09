import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Wallet,
  CheckCircle,
  ArrowLeft,
  Sparkles
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BookSession = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const serviceType = searchParams.get("service") || "Tarot Reading";
  
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: serviceType,
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: ""
  });

  const steps = [
    { number: 1, title: "Select Date & Time", icon: Calendar },
    { number: 2, title: "Personal Details", icon: User },
    { number: 3, title: "Payment Method", icon: CreditCard },
    { number: 4, title: "Confirmation", icon: CheckCircle }
  ];

  const servicePrices: { [key: string]: number } = {
    "Tarot Reading": 2500,
    "Astrology": 3000,
    "Numerology": 2000,
    "Vastu": 5000,
    "Palmistry": 2500,
    "Karmic Balancing": 3500
  };

  const availableDates = [
    "2025-11-10",
    "2025-11-11",
    "2025-11-12",
    "2025-11-13",
    "2025-11-14",
    "2025-11-15",
    "2025-11-16"
  ];

  const availableTimes = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM"
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setBookingData({ ...bookingData, [field]: value });
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return bookingData.date && bookingData.time;
      case 2:
        return bookingData.name && bookingData.email && bookingData.phone && bookingData.address && bookingData.city;
      case 3:
        return bookingData.paymentMethod;
      default:
        return true;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Cosmic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{ background: 'var(--gradient-mystical)' }} />
      </div>

      <Header />

      {/* Main Content */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Schedule Your Session
              </h1>
            </div>
            <p className="text-xl text-white/80">
              {serviceType}
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-4 transition-all ${
                      currentStep >= step.number
                        ? 'bg-yellow-400 border-yellow-400 text-black'
                        : 'bg-white/10 border-white/30 text-white/50'
                    }`}>
                      <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <span className={`mt-2 text-xs md:text-sm font-medium transition-colors hidden md:block ${
                      currentStep >= step.number ? 'text-yellow-400' : 'text-white/50'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-1 mx-2 transition-colors ${
                      currentStep > step.number ? 'bg-yellow-400' : 'bg-white/20'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 border-2 rounded-none">
            <CardContent className="p-8 md:p-12">
              
              {/* Step 1: Date & Time */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <Calendar className="w-7 h-7 text-yellow-400" />
                      Select Date & Time
                    </h2>
                    
                    {/* Date Selection */}
                    <div className="mb-8">
                      <label className="text-white/90 font-semibold mb-4 block">Choose a Date</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {availableDates.map((date) => (
                          <button
                            key={date}
                            onClick={() => handleInputChange('date', date)}
                            className={`p-4 rounded-none border-2 transition-all text-center ${
                              bookingData.date === date
                                ? 'bg-yellow-400 border-yellow-400 text-black'
                                : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
                            }`}
                          >
                            <div className="text-sm font-semibold">
                              {new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
                            </div>
                            <div className="text-lg font-bold mt-1">
                              {new Date(date).getDate()}
                            </div>
                            <div className="text-xs opacity-80">
                              {new Date(date).toLocaleDateString('en-US', { month: 'short' })}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    <div>
                      <label className="text-white/90 font-semibold mb-4 block">Choose a Time</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            onClick={() => handleInputChange('time', time)}
                            className={`p-4 rounded-none border-2 transition-all flex items-center justify-center gap-2 ${
                              bookingData.time === time
                                ? 'bg-yellow-400 border-yellow-400 text-black'
                                : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
                            }`}
                          >
                            <Clock className="w-4 h-4" />
                            <span className="font-semibold">{time}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <User className="w-7 h-7 text-yellow-400" />
                    Personal Details
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-white/90 font-semibold mb-2 block">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                        <input
                          type="text"
                          value={bookingData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border-2 border-white/20 rounded-none text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-white/90 font-semibold mb-2 block">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                        <input
                          type="email"
                          value={bookingData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border-2 border-white/20 rounded-none text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-white/90 font-semibold mb-2 block">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                        <input
                          type="tel"
                          value={bookingData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border-2 border-white/20 rounded-none text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-colors"
                          placeholder="+91 98100 15794"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-white/90 font-semibold mb-2 block">City *</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                        <input
                          type="text"
                          value={bookingData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border-2 border-white/20 rounded-none text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-colors"
                          placeholder="Enter your city"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-white/90 font-semibold mb-2 block">Address *</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-4 w-5 h-5 text-white/50" />
                      <textarea
                        value={bookingData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        rows={3}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border-2 border-white/20 rounded-none text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                        placeholder="Enter your complete address"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Payment Method */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <CreditCard className="w-7 h-7 text-yellow-400" />
                    Payment Method
                  </h2>

                  {/* Price Display */}
                  <div className="bg-gradient-to-r from-yellow-400/20 to-amber-500/20 border-2 border-yellow-400/50 rounded-none p-6 mb-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/80 text-sm mb-1">Session Fee for</p>
                        <p className="text-white font-bold text-xl">{serviceType}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-yellow-400 font-bold text-4xl">₹{servicePrices[serviceType]}</p>
                        <p className="text-white/60 text-sm mt-1">Including GST</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Pay Online */}
                    <button
                      onClick={() => handleInputChange('paymentMethod', 'online')}
                      className={`p-8 rounded-none border-2 transition-all ${
                        bookingData.paymentMethod === 'online'
                          ? 'bg-yellow-400/20 border-yellow-400'
                          : 'bg-white/5 border-white/20 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                          bookingData.paymentMethod === 'online'
                            ? 'bg-yellow-400 text-black'
                            : 'bg-white/10 text-white'
                        }`}>
                          <CreditCard className="w-8 h-8" />
                        </div>
                        <h3 className="text-white font-bold text-xl mb-2">Pay Online</h3>
                        <p className="text-white/70 text-sm">
                          Secure payment via UPI, Card, or Net Banking
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-green-400 text-sm">
                          <CheckCircle className="w-4 h-4" />
                          <span>Instant Confirmation</span>
                        </div>
                      </div>
                    </button>

                    {/* Pay After Session */}
                    <button
                      onClick={() => handleInputChange('paymentMethod', 'after')}
                      className={`p-8 rounded-none border-2 transition-all ${
                        bookingData.paymentMethod === 'after'
                          ? 'bg-yellow-400/20 border-yellow-400'
                          : 'bg-white/5 border-white/20 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                          bookingData.paymentMethod === 'after'
                            ? 'bg-yellow-400 text-black'
                            : 'bg-white/10 text-white'
                        }`}>
                          <Wallet className="w-8 h-8" />
                        </div>
                        <h3 className="text-white font-bold text-xl mb-2">Pay After Session</h3>
                        <p className="text-white/70 text-sm">
                          Pay in cash or online after your session
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-blue-400 text-sm">
                          <CheckCircle className="w-4 h-4" />
                          <span>Flexible Payment</span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      Booking Confirmed!
                    </h2>
                    <p className="text-white/80 text-lg">
                      Your session has been successfully scheduled
                    </p>
                  </div>

                  {/* Booking Summary */}
                  <div className="bg-white/5 border-2 border-white/20 rounded-none p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white border-b border-white/20 pb-3">
                      Booking Summary
                    </h3>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-yellow-400 mt-1" />
                        <div>
                          <p className="text-white/60 text-sm">Service</p>
                          <p className="text-white font-semibold">{bookingData.service}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-yellow-400 mt-1" />
                        <div>
                          <p className="text-white/60 text-sm">Date & Time</p>
                          <p className="text-white font-semibold">
                            {formatDate(bookingData.date)} at {bookingData.time}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <User className="w-5 h-5 text-yellow-400 mt-1" />
                        <div>
                          <p className="text-white/60 text-sm">Contact Person</p>
                          <p className="text-white font-semibold">{bookingData.name}</p>
                          <p className="text-white/70 text-sm">{bookingData.email}</p>
                          <p className="text-white/70 text-sm">{bookingData.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CreditCard className="w-5 h-5 text-yellow-400 mt-1" />
                        <div>
                          <p className="text-white/60 text-sm">Payment Method</p>
                          <p className="text-white font-semibold">
                            {bookingData.paymentMethod === 'online' ? 'Pay Online' : 'Pay After Session'}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Wallet className="w-5 h-5 text-yellow-400 mt-1" />
                        <div>
                          <p className="text-white/60 text-sm">Session Fee</p>
                          <p className="text-white font-bold text-xl">₹{servicePrices[serviceType]}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-400/10 border-2 border-yellow-400/50 rounded-none p-6">
                    <p className="text-white/90 text-center">
                      A confirmation email has been sent to <span className="text-yellow-400 font-semibold">{bookingData.email}</span>
                    </p>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <Button
                      onClick={() => navigate('/')}
                      className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-8 py-6 text-lg rounded-none hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all"
                    >
                      Back to Home
                    </Button>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {currentStep < 4 && (
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/20">
                  <Button
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className="bg-white/20 backdrop-blur-md text-white border-2 border-white/40 hover:bg-white hover:text-black px-8 py-6 rounded-none disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back
                  </Button>

                  <Button
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-8 py-6 rounded-none hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentStep === 3 ? 'Confirm Booking' : 'Continue'}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookSession;
