import React from 'react';

export default function Navbar({ activeTab, setActiveTab, onReplayVideo }) {
  return (
    <nav className="sticky top-0 z-50 bg-[#fff0f6]/95 backdrop-blur-md border-b-2 border-[#ffd0e2] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 flex items-center justify-between gap-4 flex-wrap">
        
        {/* Brand Logo Header */}
        <button
          onClick={() => {
            setActiveTab('main');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group hover:scale-105 transition-transform"
        >
          <img
            src="/assets/header_logo.png"
            alt="My Melody Logo"
            className="h-9 sm:h-11 object-contain drop-shadow-sm"
          />
        </button>

        {/* Navigation Links según el diseño de referencia */}
        <div className="flex items-center gap-2 sm:gap-5 font-baloo font-bold text-xs sm:text-sm text-[#e0669a] uppercase tracking-wider">
          
          <button
            onClick={() => {
              setActiveTab('main');
              setTimeout(() => {
                document.getElementById('calendario')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="hover:text-[#b7407a] transition-colors py-1 px-2"
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
            className="hover:text-[#b7407a] transition-colors py-1 px-2"
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
            className="hover:text-[#b7407a] transition-colors py-1 px-2 hidden sm:inline-block"
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
            className="hover:text-[#b7407a] transition-colors py-1 px-2 hidden md:inline-block"
          >
            GALERÍA
          </button>

          <button
            onClick={() => {
              setActiveTab('wishlist');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:text-[#b7407a] transition-colors py-1 px-2"
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
            className="bg-[#ef7fae] hover:bg-[#e0669a] text-white font-baloo font-extrabold text-xs px-5 py-2 rounded-full shadow-[0_3px_0_rgba(214,105,155,0.4)] flex items-center gap-1.5 transition-all hover:scale-105 lowercase tracking-normal"
          >
            <span>🎀</span>
            <span>CHARO DAY</span>
          </button>

          {/* Ver Video Button */}
          <button
            onClick={onReplayVideo}
            title="Ver video de bienvenida nuevamente"
            className="px-3 py-1.5 bg-white border border-[#ffd0e2] text-[#ef7fae] hover:bg-[#fff5f8] rounded-full font-bold text-xs flex items-center gap-1 shadow-xs transition-all"
          >
            <span>🎬</span>
            <span className="hidden lg:inline">Ver Video</span>
          </button>

        </div>

      </div>

      {/* Scalloped lace border */}
      <div className="lace-border-bottom" />
    </nav>
  );
}
