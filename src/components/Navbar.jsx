import React, { useState } from 'react';
import { Sparkles, Menu, X, Calendar, Gift, Image, Heart, Film } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onReplayVideo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab, targetId = null) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    if (tab === 'main' && targetId) {
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent px-4 sm:px-8 pt-3 sm:pt-4 pb-2 flex items-center justify-between gap-4 pointer-events-auto select-none">
        
        {/* Brand Logo Header - AGRANDADO EN HEADER (h-14 sm:h-16 md:h-18) */}
        <button
          onClick={() => handleNavClick('main')}
          className="flex items-center gap-2 group hover:scale-105 transition-transform cursor-pointer"
        >
          <img
            src="/assets/header_logo.png"
            alt="My Melody Logo"
            className="h-14 sm:h-16 md:h-18 w-auto object-contain drop-shadow-md"
          />
        </button>

        {/* DESKTOP NAVIGATION BAR (visible únicamente en pantallas >= md) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3 font-baloo font-bold text-xs sm:text-sm text-[#e0669a]">
          <button
            onClick={() => handleNavClick('main', 'calendario')}
            className="hover:text-[#b7407a] transition-colors py-1.5 px-3 rounded-full bg-white/85 backdrop-blur-xs shadow-xs hover:bg-white cursor-pointer"
          >
            CALENDARIO
          </button>

          <button
            onClick={() => handleNavClick('main', 'galeria')}
            className="hover:text-[#b7407a] transition-colors py-1.5 px-3 rounded-full bg-white/85 backdrop-blur-xs shadow-xs hover:bg-white cursor-pointer"
          >
            GALERÍA
          </button>

          <button
            onClick={() => handleNavClick('wishlist')}
            className={`transition-colors py-1.5 px-3.5 rounded-full backdrop-blur-xs shadow-xs cursor-pointer ${
              activeTab === 'wishlist'
                ? 'bg-[#ef7fae] text-white font-extrabold'
                : 'bg-white/85 text-[#e0669a] hover:bg-white hover:text-[#b7407a]'
            }`}
          >
            WISHLIST / INFO
          </button>

          {/* Charo Day Pill Button */}
          <button
            onClick={() => handleNavClick('main', 'calendario')}
            className="bg-[#ef7fae] hover:bg-[#e0669a] text-white font-baloo font-extrabold text-xs px-5 py-2 rounded-full shadow-[0_3px_0_rgba(214,105,155,0.4)] flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer"
          >
            <span>🎀</span>
            <span>CHARO DAY</span>
          </button>

          {/* Ver Video Button */}
          <button
            onClick={onReplayVideo}
            title="Ver video de bienvenida nuevamente"
            className="px-3.5 py-1.5 bg-white/90 border border-[#ffd0e2] text-[#ef7fae] hover:bg-white rounded-full font-bold text-xs flex items-center gap-1 shadow-xs transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#f78ab6]" />
            <span>Ver Video 🎬</span>
          </button>
        </div>

        {/* MOBILE HAMBURGER BUTTON (visible únicamente en pantallas móviles < md) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => handleNavClick('wishlist')}
            className="bg-[#ef7fae] text-white font-baloo font-bold text-[11px] px-3 py-1.5 rounded-full shadow-xs flex items-center gap-1"
          >
            <Gift className="w-3.5 h-3.5" />
            <span>Wishlist</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-white/95 text-[#ef7fae] border-2 border-[#ffc0d8] p-2 rounded-full shadow-md hover:bg-white cursor-pointer transition-all active:scale-95"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </nav>

      {/* MOBILE FLOATING MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[150] bg-[#2b1520]/60 backdrop-blur-sm flex flex-col justify-start pt-20 px-6 animate-fadeIn md:hidden">
          <div className="bg-white border-3 border-[#ffd0e2] rounded-3xl p-6 shadow-2xl flex flex-col gap-3 text-center relative max-w-sm mx-auto w-full">
            
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-[#ef7fae] hover:text-[#b7407a] p-1 bg-[#fff0f6] rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center gap-2 mb-1">
              <Heart className="w-5 h-5 text-[#ef7fae] fill-[#ef7fae]" />
              <span className="font-baloo font-extrabold text-lg text-[#b7407a]">CHARO FEST 2026</span>
            </div>

            <hr className="border-[#ffe0ec] mb-1" />

            <button
              onClick={() => handleNavClick('main')}
              className="font-baloo font-bold text-base text-[#b7407a] bg-[#fff0f6] hover:bg-[#ffe3ee] py-2.5 px-4 rounded-full flex items-center justify-center gap-2 shadow-xs"
            >
              <span>🏠</span>
              <span>INICIO</span>
            </button>

            <button
              onClick={() => handleNavClick('main', 'calendario')}
              className="font-baloo font-bold text-base text-[#b7407a] bg-[#fff0f6] hover:bg-[#ffe3ee] py-2.5 px-4 rounded-full flex items-center justify-center gap-2 shadow-xs"
            >
              <Calendar className="w-4 h-4 text-[#ef7fae]" />
              <span>CALENDARIO DE ACTIVIDADES</span>
            </button>

            <button
              onClick={() => handleNavClick('main', 'galeria')}
              className="font-baloo font-bold text-base text-[#b7407a] bg-[#fff0f6] hover:bg-[#ffe3ee] py-2.5 px-4 rounded-full flex items-center justify-center gap-2 shadow-xs"
            >
              <Image className="w-4 h-4 text-[#ef7fae]" />
              <span>GALERÍA POLAROID</span>
            </button>

            <button
              onClick={() => handleNavClick('wishlist')}
              className="font-baloo font-bold text-base text-white bg-[#ef7fae] hover:bg-[#e0669a] py-2.5 px-4 rounded-full flex items-center justify-center gap-2 shadow-md"
            >
              <Gift className="w-4 h-4 fill-white" />
              <span>WISHLIST DE CHARO 🎁</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReplayVideo();
              }}
              className="font-baloo font-bold text-sm text-[#ef7fae] bg-[#fff0f6] hover:bg-[#ffe3ee] py-2 px-4 rounded-full flex items-center justify-center gap-2 shadow-xs mt-1"
            >
              <Film className="w-4 h-4 text-[#ef7fae]" />
              <span>VER VIDEO DE BIENVENIDA 🎬</span>
            </button>

          </div>
        </div>
      )}
    </>
  );
}
