import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music, Volume2, VolumeX, ExternalLink, ChevronUp, ChevronDown, Disc, Radio } from 'lucide-react';

const TRACKS = [
  {
    id: 1,
    title: "Kawaii",
    artist: "LE SSERAFIM",
    album: "DIFFERENT",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/6pW047T10vY9N1c5g9vY0k?utm_source=generator&theme=0",
    spotifyTrackUrl: "https://open.spotify.com/track/6pW047T10vY9N1c5g9vY0k",
    audioUrl: "https://files.catbox.moe/k3h5q4.mp3" // Stream audio para Kawaii
  },
  {
    id: 2,
    title: "Dimple (보조개)",
    artist: "BTS (방탄소년단)",
    album: "LOVE YOURSELF 承 'Her'",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/3m0Vv5J085dY95C70g2M4k?utm_source=generator&theme=0",
    spotifyTrackUrl: "https://open.spotify.com/track/3m0Vv5J085dY95C70g2M4k",
    audioUrl: "https://files.catbox.moe/97a5b3.mp3" // Stream audio para Dimple
  },
  {
    id: 3,
    title: "Strategy",
    artist: "TWICE (트와이스)",
    album: "STRATEGY - 14th Mini Album",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=60",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/5m09477Yd5c80v8Vv5C89k?utm_source=generator&theme=0",
    spotifyTrackUrl: "https://open.spotify.com/track/5m09477Yd5c80v8Vv5C89k",
    audioUrl: "https://files.catbox.moe/m8x2v1.mp3" // Stream audio para Strategy
  }
];

const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/0RKRqgfTw92EQECobKKkfN?si=082457e6e77547d4";

export default function MusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [playerMode, setPlayerMode] = useState('embed'); // 'embed' | 'compact'
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

  // Cuando cambia la canción
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(() => {});
    }
  }, [currentTrackIndex]);

  // Al finalizar una canción -> reproduce automáticamente la siguiente (Loop continuo)
  const handleEnded = () => {
    handleNext();
  };

  return (
    <div className="fixed bottom-4 left-4 z-[100] select-none font-quicksand">
      
      {/* Elemento de Audio Oculto para fallback de stream continuo */}
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        onEnded={handleEnded}
        muted={isMuted}
      />

      {/* TARJETA DESPLEGADA (REPRODUCTOR COMPLETO DE SPOTIFY & K-POP) */}
      {isExpanded ? (
        <div className="bg-white/95 backdrop-blur-md border-3 border-[#ffc0d8] rounded-3xl p-4 shadow-[0_12px_30px_rgba(239,127,174,0.4)] w-[310px] sm:w-[350px] animate-fadeIn relative text-left">
          
          {/* Header del reproductor desplegado */}
          <div className="flex items-center justify-between mb-3 border-b border-[#ffe0ec] pb-2">
            <div className="flex items-center gap-2">
              <Disc className={`w-5 h-5 text-[#ef7fae] ${isPlaying ? 'animate-spin' : ''}`} />
              <span className="font-baloo font-extrabold text-sm text-[#b7407a]">RADIO CHARO FEST 🎀</span>
            </div>
            
            <div className="flex items-center gap-1">
              <button
                onClick={() => setPlayerMode(playerMode === 'embed' ? 'compact' : 'embed')}
                className="text-[11px] font-extrabold text-[#ef7fae] bg-[#fff0f6] border border-[#ffd0e2] px-2 py-0.5 rounded-full hover:bg-white transition-colors"
                title="Cambiar modo de reproductor"
              >
                {playerMode === 'embed' ? 'Modo Mini' : 'Modo Spotify'}
              </button>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-[#ef7fae] hover:bg-[#fff0f6] p-1 rounded-full transition-colors cursor-pointer"
                title="Minimizar reproductor"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* MODO SPOTIFY EMBED (Reproductor Oficial de Spotify) */}
          {playerMode === 'embed' ? (
            <div className="mb-3 rounded-2xl overflow-hidden shadow-xs border border-[#ffd0e2] bg-[#fff0f6]">
              <iframe
                src={currentTrack.spotifyEmbedUrl}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`Spotify Player - ${currentTrack.title}`}
                className="rounded-2xl"
              />
            </div>
          ) : (
            /* MODO COMPACTO INTERNO */
            <div className="flex items-center gap-3 mb-3 bg-[#fff0f6] p-2.5 rounded-2xl border border-[#ffd0e2]">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-xs relative flex-shrink-0 bg-[#ffd0e2]">
                <img
                  src={currentTrack.cover}
                  alt={currentTrack.title}
                  className="w-full h-full object-cover"
                />
                {isPlaying && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="w-2.5 h-2.5 bg-[#ef7fae] rounded-full animate-ping" />
                  </div>
                )}
              </div>
              <div className="overflow-hidden">
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
          )}

          {/* Selector de Canciones Oficiales (Las 3 Pedidas por Charo) */}
          <div className="flex flex-col gap-1.5 mb-3">
            <span className="text-[11px] font-bold text-[#b7407a] uppercase tracking-wider">
              Canciones en Loop (3):
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              {TRACKS.map((track, idx) => (
                <button
                  key={track.id}
                  onClick={() => handleSelectTrack(idx)}
                  className={`py-1.5 px-2 rounded-xl font-baloo text-xs font-bold transition-all truncate cursor-pointer ${
                    currentTrackIndex === idx
                      ? 'bg-[#ef7fae] text-white shadow-xs scale-102 border border-white'
                      : 'bg-white border border-[#ffd0e2] text-[#b7407a] hover:bg-[#fff0f6]'
                  }`}
                >
                  {track.title}
                </button>
              ))}
            </div>
          </div>

          {/* Controles de Reproducción en Modo Compacto */}
          {playerMode === 'compact' && (
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

              <div className="w-4" />
            </div>
          )}

          {/* Botón Principal para Playlist Completa de Spotify */}
          <a
            href={SPOTIFY_PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#1db954] hover:bg-[#1aa34a] text-white font-baloo font-extrabold text-xs py-2.5 px-3 rounded-2xl shadow-xs flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>Playlist Completa en Spotify 🟢</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

        </div>
      ) : (
        /* BOTÓN FLOTANTE MINIMIZADO (PILL DE MÚSICA DE CHARO) */
        <div 
          onClick={() => setIsExpanded(true)}
          className="bg-white/95 backdrop-blur-md border-2 border-[#ffc0d8] rounded-full p-2 pr-4 shadow-[0_6px_18px_rgba(239,127,174,0.35)] flex items-center gap-2.5 hover:scale-105 transition-all cursor-pointer"
        >
          <div className="w-9 h-9 bg-[#ef7fae] text-white rounded-full flex items-center justify-center shadow-xs flex-shrink-0">
            <Disc className={`w-5 h-5 text-white ${isPlaying ? 'animate-spin' : ''}`} />
          </div>

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
      )}

    </div>
  );
}
