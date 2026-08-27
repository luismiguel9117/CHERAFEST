import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onReplayVideo }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent px-4 sm:px-8 pt-4 sm:pt-6 pb-2 flex items-center justify-between gap-4 flex-wrap pointer-events-auto select-none">
      
      {/* Brand Logo Header */}
      <button
        onClick={() => {
          setActiveTab('main');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="flex items-center gap-2 group hover:scale-105 transition-transform cursor-pointer"
      >
        <img
          src="/assets/header_logo.png"
          alt="My Melody Logo"
          className="h-9 sm:h-11 object-contain drop-shadow-md"
        />
      </button>

      {/* Navigation Links superpuestos directamente sobre la imagen sin fondo de barra */}
      <div className="flex items-center gap-1.5 sm:gap-4 font-baloo font-bold text-xs sm:text-sm text-[#e0669a] uppercase tracking-wider">
        
        <button
          onClick={() => {
            setActiveTab('main');
            setTimeout(() => {
              document.getElementById('calendario')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="hover:text-[#b7407a] transition-colors py-1 px-2.5 rounded-full bg-white/80 backdrop-blur-xs shadow-xs hover:bg-white cursor-pointer"
        >
          CALENDARIO
        </button>

        <button
          onClick={() => {
            setActiveTab('main');
            setTimeout(() => {
              document.getElementById('calendario')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="hover:text-[#b7407a] transition-colors py-1 px-2.5 rounded-full bg-white/80 backdrop-blur-xs shadow-xs hover:bg-white cursor-pointer"
        >
          RETOS
        </button>

        <button
          onClick={() => {
            setActiveTab('main');
            setTimeout(() => {
              document.getElementById('calendario')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="hover:text-[#b7407a] transition-colors py-1 px-2.5 rounded-full bg-white/80 backdrop-blur-xs shadow-xs hover:bg-white hidden sm:inline-block cursor-pointer"
        >
          EVENTOS
        </button>

        <button
          onClick={() => {
            setActiveTab('main');
            setTimeout(() => {
              document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="hover:text-[#b7407a] transition-colors py-1 px-2.5 rounded-full bg-white/80 backdrop-blur-xs shadow-xs hover:bg-white hidden md:inline-block cursor-pointer"
        >
          GALERÍA
        </button>

        <button
          onClick={() => {
            setActiveTab('wishlist');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`transition-colors py-1 px-2.5 rounded-full backdrop-blur-xs shadow-xs cursor-pointer ${
            activeTab === 'wishlist'
              ? 'bg-[#ef7fae] text-white'
              : 'bg-white/80 text-[#e0669a] hover:bg-white hover:text-[#b7407a]'
          }`}
        >
          WISHLIST / INFO
        </button>

        {/* Charo Day Pill Button */}
        <button
          onClick={() => {
            setActiveTab('main');
            setTimeout(() => {
              document.getElementById('calendario')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="bg-[#ef7fae] hover:bg-[#e0669a] text-white font-baloo font-extrabold text-xs px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-[0_3px_0_rgba(214,105,155,0.4)] flex items-center gap-1.5 transition-all hover:scale-105 lowercase tracking-normal cursor-pointer"
        >
          <span>🎀</span>
          <span>CHARO DAY</span>
        </button>

        {/* Ver Video Button */}
        <button
          onClick={onReplayVideo}
          title="Ver video de bienvenida nuevamente"
          className="px-3 py-1.5 bg-white/90 border border-[#ffd0e2] text-[#ef7fae] hover:bg-white rounded-full font-bold text-xs flex items-center gap-1 shadow-xs transition-all cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#f78ab6]" />
          <span className="hidden lg:inline">Ver Video 🎬</span>
        </button>

      </div>

    </nav>
  );
}
