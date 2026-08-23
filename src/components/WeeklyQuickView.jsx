import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function WeeklyQuickView({ activities, onSelectDay, onOpenCalendar }) {
  const week1 = activities.slice(0, 7);

  return (
    <section className="py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 font-baloo font-bold text-sm text-[#f78ab6] uppercase tracking-widest">
            <span>✨</span>
            <span>VISTA RÁPIDA DE SEPTIEMBRE</span>
            <span>✨</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-[#b3789a] mt-1">
            Echa un vistazo a lo que se viene esta semana 💫
          </p>
        </div>

        {/* Outer White Card Container */}
        <div className="bg-white border-3 border-[#ffd0e2] rounded-3xl p-4 sm:p-6 shadow-[0_10px_0_rgba(255,190,215,0.35)]">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {week1.map((item) => (
              <button
                key={item.day}
                onClick={() => onSelectDay(item.day)}
                className={`p-3 rounded-2xl border-2 transition-all flex flex-col items-center justify-between text-center min-h-[140px] group ${
                  item.day === 3
                    ? 'bg-[#fff0f6] border-[#f78ab6] shadow-sm scale-105'
                    : 'bg-[#fffafc] border-[#ffeef5] hover:border-[#ffd0e2] hover:bg-[#fff0f6]'
                }`}
              >
                {/* Day Header */}
                <div className="font-baloo font-bold text-xs uppercase text-[#d488b0] tracking-wider">
                  {item.weekday.slice(0, 3)} {item.day}
                </div>

                {/* Icon */}
                <div className="text-2xl my-2 group-hover:scale-125 transition-transform">
                  {item.icon}
                </div>

                {/* Title & Tag */}
                <div className="w-full">
                  <span className="font-baloo font-bold text-xs text-[#7a4a63] block leading-tight">
                    {item.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Button Ver Calendario Completo */}
          <div className="mt-6 text-center">
            <button
              onClick={onOpenCalendar}
              className="inline-flex items-center gap-2 font-baloo font-bold text-sm sm:text-base text-[#ef7fae] bg-[#fff0f6] hover:bg-[#ffe0ec] border-2 border-[#ffd0e2] rounded-full px-6 py-2.5 shadow-sm transition-all group"
            >
              <span>VER CALENDARIO COMPLETO</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
