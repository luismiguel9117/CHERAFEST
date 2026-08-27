import React from 'react';
import { Calendar } from 'lucide-react';

export default function Hero({ onOpenCalendar, onOpenWishlist, onOpenGallery }) {
  return (
    <header 
      id="top" 
      className="relative w-full h-screen min-h-[580px] max-h-[1080px] overflow-hidden select-none bg-[#fff2f6]"
    >
      
      {/* 1. Fondo completo (Fondo2.png) */}
      <img
        src="/assets/fondo2.png"
        alt="Fondo Charo Fest"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* 2. Borde Inferior de Encaje (borde.png con rotación 180) */}
      <img
        src="/assets/borde.png"
        alt="Borde Encaje Inferior"
        className="absolute bottom-0 left-0 right-0 w-full h-12 sm:h-24 md:h-28 object-fill z-20 pointer-events-none rotate-180"
      />

      {/* 3. Personaje My Melody Izquierda (mascot_personaje.png) - Adaptable en móviles */}
      <img
        src="/assets/mascot_personaje.png"
        alt="My Melody Mascot"
        className="absolute left-[0.5%] sm:left-[1%] bottom-[6%] sm:bottom-[8%] h-[38vh] sm:h-[58vh] max-h-[520px] min-h-[160px] w-auto object-contain drop-shadow-md z-25 animate-floaty opacity-80 sm:opacity-100 pointer-events-none"
      />

      {/* 4. Ratita Flat con Globo (rata_mouse.png) por ENCIMA del borde inferior (z-30) */}
      <img
        src="/assets/rata_mouse.png"
        alt="Flat Mouse Balloon"
        className="absolute left-[2%] sm:left-[4%] bottom-[2%] sm:bottom-[3%] h-[14vh] sm:h-[19vh] max-h-[180px] min-h-[70px] w-auto object-contain drop-shadow-md z-30 pointer-events-none"
      />

      {/* 5. Elementos Derecha: Atril, Cesta Picnic, Árbol y Cojín Corazón (derecha_items.png) - Adaptable en móviles */}
      <img
        src="/assets/derecha_items.png"
        alt="Elementos Derecha Charo Fest"
        className="absolute right-[0.5%] bottom-[5%] sm:bottom-[7%] h-[42vh] sm:h-[68vh] max-h-[600px] min-h-[180px] w-auto object-contain drop-shadow-md hover:scale-102 transition-transform z-25 opacity-80 sm:opacity-100 pointer-events-none"
      />

      {/* 6. Título Gráfico Central (titulo.png) MÁS GRANDE */}
      <img
        src="/assets/titulo.png"
        alt="Título Charo Fest"
        className="absolute left-1/2 -translate-x-1/2 top-[11%] sm:top-[11%] h-[34vh] sm:h-[44vh] max-h-[440px] min-h-[170px] w-auto object-contain z-25 drop-shadow-sm"
      />

      {/* 7. BLOQUE CENTRAL DE TEXTOS, FECHA Y BOTÓN MÁS GRANDE Y PROMINENTE SIN SUPERPOSICIÓN */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[50%] sm:top-[54%] w-[94%] max-w-[720px] text-center flex flex-col items-center gap-2.5 sm:gap-4 z-30 pointer-events-auto px-2">
        
        {/* Subtítulo descriptivo de 3 líneas MÁS GRANDE */}
        <p className="font-quicksand font-bold text-xs sm:text-base md:text-lg lg:text-xl text-[#7a3b5b] leading-tight sm:leading-relaxed max-w-2xl drop-shadow-xs">
          Porque celebrar un solo día sería demasiado normal.<br className="hidden sm:inline" />
          24 días de retos misios, BTS, rosado,<br className="hidden sm:inline" />
          ramen, karaoke y recuerdos inolvidables.
        </p>

        {/* Cápsula / Badge de Fechas (01 - 24 SEPTIEMBRE 2026) MÁS GRANDE */}
        <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-[#fff0f6]/95 backdrop-blur-xs border-2 sm:border-3 border-dashed border-[#f78ab6] rounded-full px-5 sm:px-10 py-1.5 sm:py-2 font-baloo font-extrabold text-xs sm:text-base md:text-lg text-[#e0669a] shadow-xs">
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#ef7fae]" />
          <span>01 – 24 SEPTIEMBRE 2026</span>
        </div>

        {/* Botón principal VER CALENDARIO MÁS GRANDE Y PROMINENTE */}
        <button
          onClick={onOpenCalendar}
          className="bg-[#ef7fae] hover:bg-[#e0669a] text-white font-baloo font-black text-xs sm:text-base md:text-lg px-7 py-2.5 sm:px-12 sm:py-3.5 rounded-full shadow-[0_5px_0_rgba(214,105,155,0.4)] flex items-center gap-2 sm:gap-2.5 transition-all hover:scale-105 active:scale-95 cursor-pointer uppercase tracking-wider"
        >
          <span className="text-sm sm:text-lg">🎀</span>
          <span>VER CALENDARIO</span>
        </button>

      </div>

      {/* 8. Hotspots Transparentes adicionales */}
      <div 
        onClick={onOpenCalendar}
        className="absolute right-[5%] w-[14%] top-[30%] h-[22%] cursor-pointer hover:scale-102 transition-transform z-40"
        title="Ver Calendario completo"
      />

    </header>
  );
}
