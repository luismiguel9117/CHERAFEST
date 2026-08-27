import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music, Volume2, VolumeX, ExternalLink, ChevronUp, ChevronDown, Disc } from 'lucide-react';

const TRACKS = [
  {
    id: 1,
    title: "Kawaii",
    artist: "LE SSERAFIM",
    album: "DIFFERENT",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60",
    spotifyId: "6pW047T10vY9N1c5g9vY0k", // Spotify Embed Track
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=kawaii-pop-112191.mp3"
  },
  {
    id: 2,
    title: "Dimple",
    artist: "BTS (방탄소년단)",
    album: "LOVE YOURSELF 承 'Her'",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60",
    spotifyId: "3m0Vv5J085dY95C70g2M4k",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a7350b.mp3?filename=kpop-vibe-10492.mp3"
  },
  {
    id: 3,
    title: "Strategy",
    artist: "TWICE (트와이스)",
    album: "STRATEGY",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=60",
    spotifyId: "5m09477Yd5c80v8Vv5C89k",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=kpop-upbeat-party-8490.mp3"
  }
];

const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/0RKRqgfTw92EQECobKKkfN?si=082457e6e77547d4";

export default function MusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef(null);

  const currentTrack = TRACKS[currentTrackIndex];

  // Reproducir o pausar
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => {
          console.log("Error al reproducir audio:", err);
        });
      }
    }
  };

  // Siguiente canción (en loop)
  const handleNext = () => {
    const nextIndex = (currentTrackIndex + 1) % TRACKS.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(true);
  };

  // Canción anterior (en loop)
  const handlePrev = () => {
    const prevIndex = (currentTrackIndex - 1 + TRACKS.length) % TRACKS.length;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(true);
  };

  // Seleccionar canción directa
  const handleSelectTrack = (index) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  // Cuando cambia la canción o se activa isPlaying
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [currentTrackIndex]);

  // Al finalizar una canción -> reproduce automáticamente la siguiente (Loop continuo)
  const handleEnded = () => {
    handleNext();
  };

  return (
    <div className="fixed bottom-4 left-4 z-[100] select-none font-quicksand">
      
      {/* Elemento de Audio Oculto */}
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        onEnded={handleEnded}
        muted={isMuted}
      />

      {/* TARJETA DESPLEGADA (REPRODUCTOR COMPLETO) */}
      {isExpanded ? (
        <div className="bg-white/95 backdrop-blur-md border-3 border-[#ffc0d8] rounded-3xl p-4 shadow-[0_10px_25px_rgba(239,127,174,0.35)] w-[300px] sm:w-[330px] animate-fadeIn relative">
          
          {/* Header del reproductor desplegado */}
          <div className="flex items-center justify-between mb-3 border-b border-[#ffe0ec] pb-2">
            <div className="flex items-center gap-2">
              <Disc className={`w-5 h-5 text-[#ef7fae] ${isPlaying ? 'animate-spin' : ''}`} />
              <span className="font-baloo font-extrabold text-sm text-[#b7407a]">CHARO FEST RADIO 🎀</span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-[#ef7fae] hover:bg-[#fff0f6] p-1 rounded-full transition-colors cursor-pointer"
              title="Minimizar reproductor"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Información del Track Actual */}
          <div className="flex items-center gap-3 mb-3 bg-[#fff0f6] p-2.5 rounded-2xl border border-[#ffd0e2]">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-xs relative flex-shrink-0">
              <img
                src={currentTrack.cover}
                alt={currentTrack.title}
                className="w-full h-full object-cover"
              />
              {isPlaying && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="w-2 h-2 bg-[#ef7fae] rounded-full animate-ping" />
                </div>
              )}
            </div>
            <div className="overflow-hidden text-left">
              <h4 className="font-baloo font-extrabold text-sm text-[#b7407a] truncate">
                {currentTrack.title}
              </h4>
              <p className="text-xs font-bold text-[#ef7fae] truncate">
                {currentTrack.artist}
              </p>
              <span className="text-[10px] text-[#b3789a] font-medium block truncate">
                {currentTrack.album}
              </span>
            </div>
          </div>

          {/* Selector de Canciones (Las 3 Opciones) */}
          <div className="flex flex-col gap-1.5 mb-3">
            <span className="text-[11px] font-bold text-[#b7407a] uppercase tracking-wider text-left">
              Canciones en Loop (3):
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              {TRACKS.map((track, idx) => (
                <button
                  key={track.id}
                  onClick={() => handleSelectTrack(idx)}
                  className={`py-1.5 px-2 rounded-xl font-baloo text-xs font-bold transition-all truncate cursor-pointer ${
                    currentTrackIndex === idx
                      ? 'bg-[#ef7fae] text-white shadow-xs scale-102'
                      : 'bg-white border border-[#ffd0e2] text-[#b7407a] hover:bg-[#fff0f6]'
                  }`}
                >
                  {track.title}
                </button>
              ))}
            </div>
          </div>

          {/* Controles Principales (Anterior, Play/Pause, Siguiente, Mute) */}
          <div className="flex items-center justify-between bg-[#fff0f6] px-4 py-2 rounded-2xl border border-[#ffd0e2] mb-3">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="text-[#ef7fae] hover:scale-110 transition-transform cursor-pointer"
              title={isMuted ? "Activar Sonido" : "Silenciar"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="text-[#b7407a] hover:text-[#ef7fae] hover:scale-110 transition-all cursor-pointer"
                title="Canción Anterior"
              >
                <SkipBack className="w-5 h-5 fill-[#b7407a]" />
              </button>

              <button
                onClick={togglePlay}
                className="w-10 h-10 bg-[#ef7fae] hover:bg-[#e0669a] text-white rounded-full flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                title={isPlaying ? "Pausar" : "Reproducir"}
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
              </button>

              <button
                onClick={handleNext}
                className="text-[#b7407a] hover:text-[#ef7fae] hover:scale-110 transition-all cursor-pointer"
                title="Siguiente Canción"
              >
                <SkipForward className="w-5 h-5 fill-[#b7407a]" />
              </button>
            </div>

            <div className="w-4" /> {/* Espaciador simétrico */}
          </div>

          {/* Botón para Playlist Completa en Spotify */}
          <a
            href={SPOTIFY_PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#1db954] hover:bg-[#1aa34a] text-white font-baloo font-extrabold text-xs py-2.5 px-3 rounded-2xl shadow-xs flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>Ver Playlist Completa en Spotify 🟢</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

        </div>
      ) : (
        /* BOTÓN FLOTANTE MINIMIZADO (PILL DE MÚSICA DE CHARO) */
        <div className="bg-white/95 backdrop-blur-md border-2 border-[#ffc0d8] rounded-full p-1.5 pr-4 shadow-[0_6px_16px_rgba(239,127,174,0.3)] flex items-center gap-2.5 hover:scale-105 transition-all cursor-pointer">
          
          <button
            onClick={togglePlay}
            className="w-9 h-9 bg-[#ef7fae] text-white rounded-full flex items-center justify-center shadow-xs cursor-pointer"
            title={isPlaying ? "Pausar" : "Reproducir"}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
          </button>

          <div
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Disc className={`w-4 h-4 text-[#ef7fae] ${isPlaying ? 'animate-spin' : ''}`} />
            <div className="text-left">
              <span className="font-baloo font-extrabold text-xs text-[#b7407a] block leading-tight">
                {currentTrack.title}
              </span>
              <span className="text-[10px] font-bold text-[#ef7fae] block leading-tight">
                {currentTrack.artist}
              </span>
            </div>
            <ChevronUp className="w-4 h-4 text-[#ef7fae] ml-1" />
          </div>

        </div>
      )}

    </div>
  );
}
