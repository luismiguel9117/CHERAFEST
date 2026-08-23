import React from 'react';
import { Home, Calendar, Gift, Image, Sparkles } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onReplayVideo }) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-40 bg-transparent px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 pointer-events-auto">
      
      {/* Brand Logo Header */}
      <button
        onClick={() => setActiveTab('main')}
        className="flex items-center gap-2 group hover:scale-105 transition-transform"
      >
        <img
          src="/assets/header_logo.png"
          alt="My Melody Logo"
          className="h-9 sm:h-11 object-contain drop-shadow-sm"
        />
      </button>

      {/* Navigation Links */}
      <div className="flex items-center gap-2 sm:gap-4 font-baloo font-bold text-xs sm:text-sm text-[#e0669a]">
        <button
          onClick={() => {
            setActiveTab('main');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
            activeTab === 'main'
              ? 'bg-[#ef7fae] text-white shadow-[0_3px_0_rgba(214,105,155,0.4)]'
              : 'bg-white/80 backdrop-blur-xs text-[#d4699b] hover:bg-white'
          }`}
        >
          <Home className="w-3.5 h-3.5" />
          <span>Inicio</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('main');
            setTimeout(() => {
              document.getElementById('calendario')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="bg-white/80 backdrop-blur-xs px-3.5 py-1.5 text-[#d4699b] hover:bg-white rounded-full transition-all flex items-center gap-1.5 shadow-xs"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Calendario</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('wishlist');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
            activeTab === 'wishlist'
              ? 'bg-[#bda3e8] text-white shadow-[0_3px_0_rgba(150,110,205,0.4)]'
              : 'bg-white/80 backdrop-blur-xs text-[#8a63b8] hover:bg-white'
          }`}
        >
          <Gift className="w-3.5 h-3.5" />
          <span>Wishlist</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('main');
            setTimeout(() => {
              document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="bg-white/80 backdrop-blur-xs px-3.5 py-1.5 text-[#d4699b] hover:bg-white rounded-full transition-all flex items-center gap-1.5 shadow-xs hidden md:flex"
        >
          <Image className="w-3.5 h-3.5" />
          <span>Galería</span>
        </button>

        {/* Charo Day Button Badge */}
        <button
          onClick={() => {
            setActiveTab('main');
            setTimeout(() => {
              document.getElementById('calendario')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="bg-[#ef7fae] hover:bg-[#e0669a] text-white font-baloo font-extrabold text-xs px-4 py-1.5 rounded-full shadow-[0_3px_0_rgba(214,105,155,0.4)] flex items-center gap-1 transition-all hover:scale-105"
        >
          <span>🎀 CHARO DAY</span>
        </button>

        {/* Ver Video Intro Button */}
        <button
          onClick={onReplayVideo}
          title="Ver video de bienvenida nuevamente"
          className="px-3 py-1.5 bg-white/90 border border-[#ffd0e2] text-[#ef7fae] hover:bg-white rounded-full font-bold text-xs flex items-center gap-1 shadow-xs transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#f78ab6]" />
          <span className="hidden sm:inline">Ver Video 🎬</span>
        </button>
      </div>

    </nav>
  );
}
