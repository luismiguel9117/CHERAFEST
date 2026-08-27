import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  const PLAYLIST_URL = 'https://open.spotify.com/playlist/0RKRqgfTw92EQECobKKkfN?si=082457e6e77547d4';

  return (
    <footer className="w-full relative select-none overflow-hidden bg-[#fff2f6]">
      
      {/* SECCIÓN PRINCIPAL CON IMAGEN DE FONDO REAL (footer_bg.png) */}
      <div className="relative w-full min-h-[380px] sm:min-h-[440px] md:min-h-[480px] flex items-center justify-center">
        
        {/* Fondo footer_bg.png con object-cover mantenido en su aspecto nativo */}
        <img
          src="/assets/footer_bg.png"
          alt="Fondo Footer My Melody"
          className="absolute inset-0 w-full h-full object-cover object-top z-0 pointer-events-none"
        />

        {/* CONTENIDO CENTRADO Y DESPLAZADO HACIA ABAJO (pt-16 md:pt-24) PARA NO TOCAR LA CENEFA SUPERIOR DE LAZOS */}
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-8 pt-16 sm:pt-20 md:pt-24 pb-8 relative flex flex-col md:flex-row items-center justify-between gap-6 z-10">
          
          {/* Mascot My Melody Izquierda (footer melody.png) - BAJADO Y CENTRADO */}
          <div className="flex-shrink-0">
            <img
              src="/assets/footer melody.png"
              alt="My Melody Mascot"
              className="h-32 sm:h-44 md:h-52 object-contain drop-shadow-md hover:scale-105 transition-transform"
            />
          </div>

          {/* Card Mensaje Central de Agradecimiento - BAJADO SUTILMENTE SIN TOCAR LOS LAZOS */}
          <div className="bg-white/95 backdrop-blur-md border-3 border-[#ffd0e2] rounded-3xl p-6 sm:p-8 text-center max-w-md sm:max-w-lg shadow-[0_8px_24px_rgba(239,127,174,0.25)]">
            <h3 className="font-baloo font-extrabold text-lg sm:text-xl md:text-2xl text-[#ef7fae] mb-2">
              Gracias por ser parte de esta magia.
            </h3>
            <p className="font-quicksand font-bold text-xs sm:text-sm text-[#7a4a63] leading-relaxed">
              Que cada día de este Charo Fest se convierta en un recuerdo inolvidable.
            </p>
            <div className="mt-3 flex items-center justify-center">
              <Heart className="w-4 h-4 text-[#ef7fae] fill-[#ef7fae] animate-bounce" />
            </div>
          </div>

          {/* Mascot Ratita Flat Derecha (rata.png) - BAJADO Y CENTRADO */}
          <div className="flex-shrink-0">
            <img
              src="/assets/rata.png"
              alt="Flat Mouse Balloon"
              className="h-24 sm:h-32 md:h-38 object-contain drop-shadow-md hover:scale-105 transition-transform"
            />
          </div>

        </div>
      </div>

      {/* PIE DE PÁGINA INFERIOR CON ENLACES Y CRÉDITOS */}
      <div className="py-8 bg-[#ffe4ee] border-t border-[#ffd0e2] relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 items-start text-left">
          
          {/* Columna 1: Logo & Créditos */}
          <div className="lg:col-span-4 flex flex-col items-start gap-2">
            <img
              src="/assets/header_logo.png"
              alt="My Melody Logo"
              className="h-9 object-contain drop-shadow-xs"
            />
            <p className="font-baloo font-bold text-xs text-[#e0669a] flex items-center gap-1">
              <span>Hecho con</span>
              <Heart className="w-3.5 h-3.5 fill-[#ef7fae] text-[#ef7fae]" />
              <span>para Charo Fest 2026</span>
            </p>
          </div>

          {/* Columna 2: Navega */}
          <div className="lg:col-span-2">
            <h4 className="font-baloo font-extrabold text-xs uppercase text-[#ef7fae] tracking-wider mb-2">
              NAVEGA
            </h4>
            <ul className="space-y-1 font-quicksand font-bold text-xs text-[#7a4a63]">
              <li><a href="#top" className="hover:text-[#ef7fae] transition-colors">Inicio</a></li>
              <li><a href="#calendario" className="hover:text-[#ef7fae] transition-colors">Calendario</a></li>
              <li><a href="#wishlist" className="hover:text-[#ef7fae] transition-colors">Wishlist</a></li>
              <li><a href="#calendario" className="hover:text-[#ef7fae] transition-colors">Retos</a></li>
            </ul>
          </div>

          {/* Columna 3: Explora */}
          <div className="lg:col-span-2">
            <h4 className="font-baloo font-extrabold text-xs uppercase text-[#ef7fae] tracking-wider mb-2">
              EXPLORA
            </h4>
            <ul className="space-y-1 font-quicksand font-bold text-xs text-[#7a4a63]">
              <li><a href="#calendario" className="hover:text-[#ef7fae] transition-colors">Eventos</a></li>
              <li><a href="#galeria" className="hover:text-[#ef7fae] transition-colors">Galería</a></li>
              <li><a href="#top" className="hover:text-[#ef7fae] transition-colors">Info</a></li>
              <li><a href="#calendario" className="hover:text-[#ef7fae] transition-colors">Charo Day</a></li>
            </ul>
          </div>

          {/* Columna 4: Síguenos & Playlist */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div>
              <h4 className="font-baloo font-extrabold text-xs uppercase text-[#ef7fae] tracking-wider mb-2">
                SPOTIFY PLAYLIST
              </h4>
              <a
                href={PLAYLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1db954] hover:bg-[#1aa34a] text-white font-baloo font-bold text-xs px-4 py-2 rounded-full shadow-xs transition-all hover:scale-105 cursor-pointer"
              >
                <span>Playlist Oficial del Charo Fest 🟢</span>
              </a>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
