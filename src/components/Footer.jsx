import React from 'react';
import { Heart, Instagram, Music, Radio } from 'lucide-react';

export default function Footer() {
  const PLAYLIST_URL = 'https://open.spotify.com/playlist/4oBZ0xkrOD4VFfquiR51p8?si=546c79253bc242ab';

  return (
    <footer className="w-full bg-[#fff2f6] border-t-2 border-[#ffd0e2] select-none">
      
      {/* BANNER SUPERIOR CON MY MELODY Y RATITA FLAT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 relative flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
        
        {/* Mascot My Melody Izquierda (footer melody.png) */}
        <div className="flex-shrink-0 z-10">
          <img
            src="/assets/footer melody.png"
            alt="My Melody Mascot"
            className="h-40 sm:h-48 md:h-56 object-contain drop-shadow-md hover:scale-105 transition-transform"
          />
        </div>

        {/* Card Mensaje Central de Agradecimiento */}
        <div className="bg-[#fff6f9] border-2 border-[#ffd0e2] rounded-3xl p-6 sm:p-8 text-center max-w-xl shadow-[0_8px_24px_rgba(239,127,174,0.12)] z-10 flex-1">
          <h3 className="font-baloo font-extrabold text-lg sm:text-xl text-[#ef7fae] mb-2">
            Gracias por ser parte de esta magia.
          </h3>
          <p className="font-quicksand font-bold text-xs sm:text-sm text-[#7a4a63] leading-relaxed">
            Que cada día de este Charo Fest se convierta en un recuerdo inolvidable.
          </p>
          <div className="mt-3 flex items-center justify-center">
            <Heart className="w-4 h-4 text-[#ef7fae] fill-[#ef7fae] animate-bounce" />
          </div>
        </div>

        {/* Mascot Ratita Flat Derecha (rata.png) */}
        <div className="flex-shrink-0 z-10">
          <img
            src="/assets/rata.png"
            alt="Flat Mouse Balloon"
            className="h-28 sm:h-36 object-contain drop-shadow-md hover:scale-105 transition-transform"
          />
        </div>

      </div>

      {/* Borde de Encaje Scalloped Divider */}
      <div className="lace-border-bottom" />

      {/* PIE DE PÁGINA INFERIOR */}
      <div className="bg-[#fff0f6] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna 1: Logo & Créditos */}
          <div className="lg:col-span-4 flex flex-col items-start gap-3">
            <img
              src="/assets/header_logo.png"
              alt="My Melody Logo"
              className="h-10 object-contain drop-shadow-xs"
            />
            <p className="font-baloo font-bold text-xs text-[#e0669a] flex items-center gap-1">
              <span>Hecho con</span>
              <Heart className="w-3.5 h-3.5 fill-[#ef7fae] text-[#ef7fae]" />
              <span>para Charo</span>
            </p>
          </div>

          {/* Columna 2: Navega */}
          <div className="lg:col-span-2">
            <h4 className="font-baloo font-extrabold text-xs uppercase text-[#ef7fae] tracking-wider mb-3">
              NAVEGA
            </h4>
            <ul className="space-y-1.5 font-quicksand font-bold text-xs text-[#7a4a63]">
              <li><a href="#top" className="hover:text-[#ef7fae] transition-colors">Inicio</a></li>
              <li><a href="#calendario" className="hover:text-[#ef7fae] transition-colors">Calendario</a></li>
              <li><a href="#wishlist" className="hover:text-[#ef7fae] transition-colors">Wishlist</a></li>
              <li><a href="#calendario" className="hover:text-[#ef7fae] transition-colors">Retos</a></li>
            </ul>
          </div>

          {/* Columna 3: Explora */}
          <div className="lg:col-span-2">
            <h4 className="font-baloo font-extrabold text-xs uppercase text-[#ef7fae] tracking-wider mb-3">
              EXPLORA
            </h4>
            <ul className="space-y-1.5 font-quicksand font-bold text-xs text-[#7a4a63]">
              <li><a href="#calendario" className="hover:text-[#ef7fae] transition-colors">Eventos</a></li>
              <li><a href="#galeria" className="hover:text-[#ef7fae] transition-colors">Galería</a></li>
              <li><a href="#top" className="hover:text-[#ef7fae] transition-colors">Info</a></li>
              <li><a href="#calendario" className="hover:text-[#ef7fae] transition-colors">Charo Day</a></li>
            </ul>
          </div>

          {/* Columna 4: Síguenos & Redes */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div>
              <h4 className="font-baloo font-extrabold text-xs uppercase text-[#ef7fae] tracking-wider mb-3">
                SÍGUENOS
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white border border-[#ffd0e2] text-[#ef7fae] flex items-center justify-center hover:bg-[#fff0f6] transition-colors shadow-xs"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white border border-[#ffd0e2] text-[#ef7fae] flex items-center justify-center hover:bg-[#fff0f6] transition-colors shadow-xs"
                  title="TikTok"
                >
                  <Music className="w-4 h-4" />
                </a>
                <a
                  href={PLAYLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white border border-[#ffd0e2] text-[#ef7fae] flex items-center justify-center hover:bg-[#fff0f6] transition-colors shadow-xs"
                  title="Spotify"
                >
                  <Radio className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Caja de Playlist Oficial de Spotify en el Footer */}
            <a
              href={PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fff6f9] border-2 border-[#ffd0e2] hover:border-[#ef7fae] rounded-2xl p-3 flex items-center gap-3 transition-all hover:scale-102 shadow-xs group"
            >
              <div className="w-10 h-10 rounded-full bg-[#ffe0ec] text-[#ef7fae] flex items-center justify-center flex-shrink-0 group-hover:bg-[#ef7fae] group-hover:text-white transition-colors">
                <Radio className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="font-baloo font-extrabold text-xs text-[#ef7fae] block">
                  Playlist oficial del Charo Fest 2026
                </span>
                <span className="text-[11px] font-bold text-[#b3789a] block">
                  Escúchala en Spotify ♥
                </span>
              </div>
            </a>

          </div>

        </div>
      </div>

    </footer>
  );
}
