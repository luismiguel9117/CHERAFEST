import React from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DayDetailModal({ dayData, onClose, onToggleComplete }) {
  if (!dayData) return null;

  const handleToggle = () => {
    if (!dayData.completed) {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ef7fae', '#f78ab6', '#bda3e8', '#ffd0e2']
      });
    }
    onToggleComplete(dayData.day);
  };

  const isBirthday = dayData.day === 20;

  return (
    <div className="fixed inset-0 z-[150] bg-[#783c5a]/45 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      
      {/* Container Card */}
      <div className="bg-white border-4 border-[#ffd0e2] rounded-3xl p-6 md:p-8 max-w-md w-full shadow-[0_14px_0_rgba(230,150,190,0.35)] relative animate-popIn text-center">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#fff0f6] border-2 border-[#ffd0e2] text-[#e0669a] flex items-center justify-center font-bold hover:bg-[#ffe0ec] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Date Ribbon */}
        <div className="inline-flex items-center gap-1 font-baloo font-bold text-xs uppercase tracking-widest text-[#d488b0] bg-[#fff0f6] border border-[#ffd0e2] rounded-full px-4 py-1 mb-2">
          <span>{dayData.weekday}</span>
          <span>{dayData.day} de Septiembre</span>
        </div>

        {/* Main Icon */}
        <div className={`text-5xl my-3 ${isBirthday ? 'animate-bounce' : ''}`}>
          {dayData.icon}
        </div>

        {/* Title */}
        <h3 className={`font-baloo font-extrabold text-2xl md:text-3xl leading-tight mb-3 ${
          isBirthday ? 'text-[#e0669a]' : 'text-[#ef7fae]'
        }`}>
          {dayData.title}
        </h3>

        {/* Time & Location Badges */}
        <div className="flex flex-wrap justify-center gap-2 my-4">
          <span className="bg-[#fff0f6] border-2 border-[#ffd6e6] rounded-full px-3.5 py-1 text-xs font-bold text-[#d4699b] flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {dayData.time}
          </span>
          <span className="bg-[#f8f2ff] border-2 border-[#e8dcfa] rounded-full px-3.5 py-1 text-xs font-bold text-[#9a76c8] flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            {dayData.place}
          </span>
        </div>

        {/* Note / Description */}
        <p className="text-sm font-medium text-[#a86e90] leading-relaxed my-4 bg-[#fffafc] border border-[#ffeef5] p-3.5 rounded-2xl">
          {dayData.note}
        </p>

        {/* Reto Secreto Box */}
        {dayData.secretChallenge && (
          <div className="bg-[#fdf5ff] border-2 border-dashed border-[#e2cdf6] rounded-2xl p-3.5 text-left my-4">
            <div className="flex items-center gap-1.5 font-baloo font-bold text-xs text-[#8a63b8] uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#bda3e8]" />
              <span>Reto Secreto del Día:</span>
            </div>
            <p className="text-xs font-semibold text-[#7a4a63]">
              {dayData.secretChallenge}
            </p>
          </div>
        )}

        {/* Checkbox de Estado Completado */}
        <button
          onClick={handleToggle}
          className={`w-full mt-4 font-baloo font-bold text-sm sm:text-base py-3 px-6 rounded-full border-2 transition-all flex items-center justify-center gap-2 ${
            dayData.completed
              ? 'bg-[#e2f7ea] border-[#92e3b2] text-[#2d8a52] shadow-sm'
              : 'bg-[#ef7fae] border-white text-white shadow-[0_5px_0_rgba(214,105,155,0.4)] hover:bg-[#e0669a]'
          }`}
        >
          <CheckCircle2 className={`w-5 h-5 ${dayData.completed ? 'text-[#2d8a52]' : 'text-white'}`} />
          <span>{dayData.completed ? '¡Reto Completado! 🎉' : 'Marcar como Completado ♥'}</span>
        </button>

      </div>
    </div>
  );
}
