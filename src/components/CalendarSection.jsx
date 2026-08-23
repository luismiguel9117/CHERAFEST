import React from 'react';
import { Calendar as CalendarIcon, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CalendarSection({ activities, onSelectDay }) {
  // Septiembre 2026 inicia en Martes (1 blank cell en formato Lunes-Primero)
  const leadBlankCells = [null];
  
  // Días de la semana en encabezado
  const weekdays = ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB', 'DOM'];

  return (
    <section id="calendario" className="py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="font-baloo font-extrabold text-4xl sm:text-6xl text-[#f78ab6] text-stroke-white drop-shadow-[0_4px_0_rgba(247,138,182,0.3)]">
            Septiembre 2026
          </h2>
          <p className="text-sm sm:text-base font-bold text-[#b3789a] mt-2 tracking-wide">
            Tocá un día para ver el plan completo 🎀
          </p>
        </div>

        {/* Outer Calendar Box */}
        <div className="bg-white border-3 border-[#ffd0e2] rounded-3xl p-4 sm:p-6 shadow-[0_10px_0_rgba(255,190,215,0.35)]">
          
          {/* Header Row Days */}
          <div className="grid grid-cols-7 gap-2 mb-3">
            {weekdays.map((dayName, idx) => (
              <div
                key={dayName}
                className={`text-center font-baloo font-bold text-xs sm:text-sm py-2 tracking-wider ${
                  idx >= 5 ? 'text-[#c98fd8]' : 'text-[#d488b0]'
                }`}
              >
                {dayName}
              </div>
            ))}
          </div>

          {/* Grid Cells */}
          <div className="grid grid-cols-7 gap-2 sm:gap-3">
            {/* Blank leading offset cell */}
            {leadBlankCells.map((_, i) => (
              <div key={`blank-${i}`} className="min-h-[90px] sm:min-h-[110px] rounded-2xl bg-transparent border-2 border-transparent" />
            ))}

            {/* Activity Cells */}
            {activities.map((item) => {
              const isBirthday = item.day === 20;

              return (
                <button
                  key={item.day}
                  onClick={() => onSelectDay(item.day)}
                  className={`min-h-[95px] sm:min-h-[115px] rounded-2xl p-2.5 flex flex-col justify-between items-start text-left transition-all duration-200 hover:scale-102 hover:shadow-md relative group ${
                    isBirthday
                      ? 'bg-gradient-to-br from-[#ffd9e8] to-[#ffc0dc] border-2 border-[#f78ab6] shadow-sm'
                      : item.completed
                      ? 'bg-[#eefbf3] border-2 border-[#a3e5bb]'
                      : 'bg-[#fff4f9] border-2 border-[#ffd6e6] hover:border-[#f78ab6]'
                  }`}
                >
                  {/* Top Bar: Number & Icon */}
                  <div className="w-full flex items-center justify-between">
                    <span className={`font-baloo font-extrabold text-lg sm:text-xl leading-none ${
                      isBirthday ? 'text-[#c94b80]' : 'text-[#e0669a]'
                    }`}>
                      {item.day}
                    </span>

                    <span className="text-base sm:text-lg">
                      {isBirthday ? '🎂' : item.icon}
                    </span>
                  </div>

                  {/* Activity Title */}
                  <div className="w-full my-1">
                    <span className={`font-baloo font-bold text-xs sm:text-sm line-clamp-2 leading-tight ${
                      isBirthday ? 'text-[#a83d6c]' : 'text-[#7a4a63]'
                    }`}>
                      {item.title}
                    </span>
                  </div>

                  {/* Bottom Metadata / Completed Tag */}
                  <div className="w-full flex items-center justify-between text-[10px] font-semibold text-[#c092ac] mt-auto">
                    <span>{item.time}</span>
                    {item.completed && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2d8a52] fill-[#eefbf3]" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
