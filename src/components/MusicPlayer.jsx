import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, ExternalLink, ChevronUp, ChevronDown, Disc } from 'lucide-react';

const TRACKS = [
  {
    id: 1,
    title: "Kawaii",
    artist: "LE SSERAFIM",
    album: "DIFFERENT",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60",
    audioUrl: "/assets/audio/kawaii.mp3"
  },
  {
    id: 2,
    title: "Dimple (보조개)",
    artist: "BTS (방탄소년단)",
    album: "LOVE YOURSELF 承 'Her'",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60",
    audioUrl: "/assets/audio/dimple.mp3"
  },
  {
    id: 3,
    title: "Strategy",
    artist: "TWICE (트와이스)",
    album: "STRATEGY - 14th Mini Album",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=60",
    audioUrl: "/assets/audio/strategy.mp3"
  }
];

const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/0RKRqgfTw92EQECobKKkfN?si=082457e6e77547d4";

export default function MusicPlayer({ shouldAutoPlay = false }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef(null);

  const currentTrack = TRACKS[currentTrackIndex];

  // Iniciar reproducción automática una vez cerrado el video de bienvenida
  useEffect(() => {
    if (shouldAutoPlay && audioRef.current) {
      audioRef.current.volume = 1.0;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Autoplay de música aguarda toque del usuario:", err);
      });
    }
  }, [shouldAutoPlay]);

  // Al cambiar la canción actual en el selector o al pasar de track
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [currentTrackIndex]);

  // Reproducir o pausar
  const togglePlay = (e) => {
    if (e) e.stopPropagation();
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

  // Siguiente canción (en loop continuo 1 -> 2 -> 3 -> 1)
  const handleNext = (e) => {
    if (e) e.stopPropagation();
    const nextIndex = (currentTrackIndex + 1) % TRACKS.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(true);
  };

  // Canción anterior
  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    const prevIndex = (currentTrackIndex - 1 + TRACKS.length) % TRACKS.length;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(true);
  };

  // Seleccionar canción directa
  const handleSelectTrack = (index, e) => {
    if (e) e.stopPropagation();
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  // Al finalizar una canción -> reproduce automáticamente la siguiente (Loop continuo)
  const handleEnded = () => {
    handleNext();
  };

  return (
    <div className="fixed bottom-4 left-4 z-[100] select-none font-quicksand">
      
      {/* Elemento de Audio HTML5 Reproduciendo las canciones exactas MP3 */}
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        onEnded={handleEnded}
        muted={isMuted}
      />

      {/* TARJETA DESPLEGADA (REPRODUCTOR COMPLETO) */}
      {isExpanded ? (
        <div className="bg-white/95 backdrop-blur-md border-3 border-[#ffc0d8] rounded-3xl p-4 shadow-[0_12px_30px_rgba(239,127,174,0.4)] w-[300px] sm:w-[330px] animate-fadeIn relative text-left">
          
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

          {/* Selector de Canciones Oficiales en MP3 (Las 3 Pedidas por Charo) */}
          <div className="flex flex-col gap-1.5 mb-3">
            <span className="text-[11px] font-bold text-[#b7407a] uppercase tracking-wider">
              Canciones en Loop (3):
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              {TRACKS.map((track, idx) => (
                <button
                  key={track.id}
                  onClick={(e) => handleSelectTrack(idx, e)}
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

            <div className="w-4" />
          </div>

          {/* Botón Principal para Playlist Completa de Spotify */}
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
        <div 
          onClick={() => setIsExpanded(true)}
          className="bg-white/95 backdrop-blur-md border-2 border-[#ffc0d8] rounded-full p-2 pr-4 shadow-[0_6px_18px_rgba(239,127,174,0.35)] flex items-center gap-2.5 hover:scale-105 transition-all cursor-pointer"
        >
          <button
            onClick={togglePlay}
            className="w-9 h-9 bg-[#ef7fae] text-white rounded-full flex items-center justify-center shadow-xs flex-shrink-0 cursor-pointer"
            title={isPlaying ? "Pausar" : "Reproducir"}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
          </button>

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
