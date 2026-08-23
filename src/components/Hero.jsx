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

      {/* 2. Borde Superior de Encaje (borde.png) */}
      <img
        src="/assets/borde.png"
        alt="Borde Encaje Superior"
        className="absolute top-0 left-0 right-0 w-full h-14 sm:h-20 md:h-24 object-fill z-20 pointer-events-none"
      />

      {/* 3. Borde Inferior de Encaje (borde.png) */}
      <img
        src="/assets/borde.png"
        alt="Borde Encaje Inferior"
        className="absolute bottom-0 left-0 right-0 w-full h-14 sm:h-20 md:h-24 object-fill z-20 pointer-events-none rotate-180"
      />

      {/* 4. Personaje My Melody Izquierda (mascot_personaje.png) */}
      <img
        src="/assets/mascot_personaje.png"
        alt="My Melody Mascot"
        className="absolute left-[1%] bottom-[9%] h-[56vh] max-h-[500px] min-h-[260px] w-auto object-contain drop-shadow-md z-25 animate-floaty"
      />

      {/* 5. Ratita Flat con Globo (rata_mouse.png) por ENCIMA del borde inferior (z-30) */}
      <img
        src="/assets/rata_mouse.png"
        alt="Flat Mouse Balloon"
        className="absolute left-[4%] bottom-[3%] h-[19vh] max-h-[175px] min-h-[95px] w-auto object-contain drop-shadow-md z-30"
      />

      {/* 6. Elementos Derecha: Atril, Cesta Picnic, Árbol y Cojín Corazón (derecha_items.png) */}
      <img
        src="/assets/derecha_items.png"
        alt="Elementos Derecha Charo Fest"
        className="absolute right-[0.5%] bottom-[7%] h-[66vh] max-h-[580px] min-h-[300px] w-auto object-contain drop-shadow-md hover:scale-102 transition-transform z-25"
      />

      {/* 7. Título Gráfico Central (titulo.png) */}
      <img
        src="/assets/titulo.png"
        alt="Título Charo Fest"
        className="absolute left-1/2 -translate-x-1/2 top-[7%] sm:top-[8%] h-[36vh] max-h-[340px] min-h-[180px] w-auto object-contain z-25 drop-shadow-xs"
      />

      {/* 8. TEXTOS FALTANTES DEBAJO DEL TÍTULO (Exacto a la imagen de referencia) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[44%] sm:top-[43%] md:top-[42%] w-[90%] max-w-[620px] text-center flex flex-col items-center gap-2.5 sm:gap-3 z-30 pointer-events-auto">
        
        {/* Subtítulo descriptivo de 3 líneas */}
        <p className="font-quicksand font-bold text-xs sm:text-sm md:text-base text-[#804863] leading-tight sm:leading-relaxed max-w-lg drop-shadow-xs">
          Porque celebrar un solo día sería demasiado normal.<br className="hidden sm:inline" />
          24 días de retos misios, BTS, rosado,<br className="hidden sm:inline" />
          ramen, karaoke y recuerdos inolvidables.
        </p>

        {/* Cápsula / Badge de Fechas (01 - 24 SEPTIEMBRE 2026) */}
        <div className="inline-flex items-center gap-2 bg-[#fff0f6]/90 backdrop-blur-xs border-2 border-dashed border-[#f78ab6] rounded-full px-5 sm:px-7 py-1.5 font-baloo font-extrabold text-xs sm:text-sm text-[#e0669a] shadow-xs">
          <Calendar className="w-4 h-4 text-[#ef7fae]" />
          <span>01 – 24 SEPTIEMBRE 2026</span>
        </div>

        {/* Botón principal VER CALENDARIO con lazo de moño 🎀 */}
        <button
          onClick={onOpenCalendar}
          className="bg-[#ef7fae] hover:bg-[#e0669a] text-white font-baloo font-extrabold text-xs sm:text-sm px-7 py-2.5 rounded-full shadow-[0_4px_0_rgba(214,105,155,0.4)] flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer uppercase tracking-wider"
        >
          <span className="text-sm">🎀</span>
          <span>VER CALENDARIO</span>
        </button>

      </div>

      {/* 9. Hotspots Transparentes adicionales */}
      <div 
        onClick={onOpenCalendar}
        className="absolute right-[5%] w-[14%] top-[30%] h-[22%] cursor-pointer hover:scale-102 transition-transform z-40"
        title="Ver Calendario completo"
      />

    </header>
  );
}
