import React, { useState, useEffect } from 'react';
import { Calendar, Gift, Clock, Sparkles, Heart, ChevronRight } from 'lucide-react';

export default function FeatureCards({ onOpenCalendar, onOpenWishlist, onSelectDay }) {
  // Timer de cuenta regresiva al próximo evento (por ejemplo, Septiembre 3)
  const [timeLeft, setTimeLeft] = useState({
    days: '02',
    hours: '14',
    minutes: '32',
    seconds: '18'
  });

  useEffect(() => {
    const targetDate = new Date('2026-09-03T20:30:00');
    
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff > 0) {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / 1000 / 60) % 60);
        const s = Math.floor((diff / 1000) % 60);

        setTimeLeft({
          days: String(d).padStart(2, '0'),
          hours: String(h).padStart(2, '0'),
          minutes: String(m).padStart(2, '0'),
          seconds: String(s).padStart(2, '0')
        });
      } else {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Título de la Sección */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 font-baloo font-bold text-[#f78ab6] text-sm tracking-widest uppercase">
            <span>✨</span>
            <span>TU CHARO FEST</span>
            <span>✨</span>
          </div>
          <p className="text-sm sm:text-base font-semibold text-[#b3789a] mt-1">
            Un mes para guardar recuerdos, disfrutar cada momento y hacer de septiembre algo inolvidable.
          </p>
        </div>

        {/* Grid de 4 Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: 24 Días de Magia */}
          <div className="bg-white border-3 border-[#ffd0e2] rounded-3xl p-5 shadow-[0_8px_0_rgba(255,190,215,0.35)] flex flex-col justify-between items-center text-center hover:translate-y-[-4px] transition-transform">
            <div className="w-full">
              <div className="inline-flex items-center gap-1 font-baloo font-bold text-xs text-[#ef7fae] uppercase tracking-wider mb-2">
                <span>🎀</span> 24 DÍAS DE MAGIA
              </div>
              
              <div className="my-3 bg-[#fff0f6] border-2 border-[#ffc0d8] rounded-2xl p-4 relative">
                <span className="font-baloo font-extrabold text-5xl text-[#f78ab6] block">24</span>
                <span className="text-xs font-bold text-[#d4699b]">días para celebrar</span>
              </div>
            </div>

            <p className="text-xs font-semibold text-[#a05a80] mt-2 mb-4">
              Retos, actividades y sorpresas todos los días.
            </p>
          </div>

          {/* Card 2: Próximo Evento (Cuenta Regresiva) */}
          <div className="bg-white border-3 border-[#ffd0e2] rounded-3xl p-5 shadow-[0_8px_0_rgba(255,190,215,0.35)] flex flex-col justify-between items-center text-center hover:translate-y-[-4px] transition-transform">
            <div className="w-full">
              <div className="inline-flex items-center gap-1 font-baloo font-bold text-xs text-[#ef7fae] uppercase tracking-wider mb-2">
                <span>🎤</span> PRÓXIMO EVENTO
              </div>

              <div className="my-2 bg-[#fdf5ff] border-2 border-[#e8dcfa] rounded-2xl p-3">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-xl">🐰🎤</span>
                  <span className="font-baloo font-bold text-sm text-[#8a63b8]">Reto: Karaoke</span>
                </div>
                <div className="text-[11px] font-semibold text-[#a98fc4]">Jueves 3 de Septiembre</div>

                {/* Counter units */}
                <div className="grid grid-cols-4 gap-1 mt-3">
                  <div className="bg-white border border-[#e2cdf6] rounded-lg p-1">
                    <span className="font-baloo font-bold text-base text-[#ef7fae] block leading-none">{timeLeft.days}</span>
                    <span className="text-[9px] text-[#b3789a] font-semibold">días</span>
                  </div>
                  <div className="bg-white border border-[#e2cdf6] rounded-lg p-1">
                    <span className="font-baloo font-bold text-base text-[#ef7fae] block leading-none">{timeLeft.hours}</span>
                    <span className="text-[9px] text-[#b3789a] font-semibold">hrs</span>
                  </div>
                  <div className="bg-white border border-[#e2cdf6] rounded-lg p-1">
                    <span className="font-baloo font-bold text-base text-[#ef7fae] block leading-none">{timeLeft.minutes}</span>
                    <span className="text-[9px] text-[#b3789a] font-semibold">min</span>
                  </div>
                  <div className="bg-white border border-[#e2cdf6] rounded-lg p-1">
                    <span className="font-baloo font-bold text-base text-[#ef7fae] block leading-none">{timeLeft.seconds}</span>
                    <span className="text-[9px] text-[#b3789a] font-semibold">seg</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectDay(3)}
              className="w-full mt-3 font-baloo font-bold text-xs text-white bg-[#ef7fae] hover:bg-[#e0669a] rounded-full py-2 shadow-[0_4px_0_rgba(214,105,155,0.4)] transition-all"
            >
              VER DETALLES
            </button>
          </div>

          {/* Card 3: Calendario */}
          <div className="bg-white border-3 border-[#ffd0e2] rounded-3xl p-5 shadow-[0_8px_0_rgba(255,190,215,0.35)] flex flex-col justify-between items-center text-center hover:translate-y-[-4px] transition-transform">
            <div className="w-full">
              <div className="inline-flex items-center gap-1 font-baloo font-bold text-xs text-[#ef7fae] uppercase tracking-wider mb-2">
                <span>📅</span> CALENDARIO
              </div>

              <div className="my-2 bg-[#fff0f6] border-2 border-[#ffc0d8] rounded-2xl p-4 flex flex-col items-center">
                <div className="text-4xl my-1">📅🎀</div>
                <span className="text-xs font-bold text-[#d4699b] mt-1">24 Retos Interactivos</span>
              </div>
            </div>

            <p className="text-xs font-semibold text-[#a05a80] mt-2 mb-3">
              Descubre todas las actividades de septiembre.
            </p>

            <button
              onClick={onOpenCalendar}
              className="w-full font-baloo font-bold text-xs text-white bg-[#ef7fae] hover:bg-[#e0669a] rounded-full py-2 shadow-[0_4px_0_rgba(214,105,155,0.4)] transition-all"
            >
              VER CALENDARIO
            </button>
          </div>

          {/* Card 4: Wishlist */}
          <div className="bg-white border-3 border-[#ffd0e2] rounded-3xl p-5 shadow-[0_8px_0_rgba(255,190,215,0.35)] flex flex-col justify-between items-center text-center hover:translate-y-[-4px] transition-transform">
            <div className="w-full">
              <div className="inline-flex items-center gap-1 font-baloo font-bold text-xs text-[#8a63b8] uppercase tracking-wider mb-2">
                <span>🎁</span> WISHLIST
              </div>

              <div className="my-2 bg-[#fdf5ff] border-2 border-[#e8dcfa] rounded-2xl p-4 flex flex-col items-center">
                <div className="text-4xl my-1">🎁💖</div>
                <span className="text-xs font-bold text-[#8a63b8] mt-1">Lista de Deseos</span>
              </div>
            </div>

            <p className="text-xs font-semibold text-[#a05a80] mt-2 mb-3">
              Guarda las cosas que quieres vivir, recibir o recordar.
            </p>

            <button
              onClick={onOpenWishlist}
              className="w-full font-baloo font-bold text-xs text-white bg-[#bda3e8] hover:bg-[#a882dd] rounded-full py-2 shadow-[0_4px_0_rgba(150,110,205,0.4)] transition-all"
            >
              VER WISHLIST
            </button>
          </div>

        </div>

        {/* Cinta / Quote Inferior */}
        <div className="mt-8 bg-[#fff0f6] border-2 border-[#ffd0e2] rounded-full py-3 px-6 text-center max-w-3xl mx-auto shadow-sm flex items-center justify-center gap-2">
          <span className="text-lg">🐰</span>
          <p className="font-baloo font-bold text-xs sm:text-sm text-[#d4699b]">
            Esto es más que un calendario, es nuestro espacio para crear recuerdos juntas. ♥
          </p>
        </div>

      </div>
    </section>
  );
}
