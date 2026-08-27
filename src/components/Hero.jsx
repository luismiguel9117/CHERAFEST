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
        className="absolute bottom-[4%] sm:bottom-0 left-0 right-0 w-full h-12 sm:h-24 md:h-28 object-fill z-20 pointer-events-none rotate-180"
      />

      {/* 3. Título Gráfico Central (titulo.png) - AGRANDADO EN PC (md:h-[44vh] md:max-h-[460px]) */}
      <img
        src="/assets/titulo.png"
        alt="Título Charo Fest"
        className="absolute left-1/2 -translate-x-1/2 top-[5%] sm:top-[6%] md:top-[3%] h-[30vh] sm:h-[38vh] md:h-[44vh] max-h-[360px] md:max-h-[460px] min-h-[170px] w-auto object-contain z-25 drop-shadow-sm"
      />

      {/* 4. BLOQUE CENTRAL DE TEXTOS, FECHA Y BOTÓN:
          - En PC/DESKTOP (>= md): Ubicado a md:top-[46%] encajando debajo del título agrandado.
          - En MÓVILES (< md): En top-[37%] impecable sin tocar FEST. */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[37%] sm:top-[39%] md:top-[46%] w-[94%] md:w-[100%] max-w-[720px] text-center flex flex-col items-center gap-2 md:gap-3.5 z-30 pointer-events-auto px-2">
        
        {/* Subtítulo descriptivo */}
        <p className="font-quicksand font-bold text-xs sm:text-base md:text-lg text-[#7a3b5b] leading-tight md:leading-relaxed max-w-2xl drop-shadow-xs">
          Porque celebrar un solo día sería demasiado normal.<br className="hidden sm:inline" />
          24 días de retos misios, BTS, rosado,<br className="hidden sm:inline" />
          ramen, karaoke y recuerdos inolvidables.
        </p>

        {/* Cápsula / Badge de Fechas */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2.5 bg-[#fff0f6]/95 backdrop-blur-xs border-2 md:border-3 border-dashed border-[#f78ab6] rounded-full px-4 md:px-10 py-1.5 md:py-2 font-baloo font-extrabold text-xs sm:text-base md:text-lg text-[#e0669a] shadow-xs">
          <Calendar className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#ef7fae]" />
          <span>01 – 24 SEPTIEMBRE 2026</span>
        </div>

        {/* Botón principal VER CALENDARIO */}
        <button
          onClick={onOpenCalendar}
          className="bg-[#ef7fae] hover:bg-[#e0669a] text-white font-baloo font-black text-xs sm:text-base md:text-lg px-7 py-2.5 md:px-12 md:py-3.5 rounded-full shadow-[0_5px_0_rgba(214,105,155,0.4)] flex items-center gap-2 md:gap-2.5 transition-all hover:scale-105 active:scale-95 cursor-pointer uppercase tracking-wider"
        >
          <span className="text-sm md:text-lg">🎀</span>
          <span>VER CALENDARIO</span>
        </button>

      </div>

      {/* 5. Personaje My Melody Izquierda (mascot_personaje.png):
          - En PC/DESKTOP (>= md): SUBIDO A md:bottom-[10%] h-[60vh] max-h-[540px]
          - En MÓVILES (< md): Intacto en bottom-[10%] */}
      <img
        src="/assets/mascot_personaje.png"
        alt="My Melody Mascot"
        className="absolute left-[0.5%] sm:left-[1%] bottom-[10%] md:bottom-[10%] h-[25vh] md:h-[60vh] max-h-[250px] md:max-h-[540px] min-h-[130px] md:min-h-[160px] w-auto object-contain drop-shadow-md z-25 opacity-90 md:opacity-100 pointer-events-none"
      />

      {/* 6. Ratita Flat con Globo (rata_mouse.png):
          - En PC/DESKTOP (>= md): SUBIDA A md:bottom-[5%] */}
      <img
        src="/assets/rata_mouse.png"
        alt="Flat Mouse Balloon"
        className="absolute left-[2%] sm:left-[4%] bottom-[5%] md:bottom-[5%] h-[9vh] md:h-[19vh] max-h-[100px] md:max-h-[170px] min-h-[45px] md:min-h-[70px] w-auto object-contain drop-shadow-md z-30 pointer-events-none"
      />

      {/* 7. Elementos Derecha: Atril, Cesta Picnic, Árbol y Cojín Corazón (derecha_items.png):
          - En PC/DESKTOP (>= md): SUBIDOS A md:bottom-[9%] h-[68vh] max-h-[600px]
          - En MÓVILES (< md): Intacto en bottom-[10%] */}
      <img
        src="/assets/derecha_items.png"
        alt="Elementos Derecha Charo Fest"
        className="absolute right-[0.5%] bottom-[10%] md:bottom-[9%] h-[26vh] md:h-[68vh] max-h-[260px] md:max-h-[600px] min-h-[130px] md:min-h-[180px] w-auto object-contain drop-shadow-md hover:scale-102 transition-transform z-25 opacity-90 md:opacity-100 pointer-events-none"
      />

    </header>
  );
}
