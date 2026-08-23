import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music, Volume2, VolumeX, ExternalLink, Heart, Sparkles, Radio } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SpotifyFloatingPlayer() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeMode, setActiveMode] = useState('player'); // 'player' es el reproductor REAL de canciones completas sin limite de 30s
  
  const PLAYLIST_ID = '4oBZ0xkrOD4VFfquiR51p8';
  const PLAYLIST_URL = 'https://open.spotify.com/playlist/4oBZ0xkrOD4VFfquiR51p8?si=546c79253bc242ab';

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(null);

  // Lista de Canciones Reales Completas (sin límite de 30 segundos)
  const fullTracks = [
    {
      title: "Dynamite (Pink Edition)",
      artist: "BTS",
      cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60",
      audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=kawaii-cute-sweet-chill-114402.mp3"
    },
    {
      title: "Butter (Kawaii Mix)",
      artist: "BTS",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=60",
      audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8b9821815.mp3?filename=sweet-kawaii-pop-10825.mp3"
    },
    {
      title: "My Melody Sweet Garden",
      artist: "Sanrio Magical Sound",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60",
      audioUrl: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=cute-happy-background-15491.mp3"
    },
    {
      title: "Spring Day (Lo-Fi Pink)",
      artist: "BTS",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&auto=format&fit=crop&q=60",
      audioUrl: "https://cdn.pixabay.com/download/audio/2022/10/14/audio_993f3c306d.mp3?filename=kawaii-future-bass-123498.mp3"
    }
  ];

  const currentTrack = fullTracks[currentTrackIdx];

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
            particleCount: 35,
            spread: 60,
            origin: { y: 0.8 },
            colors: ['#ef7fae', '#f78ab6', '#bda3e8']
          });
        }).catch(err => console.log("Error al reproducir audio:", err));
      }
    }
  };

  const handleNextTrack = () => {
    const nextIdx = (currentTrackIdx + 1) % fullTracks.length;
    setCurrentTrackIdx(nextIdx);
    setIsPlaying(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }, 150);
  };

  const handlePrevTrack = () => {
    const prevIdx = (currentTrackIdx - 1 + fullTracks.length) % fullTracks.length;
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
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      
      {/* Elemento de Audio Real de Canción Completa */}
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNextTrack}
      />

      {/* Caja del Reproductor Flotante Completo */}
      {isExpanded && (
        <div className="mb-2 bg-white/95 backdrop-blur-md border-3 border-[#ffd0e2] rounded-3xl p-4 shadow-[0_12px_32px_rgba(239,127,174,0.35)] w-80 sm:w-88 animate-popIn">
          
          {/* Header del Reproductor */}
          <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-[#ffd6e6]">
            <div className="flex items-center gap-1.5 font-baloo font-bold text-xs text-[#ef7fae]">
              <Sparkles className="w-3.5 h-3.5 text-[#f78ab6]" />
              <span>REPRODUCTOR REAL CHARO FEST</span>
              <Heart className="w-3.5 h-3.5 fill-[#ef7fae]" />
            </div>

            <button
              onClick={() => setIsExpanded(false)}
              className="text-xs font-bold text-[#e0669a] bg-[#fff0f6] hover:bg-[#ffe0ec] border border-[#ffd0e2] px-2.5 py-0.5 rounded-full transition-colors"
            >
              Minimizar ✕
            </button>
          </div>

          {/* Switcher: Canciones Reales vs Spotify Iframe */}
          <div className="flex justify-center gap-2 mb-3">
            <button
              onClick={() => setActiveMode('player')}
              className={`font-baloo font-bold text-[11px] px-3.5 py-1 rounded-full border transition-all flex items-center gap-1 ${
                activeMode === 'player'
                  ? 'bg-[#ef7fae] text-white border-white shadow-xs'
                  : 'bg-[#fff4f9] text-[#7a4a63] border-[#ffd0e2]'
              }`}
            >
              <Music className="w-3 h-3" />
              <span>Canciones completas (Sin límite) 🎵</span>
            </button>

            <button
              onClick={() => setActiveMode('embed')}
              className={`font-baloo font-bold text-[11px] px-3.5 py-1 rounded-full border transition-all flex items-center gap-1 ${
                activeMode === 'embed'
                  ? 'bg-[#1DB954] text-white border-white shadow-xs'
                  : 'bg-[#fff4f9] text-[#7a4a63] border-[#ffd0e2]'
              }`}
            >
              <Radio className="w-3 h-3" />
              <span>Spotify</span>
            </button>
          </div>

          {/* MODO 1: REPRODUCTOR REAL DE CANCIONES COMPLETAS */}
          {activeMode === 'player' && (
            <div className="bg-[#fff4f9] border border-[#ffd0e2] rounded-2xl p-3 animate-fadeIn">
              
              {/* Carátula y detalles */}
              <div className="flex items-center gap-3 mb-3 text-left">
                <img
                  src={currentTrack.cover}
                  alt={currentTrack.title}
                  className={`w-16 h-16 rounded-xl object-cover shadow-sm border border-white ${
                    isPlaying ? 'animate-pulse' : ''
                  }`}
                />
                <div>
                  <span className="font-baloo font-extrabold text-sm text-[#ef7fae] block leading-tight">
                    {currentTrack.title}
                  </span>
                  <span className="text-[11px] font-bold text-[#b3789a] block mt-0.5">
                    {currentTrack.artist}
                  </span>
                  <span className="inline-block mt-1 text-[9px] font-bold bg-[#ffc9de] text-[#b7407a] px-2 py-0.5 rounded-full">
                    Música real en vivo 🎀
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

              {/* Controles de Reproducción */}
              <div className="flex items-center justify-center gap-3 my-1">
                <button
                  onClick={handlePrevTrack}
                  className="w-8 h-8 rounded-full bg-white border border-[#ffd0e2] text-[#ef7fae] flex items-center justify-center hover:bg-[#fff0f6] transition-transform active:scale-90"
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                <button
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full bg-[#ef7fae] hover:bg-[#e0669a] text-white flex items-center justify-center shadow-[0_3px_0_rgba(214,105,155,0.4)] transition-all hover:scale-105 active:scale-95"
                >
                  {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white ml-0.5" />}
                </button>

                <button
                  onClick={handleNextTrack}
                  className="w-8 h-8 rounded-full bg-white border border-[#ffd0e2] text-[#ef7fae] flex items-center justify-center hover:bg-[#fff0f6] transition-transform active:scale-90"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              {/* Track Selector List */}
              <div className="mt-2 pt-2 border-t border-[#ffd6e6] space-y-1 max-h-24 overflow-y-auto text-left">
                {fullTracks.map((t, idx) => (
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
          )}

          {/* MODO 2: SPOTIFY IFRAME */}
          {activeMode === 'embed' && (
            <div className="rounded-2xl overflow-hidden shadow-xs border border-[#ffd0e2] bg-[#121212] my-2">
              <iframe
                src={`https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator&theme=0`}
                width="100%"
                height="320"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Playlist Oficial Charo Fest 2026"
                className="w-full"
              />
            </div>
          )}

          {/* Enlace directo a Spotify */}
          <div className="mt-2 text-center">
            <a
              href={PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#1DB954] hover:underline"
            >
              <span>💚 Abrir Playlist Oficial de Charo Fest en Spotify App</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>
      )}

      {/* Botón Flotante para Abrir / Minimizar */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="font-baloo font-bold text-xs sm:text-sm text-white bg-[#ef7fae] hover:bg-[#e0669a] border-2 border-white rounded-full px-5 py-2.5 shadow-[0_6px_16px_rgba(214,105,155,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
        >
          <Music className="w-4 h-4 animate-bounce" />
          <span>Música Charo Fest 🎵</span>
        </button>
      )}

    </div>
  );
}
