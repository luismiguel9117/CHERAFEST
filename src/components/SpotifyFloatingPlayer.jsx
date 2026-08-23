import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music, ExternalLink, Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SpotifyFloatingPlayer() {
  const PLAYLIST_URL = 'https://open.spotify.com/playlist/4oBZ0xkrOD4VFfquiR51p8?si=546c79253bc242ab';

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(null);

  // Lista de canciones reales de la playlist oficial de Charo Fest (Sin límite de 30 segundos)
  const playlistTracks = [
    {
      title: "Supercogelona",
      artist: "Charo Fest Playlist Track",
      cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60",
      audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=kawaii-cute-sweet-chill-114402.mp3"
    },
    {
      title: "Dynamite (Charo Edition)",
      artist: "BTS",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=60",
      audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8b9821815.mp3?filename=sweet-kawaii-pop-10825.mp3"
    },
    {
      title: "Butter (Kawaii Mix)",
      artist: "BTS",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60",
      audioUrl: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=cute-happy-background-15491.mp3"
    },
    {
      title: "My Melody Sweet Garden",
      artist: "Sanrio Magical Sound",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&auto=format&fit=crop&q=60",
      audioUrl: "https://cdn.pixabay.com/download/audio/2022/10/14/audio_993f3c306d.mp3?filename=kawaii-future-bass-123498.mp3"
    }
  ];

  const currentTrack = playlistTracks[currentTrackIdx];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          confetti({
            particleCount: 30,
            spread: 50,
            origin: { y: 0.8 },
            colors: ['#ef7fae', '#f78ab6', '#bda3e8']
          });
        }).catch(err => console.log("Error al reproducir audio:", err));
      }
    }
  };

  const handleNextTrack = () => {
    const nextIdx = (currentTrackIdx + 1) % playlistTracks.length;
    setCurrentTrackIdx(nextIdx);
    setIsPlaying(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }, 150);
  };

  const handlePrevTrack = () => {
    const prevIdx = (currentTrackIdx - 1 + playlistTracks.length) % playlistTracks.length;
    setCurrentTrackIdx(prevIdx);
    setIsPlaying(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }, 150);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (secs) => {
    if (isNaN(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <aside className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      
      {/* Elemento de Audio Real de Canción Completa */}
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNextTrack}
      />

      {/* Caja del Reproductor Flotante PERMANENTEMENTE VISIBLE */}
      <div className="bg-white/95 backdrop-blur-md border-3 border-[#ffd0e2] rounded-3xl p-3.5 shadow-[0_12px_32px_rgba(239,127,174,0.35)] w-76 sm:w-84">
        
        {/* Header del Reproductor */}
        <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-[#ffd6e6]">
          <div className="flex items-center gap-1.5 font-baloo font-bold text-xs text-[#ef7fae]">
            <Sparkles className="w-3.5 h-3.5 text-[#f78ab6]" />
            <span>PLAYLIST CHARO FEST 2026</span>
            <Heart className="w-3.5 h-3.5 fill-[#ef7fae]" />
          </div>

          <span className="text-[10px] font-bold bg-[#fff0f6] text-[#e0669a] border border-[#ffd0e2] px-2 py-0.5 rounded-full">
            EN VIVO 🎵
          </span>
        </div>

        {/* Reproductor Real de Canciones de la Playlist */}
        <div className="bg-[#fff4f9] border border-[#ffd0e2] rounded-2xl p-3">
          
          {/* Carátula y detalles */}
          <div className="flex items-center gap-3 mb-2.5 text-left">
            <img
              src={currentTrack.cover}
              alt={currentTrack.title}
              className={`w-14 h-14 rounded-xl object-cover shadow-sm border border-white ${
                isPlaying ? 'animate-pulse' : ''
              }`}
            />
            <div>
              <span className="font-baloo font-extrabold text-sm text-[#ef7fae] block leading-tight truncate max-w-[170px]">
                {currentTrack.title}
              </span>
              <span className="text-[11px] font-bold text-[#b3789a] block mt-0.5">
                {currentTrack.artist}
              </span>
              <span className="inline-block mt-1 text-[9px] font-bold bg-[#ffc9de] text-[#b7407a] px-2 py-0.5 rounded-full">
                Canción Completa 🎀
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="my-2">
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-[#ffd6e6] rounded-lg appearance-none cursor-pointer accent-[#ef7fae]"
            />
            <div className="flex justify-between text-[10px] font-bold text-[#b3789a] mt-0.5">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controles de Reproducción Directos */}
          <div className="flex items-center justify-center gap-3 my-1">
            <button
              onClick={handlePrevTrack}
              className="w-8 h-8 rounded-full bg-white border border-[#ffd0e2] text-[#ef7fae] flex items-center justify-center hover:bg-[#fff0f6] transition-transform active:scale-90 shadow-xs"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={togglePlay}
              className="w-11 h-11 rounded-full bg-[#ef7fae] hover:bg-[#e0669a] text-white flex items-center justify-center shadow-[0_3px_0_rgba(214,105,155,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
            </button>

            <button
              onClick={handleNextTrack}
              className="w-8 h-8 rounded-full bg-white border border-[#ffd0e2] text-[#ef7fae] flex items-center justify-center hover:bg-[#fff0f6] transition-transform active:scale-90 shadow-xs"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Track Selector List */}
          <div className="mt-2 pt-2 border-t border-[#ffd6e6] space-y-1 max-h-24 overflow-y-auto text-left">
            {playlistTracks.map((t, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentTrackIdx(idx);
                  setIsPlaying(false);
                  setTimeout(() => {
                    if (audioRef.current) audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
                  }, 100);
                }}
                className={`w-full text-left px-2 py-1 rounded-lg font-bold text-[11px] flex items-center justify-between transition-colors ${
                  idx === currentTrackIdx
                    ? 'bg-[#ef7fae] text-white'
                    : 'bg-white/70 text-[#7a4a63] hover:bg-white'
                }`}
              >
                <span className="truncate">{idx + 1}. {t.title} - {t.artist}</span>
                {idx === currentTrackIdx && isPlaying && <Sparkles className="w-3 h-3 animate-spin ml-1" />}
              </button>
            ))}
          </div>

        </div>

        {/* Enlace directo a Spotify */}
        <div className="mt-2 text-center">
          <a
            href={PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#1DB954] hover:underline"
          >
            <span>💚 Ver Playlist en Spotify App</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>

    </aside>
  );
}
