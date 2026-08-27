import React from 'react';
import { Calendar } from 'lucide-react';

export default function Hero({ onOpenCalendar, onOpenWishlist, onOpenGallery }) {
  return (
    <header 
      id="top" 
      className="relative w-full h-screen min-h-[540px] sm:min-h-[640px] max-h-[1080px] overflow-hidden select-none bg-[#fff2f6]"
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
        className="absolute bottom-0 left-0 right-0 w-full h-10 sm:h-20 md:h-24 object-fill z-20 pointer-events-none rotate-180"
      />

      {/* 3. Título Gráfico Central (titulo.png) UBICADO ALTO */}
      <img
        src="/assets/titulo.png"
        alt="Título Charo Fest"
        className="absolute left-1/2 -translate-x-1/2 top-[7%] sm:top-[9%] h-[26vh] sm:h-[38vh] md:h-[44vh] max-h-[420px] min-h-[150px] w-auto object-contain z-25 drop-shadow-sm"
      />

      {/* 4. BLOQUE CENTRAL DE TEXTOS, FECHA Y BOTÓN SUBIDOS AL ESPACIO LIBRE BAJO EL TÍTULO */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[34%] sm:top-[44%] md:top-[50%] w-[94%] max-w-[680px] text-center flex flex-col items-center gap-2 sm:gap-3.5 z-30 pointer-events-auto px-2">
        
        {/* Subtítulo descriptivo ajustado y subido en el espacio libre */}
        <p className="font-quicksand font-extrabold text-[12px] sm:text-base md:text-lg lg:text-xl text-[#7a3b5b] leading-snug sm:leading-relaxed max-w-2xl drop-shadow-xs bg-white/40 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none p-1.5 sm:p-0 rounded-2xl">
          Porque celebrar un solo día sería demasiado normal.<br className="hidden sm:inline" />
          24 días de retos misios, BTS, rosado,<br className="hidden sm:inline" />
          ramen, karaoke y recuerdos inolvidables.
        </p>

        {/* Cápsula / Badge de Fechas (01 - 24 SEPTIEMBRE 2026) */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2.5 bg-[#fff0f6]/95 backdrop-blur-xs border-2 sm:border-3 border-dashed border-[#f78ab6] rounded-full px-4 sm:px-8 py-1 sm:py-2 font-baloo font-extrabold text-[11px] sm:text-base md:text-lg text-[#e0669a] shadow-xs">
          <Calendar className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#ef7fae]" />
          <span>01 – 24 SEPTIEMBRE 2026</span>
        </div>

        {/* Botón principal VER CALENDARIO */}
        <button
          onClick={onOpenCalendar}
          className="bg-[#ef7fae] hover:bg-[#e0669a] text-white font-baloo font-black text-xs sm:text-base md:text-lg px-6 py-2 sm:px-10 sm:py-3 rounded-full shadow-[0_4px_0_rgba(214,105,155,0.4)] flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer uppercase tracking-wider"
        >
          <span className="text-xs sm:text-base">🎀</span>
          <span>VER CALENDARIO</span>
        </button>

      </div>

      {/* 5. Personaje My Melody Izquierda (mascot_personaje.png) MÁS PEQUEÑO EN MÓVILES PARA NO INTERFERIR */}
      <img
        src="/assets/mascot_personaje.png"
        alt="My Melody Mascot"
        className="absolute left-[0.5%] bottom-[4%] sm:bottom-[7%] h-[23vh] sm:h-[45vh] max-h-[460px] min-h-[110px] w-auto object-contain drop-shadow-md z-25 opacity-70 sm:opacity-100 pointer-events-none"
      />

      {/* 6. Ratita Flat con Globo (rata_mouse.png) */}
      <img
        src="/assets/rata_mouse.png"
        alt="Flat Mouse Balloon"
        className="absolute left-[1%] sm:left-[3%] bottom-[1.5%] sm:bottom-[3%] h-[9vh] sm:h-[16vh] max-h-[150px] min-h-[45px] w-auto object-contain drop-shadow-md z-30 pointer-events-none"
      />

      {/* 7. Elementos Derecha: Atril, Cesta Picnic, Árbol y Cojín Corazón (derecha_items.png) MÁS PEQUEÑOS EN MÓVILES */}
      <img
        src="/assets/derecha_items.png"
        alt="Elementos Derecha Charo Fest"
        className="absolute right-[0.5%] bottom-[4%] sm:bottom-[6%] h-[24vh] sm:h-[50vh] max-h-[520px] min-h-[120px] w-auto object-contain drop-shadow-md z-25 opacity-70 sm:opacity-100 pointer-events-none"
      />

    </header>
  );
}
