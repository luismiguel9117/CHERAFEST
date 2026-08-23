import React from 'react';
import { ExternalLink, Heart, Sparkles } from 'lucide-react';

export default function SpotifyFloatingPlayer() {
  const PLAYLIST_ID = '4oBZ0xkrOD4VFfquiR51p8';
  const PLAYLIST_URL = 'https://open.spotify.com/playlist/4oBZ0xkrOD4VFfquiR51p8?si=546c79253bc242ab';

  return (
    <aside className="fixed bottom-4 right-4 z-50 flex flex-col items-end animate-fadeIn">
      
      {/* Caja del Reproductor Oficial de Spotify PERMANENTEMENTE VISIBLE */}
      <div className="bg-white/95 backdrop-blur-md border-3 border-[#ffd0e2] rounded-3xl p-3 sm:p-3.5 shadow-[0_12px_32px_rgba(239,127,174,0.35)] w-78 sm:w-88">
        
        {/* Header del Reproductor */}
        <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-[#ffd6e6]">
          <div className="flex items-center gap-1.5 font-baloo font-bold text-xs text-[#ef7fae]">
            <Sparkles className="w-3.5 h-3.5 text-[#f78ab6]" />
            <span>PLAYLIST OFICIAL CHARO FEST</span>
            <Heart className="w-3.5 h-3.5 fill-[#ef7fae]" />
          </div>

          <span className="text-[10px] font-bold bg-[#1DB954] text-white px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
            <span>Spotify Real</span>
          </span>
        </div>

        {/* Reproductor Embebido Oficial de Spotify (100% Canciones Reales de la Playlist) */}
        <div className="rounded-2xl overflow-hidden border-2 border-[#ffd0e2] shadow-xs bg-[#121212]">
          <iframe
            src={`https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator&theme=0`}
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="eager"
            title="Playlist Oficial Charo Fest 2026 en Spotify"
            className="w-full rounded-2xl"
          />
        </div>

        {/* Enlace directo a la App de Spotify */}
        <div className="mt-2.5 text-center">
          <a
            href={PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#1DB954] hover:underline bg-[#eefbf3] border border-[#a3e5bb] px-3.5 py-1.5 rounded-full transition-colors"
          >
            <span>💚 Escuchar completa en Spotify App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

    </aside>
  );
}
