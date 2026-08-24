import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function WeeklyQuickView({ activities, onSelectDay, onOpenCalendar }) {
  // Filtrar los primeros 7 días de Septiembre
  const weekOne = activities.filter(a => a.day >= 1 && a.day <= 7);

  // Mapeo de iconos PNG para la primera semana
  const dayIcons = {
    1: '/assets/cmaara.png',     // Cámara
    2: '/assets/corazon2.png',   // Corazón BTS
    3: '/assets/caraoke.png',    // Micrófono Karaoke
    4: '/assets/carta.png',      // Carta / Foto
    5: '/assets/happy.png',      // Gorrito fiesta
    6: '/assets/ramen.png',      // Cuenco Ramen
    7: '/assets/corazon2.png'    // Corazón Relax
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 select-none">
      
      {/* Header de la Sección */}
      <div className="text-center mb-8">
        <h2 className="font-baloo font-black text-2xl sm:text-3xl text-[#ef7fae] uppercase tracking-wide flex items-center justify-center gap-2">
          <span>✨</span>
          <span>VISTA RÁPIDA DE SEPTIEMBRE</span>
          <span>✨</span>
        </h2>
        <p className="font-quicksand font-bold text-xs sm:text-sm text-[#b3789a] mt-1">
          Echa un vistazo a lo que se viene esta semana ✨
        </p>
      </div>

      {/* Contenido Principal: Polaroid a la Izquierda + Tira de 7 Días a la Derecha */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#fff6f9] border-2 border-[#ffd0e2] rounded-3xl p-6 sm:p-8 shadow-[0_8px_24px_rgba(239,127,174,0.12)]">
        
        {/* Lado Izquierdo: Polaroid de My Melody */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="bg-white p-3 pt-4 pb-6 rounded-2xl shadow-md border border-[#ffd0e2] -rotate-3 hover:rotate-0 transition-transform max-w-[260px] relative">
            
            {/* Cinta rosada adhesiva arriba */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#ffc5dc]/80 border border-[#f78ab6] rounded-xs rotate-1" />

            <div className="rounded-xl overflow-hidden bg-[#fff0f6] border border-[#ffd0e2] aspect-[4/5] flex items-center justify-center p-2">
              <img
                src="/assets/portrait.png"
                alt="My Melody Polaroid"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="mt-3 text-center">
              <span className="font-baloo font-extrabold text-xs text-[#ef7fae]">
                Charo & My Melody 🌸
              </span>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Strip de 7 Días */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
            {weekOne.map((act) => {
              const isHighlight = act.day === 3; // Miércoles 3 Karaoke destacado

              return (
                <div
                  key={act.day}
                  onClick={() => onSelectDay(act.day)}
                  className={`rounded-2xl p-3 text-center cursor-pointer transition-all flex flex-col items-center justify-between border-2 ${
                    isHighlight
                      ? 'bg-[#ffe0ec] border-[#ef7fae] shadow-md scale-105'
                      : 'bg-white border-[#ffd0e2] hover:bg-[#fff0f6] hover:scale-102'
                  }`}
                >
                  {/* Nombre del Día */}
                  <span className={`font-baloo font-black text-[11px] uppercase block ${
                    isHighlight ? 'text-[#b7407a]' : 'text-[#b3789a]'
                  }`}>
                    {act.weekday.slice(0, 3)} {act.day}
                  </span>

                  {/* Icono PNG */}
                  <div className="my-2 h-10 flex items-center justify-center">
                    <img
                      src={dayIcons[act.day] || '/assets/corazon2.png'}
                      alt={act.title}
                      className="h-8 w-8 object-contain drop-shadow-xs"
                    />
                  </div>

                  {/* Título Resumido */}
                  <span className={`font-quicksand font-bold text-[10px] leading-tight line-clamp-2 ${
                    isHighlight ? 'text-[#b7407a]' : 'text-[#7a4a63]'
                  }`}>
                    {act.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Botón Ver Calendario Completo */}
          <div className="text-center pt-2">
            <button
              onClick={onOpenCalendar}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#fff0f6] border-2 border-[#ffd0e2] text-[#ef7fae] font-baloo font-extrabold text-xs px-6 py-2.5 rounded-full shadow-xs transition-all hover:scale-105"
            >
              <span>VER CALENDARIO COMPLETO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
