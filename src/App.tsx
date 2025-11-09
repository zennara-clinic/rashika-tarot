import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import BookSession from "./pages/BookSession";
import TarotReading from "./pages/TarotReading";
import Astrology from "./pages/Astrology";
import Numerology from "./pages/Numerology";
import Vastu from "./pages/Vastu";
import Palmistry from "./pages/Palmistry";
import KarmicHitsBalancing from "./pages/KarmicHitsBalancing";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/book-session" element={<BookSession />} />
          <Route path="/tarot-reading" element={<TarotReading />} />
          <Route path="/astrology" element={<Astrology />} />
          <Route path="/numerology" element={<Numerology />} />
          <Route path="/vastu" element={<Vastu />} />
          <Route path="/palmistry" element={<Palmistry />} />
          <Route path="/karmic-hits-balancing" element={<KarmicHitsBalancing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
