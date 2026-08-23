import React, { useState } from 'react';
import { Music, ChevronDown, ChevronUp, ExternalLink, Heart, Sparkles } from 'lucide-react';

export default function SpotifyFloatingPlayer() {
  const [isExpanded, setIsExpanded] = useState(true);
  const PLAYLIST_ID = '4oBZ0xkrOD4VFfquiR51p8';
  const PLAYLIST_URL = 'https://open.spotify.com/playlist/4oBZ0xkrOD4VFfquiR51p8?si=546c79253bc242ab';

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      
      {/* Caja del Reproductor de Spotify Flotante (cuando está expandido) */}
      {isExpanded && (
        <div className="mb-2 bg-white/95 backdrop-blur-md border-3 border-[#ffd0e2] rounded-3xl p-3.5 shadow-[0_12px_32px_rgba(239,127,174,0.35)] w-80 sm:w-88 animate-popIn">
          
          {/* Header del Reproductor Flotante */}
          <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-[#ffd6e6]">
            <div className="flex items-center gap-1.5 font-baloo font-bold text-xs text-[#ef7fae]">
              <span className="text-sm">🎧</span>
              <span>Playlist Charo Fest 2026</span>
              <Heart className="w-3.5 h-3.5 fill-[#ef7fae]" />
            </div>

            <button
              onClick={() => setIsExpanded(false)}
              className="w-7 h-7 rounded-full bg-[#fff0f6] border border-[#ffd0e2] text-[#ef7fae] flex items-center justify-center hover:bg-[#ffe0ec] transition-colors"
              title="Minimizar reproductor"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Embed oficial de Spotify de la Playlist de Charo Fest */}
          <div className="rounded-2xl overflow-hidden shadow-xs border border-[#ffd0e2] bg-[#121212]">
            <iframe
              src={`https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Playlist Oficial Charo Fest 2026"
              className="w-full"
            />
          </div>

          {/* Enlace directo a Spotify */}
          <div className="mt-2.5 text-center">
            <a
              href={PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1DB954] hover:underline"
            >
              <span>Abrir en la App de Spotify</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>
      )}

      {/* Botón Flotante para Abrir / Minimizar el Reproductor */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="font-baloo font-bold text-xs sm:text-sm text-white bg-[#ef7fae] hover:bg-[#e0669a] border-2 border-white rounded-full px-5 py-2.5 shadow-[0_6px_16px_rgba(214,105,155,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
        >
          <Music className="w-4 h-4 animate-bounce" />
          <span>Playlist Charo Fest 🎀</span>
          <ChevronUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}
