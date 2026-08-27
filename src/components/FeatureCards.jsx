import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Heart, Sparkles, Gift } from 'lucide-react';

export default function FeatureCards({ onOpenCalendar, onOpenWishlist, onSelectDay }) {
  // Timer de cuenta regresiva para el evento central (Sept 3, 2026 - My Melody Takeover)
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 32, seconds: 18 });

  useEffect(() => {
    const targetDate = new Date('2026-09-03T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 text-center select-none">
      
      {/* Título de la Sección */}
      <div className="mb-8 sm:mb-12">
        <h2 className="font-baloo font-black text-2xl sm:text-3xl md:text-4xl text-[#ef7fae] uppercase tracking-wide flex items-center justify-center gap-2">
          <span>✨</span>
          <span>TU CHARO FEST</span>
          <span>✨</span>
        </h2>
        <p className="font-quicksand font-bold text-xs sm:text-sm md:text-base text-[#b3789a] mt-1 max-w-xl mx-auto">
          Un mes para guardar recuerdos, disfrutar cada momento y hacer de septiembre algo inolvidable.
        </p>
      </div>

      {/* Grid de 4 Cards Informativas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        
        {/* Card 1: 24 Días de Magia */}
        <div className="bg-[#fff6f9] border-2 border-[#ffd0e2] rounded-3xl p-6 flex flex-col justify-between items-center shadow-[0_8px_20px_rgba(239,127,174,0.12)] hover:scale-102 transition-transform">
          <div className="w-full">
            <div className="inline-flex items-center gap-1.5 font-baloo font-bold text-xs text-[#e0669a] bg-[#ffe0ec] rounded-full px-3.5 py-1 mb-4">
              <span>✨</span>
              <span>24 DÍAS DE MAGIA</span>
            </div>
            
            {/* Ilustración del calendario de mesa PNG */}
            <div className="my-2 flex justify-center">
              <img
                src="/assets/calendario.png"
                alt="24 Días de Magia"
                className="h-28 object-contain drop-shadow-sm"
              />
            </div>

            <p className="font-quicksand font-bold text-xs sm:text-sm text-[#7a4a63] mt-3">
              Retos, actividades y sorpresas todos los días.
            </p>
          </div>
        </div>

        {/* Card 2: Próximo Evento (Cuenta Regresiva My Melody Takeover Sept 3) */}
        <div className="bg-[#fff6f9] border-2 border-[#ffd0e2] rounded-3xl p-6 flex flex-col justify-between items-center shadow-[0_8px_20px_rgba(239,127,174,0.12)] hover:scale-102 transition-transform relative overflow-hidden">
          <div className="w-full">
            <div className="inline-flex items-center gap-1.5 font-baloo font-bold text-xs text-[#e0669a] bg-[#ffe0ec] rounded-full px-3.5 py-1 mb-3">
              <span>📱</span>
              <span>PRÓXIMO EVENTO</span>
            </div>

            {/* Ilustración de My Melody Mascot PNG */}
            <div className="flex items-center justify-center gap-2 my-1">
              <img
                src="/assets/melodykaraoke.png"
                alt="My Melody Takeover"
                className="h-20 object-contain drop-shadow-sm"
              />
              <div className="text-left">
                <span className="font-baloo font-extrabold text-sm text-[#ef7fae] block">My Melody Takeover</span>
                <span className="text-[11px] font-bold text-[#b3789a] block">Jueves 3 de Septiembre</span>
                <span className="text-[10px] font-semibold text-[#804863] block mt-0.5 max-w-[130px] leading-tight">
                  Cambiar foto de WSP o IG por My Melody.
                </span>
              </div>
            </div>

            {/* Contador de Tiempo */}
            <div className="bg-white/80 border border-[#ffd0e2] rounded-2xl p-2.5 my-3 grid grid-cols-4 gap-1 text-center shadow-xs">
              <div>
                <span className="font-baloo font-black text-sm text-[#ef7fae] block">{formatNumber(timeLeft.days)}</span>
                <span className="text-[9px] font-bold text-[#b3789a] uppercase">días</span>
              </div>
              <div>
                <span className="font-baloo font-black text-sm text-[#ef7fae] block">{formatNumber(timeLeft.hours)}</span>
                <span className="text-[9px] font-bold text-[#b3789a] uppercase">hrs</span>
              </div>
              <div>
                <span className="font-baloo font-black text-sm text-[#ef7fae] block">{formatNumber(timeLeft.minutes)}</span>
                <span className="text-[9px] font-bold text-[#b3789a] uppercase">min</span>
              </div>
              <div>
                <span className="font-baloo font-black text-sm text-[#ef7fae] block">{formatNumber(timeLeft.seconds)}</span>
                <span className="text-[9px] font-bold text-[#b3789a] uppercase">seg</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onSelectDay(3)}
            className="w-full bg-[#ef7fae] hover:bg-[#e0669a] text-white font-baloo font-extrabold text-xs py-2.5 rounded-full shadow-[0_3px_0_rgba(214,105,155,0.4)] transition-all hover:scale-102 active:scale-98"
          >
            VER DETALLES
          </button>
        </div>

        {/* Card 3: Calendario */}
        <div className="bg-[#fff6f9] border-2 border-[#ffd0e2] rounded-3xl p-6 flex flex-col justify-between items-center shadow-[0_8px_20px_rgba(239,127,174,0.12)] hover:scale-102 transition-transform">
          <div className="w-full">
            <div className="inline-flex items-center gap-1.5 font-baloo font-bold text-xs text-[#e0669a] bg-[#ffe0ec] rounded-full px-3.5 py-1 mb-4">
              <span>🎀</span>
              <span>CALENDARIO</span>
            </div>

            {/* Ilustración de Calendario Sanrio */}
            <div className="my-2 flex justify-center">
              <img
                src="/assets/calendario.png"
                alt="Calendario Septiembre"
                className="h-28 object-contain drop-shadow-sm"
              />
            </div>

            <p className="font-quicksand font-bold text-xs sm:text-sm text-[#7a4a63] mt-3">
              Descubre todas las actividades de septiembre.
            </p>
          </div>

          <button
            onClick={onOpenCalendar}
            className="w-full bg-[#ef7fae] hover:bg-[#e0669a] text-white font-baloo font-extrabold text-xs py-2.5 rounded-full shadow-[0_3px_0_rgba(214,105,155,0.4)] transition-all hover:scale-102 active:scale-98 mt-4"
          >
            VER CALENDARIO
          </button>
        </div>

        {/* Card 4: Wishlist */}
        <div className="bg-[#fff6f9] border-2 border-[#ffd0e2] rounded-3xl p-6 flex flex-col justify-between items-center shadow-[0_8px_20px_rgba(239,127,174,0.12)] hover:scale-102 transition-transform">
          <div className="w-full">
            <div className="inline-flex items-center gap-1.5 font-baloo font-bold text-xs text-[#e0669a] bg-[#ffe0ec] rounded-full px-3.5 py-1 mb-4">
              <span>🎁</span>
              <span>WISHLIST</span>
            </div>

            {/* Ilustración de Caja de Regalo Corazón PNG */}
            <div className="my-2 flex justify-center">
              <img
                src="/assets/corazon.png"
                alt="Caja Regalo Corazón"
                className="h-28 object-contain drop-shadow-sm"
              />
            </div>

            <p className="font-quicksand font-bold text-xs sm:text-sm text-[#7a4a63] mt-3">
              Guarda las cosas que quieres vivir, recibir o recordar.
            </p>
          </div>

          <button
            onClick={onOpenWishlist}
            className="w-full bg-[#ef7fae] hover:bg-[#e0669a] text-white font-baloo font-extrabold text-xs py-2.5 rounded-full shadow-[0_3px_0_rgba(214,105,155,0.4)] transition-all hover:scale-102 active:scale-98 mt-4"
          >
            VER WISHLIST
          </button>
        </div>

      </div>

      {/* Banner de Frase Rosa de My Melody */}
      <div className="bg-[#fff0f6] border-2 border-[#ffd0e2] rounded-full px-6 py-3.5 inline-flex items-center gap-3 shadow-xs max-w-2xl mx-auto">
        <img
          src="/assets/header_logo.png"
          alt="My Melody Icon"
          className="w-7 h-7 object-contain"
        />
        <p className="font-quicksand font-bold text-xs sm:text-sm text-[#e0669a]">
          Esto es más que un calendario, es nuestro espacio para crear recuerdos juntas. ♥
        </p>
      </div>

    </section>
  );
}
