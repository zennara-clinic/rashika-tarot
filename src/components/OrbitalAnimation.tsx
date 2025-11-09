const OrbitalAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Sun/Star */}
      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-500 shadow-[0_0_60px_rgba(251,191,36,0.8)] animate-pulse z-10" />

      {/* Orbit 1 - Mercury */}
      <div className="absolute w-48 h-48 border border-white/20 rounded-full animate-[spin_60s_linear_infinite]" style={{ transform: 'rotate(0deg)' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-lg" />
      </div>

      {/* Orbit 2 - Venus */}
      <div className="absolute w-64 h-64 border border-white/15 rounded-full animate-[spin_80s_linear_infinite]" style={{ transform: 'rotate(60deg)' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-200 to-orange-300 shadow-lg" />
      </div>

      {/* Orbit 3 - Earth */}
      <div className="absolute w-80 h-80 border border-white/10 rounded-full animate-[spin_100s_linear_infinite]" style={{ transform: 'rotate(180deg)' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-green-400 shadow-lg" />
      </div>

      {/* Orbit 4 - Mars */}
      <div className="absolute w-96 h-96 border border-white/10 rounded-full animate-[spin_120s_linear_infinite]" style={{ transform: 'rotate(270deg)' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-lg" />
      </div>

      {/* Orbit 5 - Jupiter */}
      <div className="absolute w-[28rem] h-[28rem] border border-white/5 rounded-full animate-[spin_150s_linear_infinite]" style={{ transform: 'rotate(45deg)' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-orange-300 via-amber-400 to-yellow-600 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-700/30 to-transparent rounded-full" />
        </div>
      </div>

      {/* Orbit 6 - Saturn */}
      <div className="absolute w-[32rem] h-[32rem] border border-white/5 rounded-full animate-[spin_180s_linear_infinite]" style={{ transform: 'rotate(135deg)' }}>
        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-400 shadow-xl" />
          {/* Saturn's Ring */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20">
            <div className="absolute inset-0 border-2 border-yellow-300/40 rounded-full transform rotate-12" />
          </div>
        </div>
      </div>

      {/* Small Stars/Sparkles */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export default OrbitalAnimation;
