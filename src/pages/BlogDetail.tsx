import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Clock, Share2, BookmarkPlus, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const allBlogPosts = [
    {
      id: 1,
      title: "Understanding the Major Arcana: The Fool's Journey",
      excerpt: "Explore the profound symbolism of the 22 Major Arcana cards and their representation of life's spiritual journey from innocence to enlightenment.",
      content: "The Major Arcana represents the spiritual journey we all take through life. Starting with The Fool (0), representing innocence and new beginnings, the journey progresses through 21 additional cards, each representing a different archetype or life lesson. The Magician teaches us about personal power and manifestation. The High Priestess reveals the mysteries of intuition and the subconscious. The Empress embodies abundance and nurturing. The Emperor represents structure and authority. Through trials, growth, and transformation symbolized by cards like The Tower (sudden change) and Death (transformation), we eventually reach The World (21), representing completion, wholeness, and the integration of all we've learned. Each card serves as a mirror, reflecting different aspects of our journey and offering guidance on our path to self-realization.",
      author: "Rashika Ji",
      date: "Nov 5, 2024",
      category: "Tarot",
      image: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=800&q=80",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Retrograde Planets: Blessings in Disguise",
      excerpt: "Discover how retrograde planets in your birth chart aren't obstacles but opportunities for deep introspection and spiritual growth.",
      content: "When planets appear to move backward in the sky, we call this retrograde motion. While often feared, retrogrades are actually cosmic gifts inviting us to pause, reflect, and realign. Mercury retrograde encourages us to review our communication and thought patterns. Venus retrograde asks us to reassess our relationships and values. Mars retrograde prompts us to reconsider our actions and desires. If you were born with retrograde planets in your chart, you possess a natural ability for introspection in those planetary areas. These planets function differently, turning their energy inward rather than outward. This isn't a weakness but a unique strength - giving you depth, wisdom, and the ability to see what others miss. Embrace your retrograde planets as teachers showing you the path to authentic self-expression and spiritual evolution.",
      author: "Rashika Ji",
      date: "Nov 3, 2024",
      category: "Astrology",
      image: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=800&q=80",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "The Power of Number 8 in Business Success",
      excerpt: "Learn why number 8 is considered the most powerful number for business success and how to harness its energy in your entrepreneurial journey.",
      content: "In numerology, the number 8 represents abundance, power, and material success. Its shape - an infinity symbol standing upright - reflects the continuous flow of energy between the spiritual and material realms. This number resonates with the vibration of achievement, wealth accumulation, and executive ability. If your Life Path, Destiny, or Business Name reduces to 8, you have natural leadership abilities and business acumen. The number 8 teaches important lessons about balance - understanding that true success comes from ethical practices, fair dealings, and giving back. To harness 8's energy in business: set clear, ambitious goals; make strategic decisions with confidence; build systems that create lasting value; and remember that with great power comes great responsibility. Those who work with 8's vibration often excel in finance, real estate, management, and entrepreneurship. Honor this powerful number by using your success to create positive change in the world.",
      author: "Rashika Ji",
      date: "Nov 1, 2024",
      category: "Numerology",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Vastu Tips for Home Office: Boost Your Productivity",
      excerpt: "Transform your home office into a productivity powerhouse with these essential Vastu principles for the modern work-from-home professional.",
      content: "Your home office's energy directly impacts your productivity, creativity, and professional success. According to Vastu Shastra, certain placements and arrangements optimize workflow and mental clarity. First, position your desk in the North or East direction, as these directions enhance concentration and bring prosperity. Sit facing East or North while working - East improves decision-making while North attracts opportunities. Avoid sitting with your back to the door, as this creates subconscious anxiety. Keep your workspace clutter-free, especially in the North-East corner, which represents mental clarity. Place a small water feature or blue element in the North to activate career success. Avoid placing your desk under exposed beams, which create pressure. Use earthy colors like beige, light yellow, or green to promote stability and growth. Ensure good natural lighting, especially from the East. Display your achievements in the South wall to boost recognition. Keep electronic devices in the Southeast corner. These simple Vastu adjustments create a harmonious environment that supports your professional growth and success.",
      author: "Rashika Ji",
      date: "Oct 29, 2024",
      category: "Vastu",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Reading Your Life Line: What Your Palm Reveals",
      excerpt: "Decode the secrets hidden in your life line and understand what it reveals about your vitality, health, and life path.",
      content: "The Life Line is one of the most prominent lines on your palm, curving around the base of your thumb. Contrary to popular belief, it doesn't predict how long you'll live - instead, it reveals the quality of your life, vitality, and major life changes. A deep, clear Life Line indicates robust health and vitality. A faint line suggests you may need to pay more attention to self-care and energy management. If your Life Line is wide and sweeping, you have abundant energy and enthusiasm for life. A close line to the thumb indicates a cautious, reserved nature. Breaks in the Life Line don't mean disaster - they represent significant life changes or transitions. Islands on the line suggest periods of health challenges or energy depletion. A forked Life Line at the end indicates diverse interests in later life. Chains on the line show periods of stress or health concerns. Sister lines running parallel provide extra protection and vitality. Remember, your palm is dynamic - lines can change as you make different life choices, reflecting your personal growth and evolution.",
      author: "Rashika Ji",
      date: "Oct 27, 2024",
      category: "Palmistry",
      image: "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?w=800&q=80",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Full Moon Rituals for Manifestation and Release",
      excerpt: "Harness the powerful energy of the full moon with these time-tested rituals for manifesting desires and releasing what no longer serves you.",
      content: "The Full Moon represents the peak of lunar energy - a powerful time for both manifestation and release. As the moon reflects maximum light, it illuminates what's hidden and amplifies our intentions. Begin your Full Moon ritual by creating sacred space - cleanse your area with sage or incense. Light white or silver candles to honor the moon's energy. First, acknowledge your achievements since the New Moon - write down what you've manifested and express gratitude. The Full Moon is primarily a time for release. Write down what no longer serves you: limiting beliefs, toxic relationships, fears, or old patterns. Be specific and honest. Safely burn this paper, visualizing these things transforming into light and leaving your energy field. Next, charge crystals like moonstone, selenite, or clear quartz under the moonlight - place them on a windowsill or outside overnight. Create Full Moon water by leaving a bowl of water under moonlight; use this for cleansing and blessing. Finally, meditate under the moon if possible, absorbing its radiant energy. Full Moon energy remains potent for three days, so use this window wisely for deep emotional healing and energetic clearing.",
      author: "Rashika Ji",
      date: "Oct 25, 2024",
      category: "Spiritual Practices",
      image: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=800&q=80",
      readTime: "10 min read"
    },
    {
      id: 7,
      title: "Saturn Return: Your Soul's Greatest Teacher",
      excerpt: "Understanding the transformative power of Saturn Return and how to navigate this crucial period that occurs around ages 29 and 58.",
      content: "Saturn Return occurs when Saturn completes its orbit and returns to the exact position it occupied at your birth - approximately every 29.5 years. This cosmic checkpoint arrives around ages 29, 58, and 87, bringing profound life lessons and transformations. The first Saturn Return (late 20s) marks the transition from youth to adulthood. You're called to take responsibility, establish authentic structures, and align your life with your true purpose. Many experience career changes, relationship endings or commitments, relocations, or identity shifts. The second Saturn Return (late 50s) brings wisdom, refinement, and often a reassessment of life's meaning and legacy. While Saturn Return can feel challenging - bringing delays, obstacles, or reality checks - it's ultimately a gift. Saturn, the cosmic teacher, removes what's not authentic and reinforces what's true. To navigate Saturn Return successfully: embrace responsibility and maturity; release what's not aligned with your authentic self; build solid foundations for your future; seek wisdom from mentors; practice patience and persistence; and trust that challenges are sculpting you into your highest self. Remember, Saturn rewards genuine effort and authentic living.",
      author: "Rashika Ji",
      date: "Oct 23, 2024",
      category: "Astrology",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
      readTime: "9 min read"
    },
    {
      id: 8,
      title: "Clearing Karmic Debt: A Practical Guide",
      excerpt: "Learn practical techniques and spiritual practices to identify and clear karmic debts that may be holding you back from your highest potential.",
      content: "Karmic debt represents unresolved energy from past actions, whether from this life or previous incarnations. These debts manifest as recurring patterns, obstacles, or challenging relationships that seem to repeat despite your efforts. To identify karmic debt, notice repeated patterns in your life - the same types of conflicts, similar relationship dynamics, or persistent obstacles in specific areas. In numerology, certain numbers (13, 14, 16, 19) appearing in your chart indicate karmic lessons. Clearing karmic debt requires consciousness and commitment. First, acknowledge the pattern without judgment - awareness is the first step to transformation. Practice forgiveness - both of yourself and others involved in karmic situations. This doesn't mean condoning harmful behavior but releasing the energetic charge. Perform acts of service related to your karmic lesson - if your debt involves communication, practice compassionate listening; if it involves resources, practice generosity. Meditation and energy healing help release stored karmic imprints. Work with crystals like black tourmaline for protection during clearing, and selenite for spiritual purification. Remember, clearing karma isn't about punishment - it's about learning, growing, and evolving into your highest self.",
      author: "Rashika Ji",
      date: "Oct 21, 2024",
      category: "Spiritual Practices",
      image: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=800&q=80",
      readTime: "12 min read"
    },
    {
      id: 9,
      title: "The Art of Yes/No Tarot Readings",
      excerpt: "Master the skill of asking the right questions and interpreting yes/no tarot spreads for quick, accurate guidance in daily decisions.",
      content: "Yes/No Tarot readings provide quick, direct answers when you need clear guidance. However, the art lies in asking the right questions and interpreting with nuance. First, frame your question clearly and specifically. Instead of 'Will I be happy?' ask 'Is accepting this job offer in my best interest?' Avoid questions about timing ('When will...') as tarot speaks in energies, not dates. For Yes/No readings, you can use a single card or three-card spread. Generally, upright cards lean toward 'yes' while reversed cards suggest 'no' or 'not yet.' However, consider the card's inherent nature. Positive cards like The Sun, The Star, or Ace of Cups strongly indicate yes. Challenging cards like The Tower, Five of Pentacles, or Ten of Swords lean toward no. Neutral cards require intuitive interpretation based on context. In a three-card spread, majority rules - two or more positive cards indicate yes. Pay attention to the center card as it carries the most weight. Remember, tarot empowers you with insight, not absolute fate. A 'no' might mean 'not now' or 'not this way.' Use these readings as guidance for your decision-making, not as replacements for it.",
      author: "Rashika Ji",
      date: "Oct 19, 2024",
      category: "Tarot",
      image: "https://images.unsplash.com/photo-1541356665065-22676f35dd40?w=800&q=80",
      readTime: "5 min read"
    },
    {
      id: 10,
      title: "Your Life Path Number: Unlocking Your Purpose",
      excerpt: "Discover how to calculate your Life Path Number and what it reveals about your soul's purpose and life direction.",
      content: "Your Life Path Number is the most important number in your numerology chart, revealing your soul's purpose, natural talents, and life direction. To calculate it, reduce your full birth date to a single digit. For example, if born on July 14, 1990: 7 + 1 + 4 + 1 + 9 + 9 + 0 = 31, then 3 + 1 = 4. Your Life Path is 4. Each number carries unique energy: Life Path 1 - The Leader: Independent, innovative, pioneering spirit. Your purpose involves initiating new projects and leading others. Life Path 2 - The Peacemaker: Diplomatic, sensitive, cooperative. You're here to create harmony and build partnerships. Life Path 3 - The Creative: Expressive, optimistic, artistic. Your purpose involves communication and inspiring others. Life Path 4 - The Builder: Practical, disciplined, hardworking. You create lasting structures and systems. Life Path 5 - The Freedom Seeker: Adventurous, dynamic, versatile. You're here to experience freedom and facilitate change. Life Path 6 - The Nurturer: Responsible, caring, service-oriented. Your purpose involves healing and supporting others. Life Path 7 - The Seeker: Analytical, spiritual, introspective. You're here to seek truth and share wisdom. Life Path 8 - The Powerhouse: Ambitious, authoritative, success-oriented. Your purpose involves material mastery and leadership. Life Path 9 - The Humanitarian: Compassionate, wise, generous. You're here to serve humanity and complete cycles. Understanding your Life Path helps you align with your authentic purpose and make choices that honor your soul's journey.",
      author: "Rashika Ji",
      date: "Oct 17, 2024",
      category: "Numerology",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80",
      readTime: "8 min read"
    }
  ];

  const post = allBlogPosts.find(p => p.id === parseInt(id || "0"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Blog Post Not Found</h2>
          <Button onClick={() => navigate('/blog')} className="bg-yellow-400 text-white">
                Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Tarot": "from-purple-500 to-purple-600",
      "Astrology": "from-blue-500 to-blue-600",
      "Numerology": "from-yellow-500 to-amber-600",
      "Vastu": "from-green-500 to-emerald-600",
      "Palmistry": "from-pink-500 to-rose-600",
      "Spiritual Practices": "from-indigo-500 to-purple-600"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Cosmic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{ background: 'var(--gradient-mystical)' }} />
      </div>

      <Header />

      {/* Back Button */}
      <section className="relative z-10 pt-32 pb-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button
            onClick={() => navigate('/blog')}
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black rounded-none mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </section>

      {/* Article Content */}
      <article className="relative z-10 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Featured Image */}
          <div className="relative h-96 rounded-none overflow-hidden border-4 border-white/20 mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            
            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <span className={`bg-gradient-to-r ${getCategoryColor(post.category)} text-white text-sm font-bold px-4 py-2 rounded-none shadow-lg`}>
                {post.category}
              </span>
            </div>
          </div>

          {/* Article Header */}
          <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-none p-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-white/70 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-yellow-400" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-xl text-white/90 leading-relaxed italic border-l-4 border-yellow-400 pl-6">
              {post.excerpt}
            </p>
          </div>

          {/* Article Body */}
          <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-none p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-white/90 text-lg leading-relaxed whitespace-pre-line">
                {post.content}
              </p>
            </div>
          </div>

          {/* Share & Actions */}
          <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-none p-6 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">Enjoyed this article?</span>
              </div>
              <div className="flex gap-3">
                <Button
                  className="bg-white/20 backdrop-blur-md text-white border-2 border-white/40 hover:bg-white hover:text-black rounded-none font-semibold"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button
                  className="bg-white/20 backdrop-blur-md text-white border-2 border-white/40 hover:bg-white hover:text-black rounded-none font-semibold"
                >
                  <BookmarkPlus className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-yellow-400/20 to-amber-500/20 border-2 border-yellow-400/50 rounded-none p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore Your Spiritual Journey?
            </h3>
            <p className="text-white/80 mb-6">
              Discover our range of spiritual services and find the perfect guidance for your life path.
            </p>
            <Link to="/#services">
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-8 py-4 text-lg rounded-none hover:shadow-[0_0_30px_rgba(251,191,36,0.6)]">
                Explore Sessions
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetail;
