import React, { useState, useRef } from 'react';
import { Heart, Music, Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function Footer() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlayingAudio) {
        audioRef.current.pause();
        setIsPlayingAudio(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlayingAudio(true);
        }).catch(err => {
          console.log("Error al reproducir audio:", err);
        });
      }
    }
  };

  return (
    <footer className="relative bg-white border-t-3 border-[#ffd0e2] pt-12 pb-16 px-4 sm:px-6 text-center overflow-hidden">
      
      {/* Audio Element ambient */}
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=kawaii-cute-sweet-chill-114402.mp3"
      />

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Cute Quote Container */}
        <div className="bg-[#fff0f6] border-2 border-[#ffd0e2] rounded-3xl p-6 shadow-sm mb-8 relative">
          <div className="text-4xl mb-2">🐰🎀💖</div>
          <p className="font-baloo font-bold text-base sm:text-lg text-[#d4699b] max-w-lg mx-auto leading-relaxed">
            Gracias por ser parte de esta magia. <br />
            Que cada día de este Charo Fest se convierta en un recuerdo inolvidable. ♥
          </p>
        </div>

        {/* Footer Brand */}
        <div className="font-baloo font-extrabold text-2xl text-[#ef7fae] mb-2 flex items-center justify-center gap-2">
          <span>🎀</span>
          <span>Charo Fest 2026</span>
          <span>🎀</span>
        </div>

        <p className="text-xs font-semibold text-[#a05a80]">
          Hecho con mucho rosa ♥ para Rosario "Charo" Cachat
        </p>

        {/* Spotify Shortcut Footer */}
        <div className="mt-6 inline-flex items-center gap-3 bg-[#fff0f6] border border-[#ffd0e2] rounded-full px-5 py-2">
          <Music className="w-4 h-4 text-[#ef7fae]" />
          <span className="font-baloo font-bold text-xs text-[#7a4a63]">
            Playlist oficial del Charo Fest 2026
          </span>
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-[#ef7fae] hover:underline"
          >
            Escúchala en Spotify ♥
          </a>
        </div>

      </div>

      {/* Floating Music Player Toggle in Bottom Corner */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={toggleMusic}
          className="font-baloo font-bold text-xs text-[#b7407a] bg-white border-2 border-[#ffc0d8] rounded-full px-4 py-2 shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
        >
          {isPlayingAudio ? (
            <>
              <Volume2 className="w-4 h-4 text-[#ef7fae] animate-bounce" />
              <span>Pausar Música 🎵</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-[#ef7fae]" />
              <span>Música Kawaii 🎶</span>
            </>
          )}
        </button>
      </div>

    </footer>
  );
}
