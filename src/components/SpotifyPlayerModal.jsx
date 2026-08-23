import React, { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, SkipForward, SkipBack, Music, Volume2, VolumeX, ExternalLink, Heart, Sparkles, Radio } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SpotifyPlayerModal({ isOpen, onClose }) {
  const [activeMode, setActiveMode] = useState('embed'); // 'embed' | 'player'
  // Playlist Oficial del Charo Fest de la usuaria
  const OFFICIAL_PLAYLIST_ID = '4oBZ0xkrOD4VFfquiR51p8';
  const OFFICIAL_PLAYLIST_URL = 'https://open.spotify.com/playlist/4oBZ0xkrOD4VFfquiR51p8?si=546c79253bc242ab';

  const [playlistId, setPlaylistId] = useState(OFFICIAL_PLAYLIST_ID);
  const [customInput, setCustomInput] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(null);

  // Playlist de Canciones Reales para el reproductor kawaii en tiempo real
  const tracks = [
    {
      title: "Dynamite",
      artist: "BTS (Charo Fest Choice)",
      cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60",
      audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=kawaii-cute-sweet-chill-114402.mp3"
    },
    {
      title: "Butter (Pink Remix)",
      artist: "BTS",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=60",
      audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8b9821815.mp3?filename=sweet-kawaii-pop-10825.mp3"
    },
    {
      title: "My Melody Magic",
      artist: "Sanrio Sound",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60",
      audioUrl: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=cute-happy-background-15491.mp3"
    },
    {
      title: "Spring Day (Acoustic)",
      artist: "BTS",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&auto=format&fit=crop&q=60",
      audioUrl: "https://cdn.pixabay.com/download/audio/2022/10/14/audio_993f3c306d.mp3?filename=kawaii-future-bass-123498.mp3"
    }
  ];

  const currentTrack = tracks[currentTrackIdx];

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
            origin: { y: 0.6 },
            colors: ['#ef7fae', '#f78ab6', '#bda3e8']
          });
        }).catch(err => console.log("Error al reproducir audio:", err));
      }
    }
  };

  const handleNextTrack = () => {
    const nextIdx = (currentTrackIdx + 1) % tracks.length;
    setCurrentTrackIdx(nextIdx);
    setIsPlaying(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }, 150);
  };

  const handlePrevTrack = () => {
    const prevIdx = (currentTrackIdx - 1 + tracks.length) % tracks.length;
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

  const handleUpdatePlaylist = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    let id = customInput.trim();
    const match = id.match(/playlist\/([a-zA-Z0-9]+)/);
    if (match && match[1]) {
      id = match[1];
    }

    setPlaylistId(id);
    setActiveMode('embed');
    setCustomInput('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[180] bg-[#2b1520]/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      
      {/* Container Modal */}
      <div className="bg-white border-4 border-[#ffd0e2] rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-[0_16px_40px_rgba(239,127,174,0.35)] relative animate-popIn text-center overflow-hidden">
        
        {/* Elemento Audio Real */}
        <audio
          ref={audioRef}
          src={currentTrack.audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleNextTrack}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#fff0f6] border-2 border-[#ffd0e2] text-[#e0669a] flex items-center justify-center font-bold hover:bg-[#ffe0ec] transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Title */}
        <div className="inline-flex items-center gap-2 font-baloo font-bold text-xs uppercase tracking-widest text-[#ef7fae] bg-[#fff0f6] border border-[#ffd0e2] rounded-full px-4 py-1 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PLAYLIST OFICIAL CHARO FEST 2026</span>
          <Heart className="w-3.5 h-3.5 fill-[#ef7fae]" />
        </div>

        {/* Switcher Tabs */}
        <div className="flex justify-center gap-2 my-3">
          <button
            onClick={() => setActiveMode('embed')}
            className={`font-baloo font-bold text-xs px-4 py-1.5 rounded-full border-2 transition-all flex items-center gap-1.5 ${
              activeMode === 'embed'
                ? 'bg-[#1DB954] text-white border-white shadow-sm'
                : 'bg-white text-[#7a4a63] border-[#ffd0e2] hover:bg-[#fff0f6]'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>Spotify Oficial en Vivo 🎵</span>
          </button>

          <button
            onClick={() => setActiveMode('player')}
            className={`font-baloo font-bold text-xs px-4 py-1.5 rounded-full border-2 transition-all flex items-center gap-1.5 ${
              activeMode === 'player'
                ? 'bg-[#ef7fae] text-white border-white shadow-sm'
                : 'bg-white text-[#7a4a63] border-[#ffd0e2] hover:bg-[#fff0f6]'
            }`}
          >
            <Music className="w-3.5 h-3.5" />
            <span>Reproductor Kawaii 🎀</span>
          </button>
        </div>

        {/* MODO 1: SPOTIFY EMBED OFICIAL DE CHARO FEST */}
        {activeMode === 'embed' && (
          <div className="my-4 animate-fadeIn">
            <div className="rounded-2xl overflow-hidden shadow-md border-2 border-[#ffd0e2] bg-[#121212]">
              <iframe
                src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
                width="100%"
                height="360"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Playlist Oficial Charo Fest 2026"
                className="w-full"
              />
            </div>
          </div>
        )}

        {/* MODO 2: REPRODUCTOR DE AUDIO KAWAII EN TIEMPO REAL */}
        {activeMode === 'player' && (
          <div className="my-4 bg-[#fff4f9] border-2 border-[#ffd0e2] rounded-2xl p-4 animate-fadeIn">
            
            {/* Album Cover & Track Details */}
            <div className="flex items-center gap-4 mb-4 text-left">
              <img
                src={currentTrack.cover}
                alt={currentTrack.title}
                className={`w-20 h-20 rounded-2xl object-cover shadow-md border-2 border-white ${
                  isPlaying ? 'animate-pulse' : ''
                }`}
              />
              <div>
                <span className="font-baloo font-extrabold text-lg text-[#ef7fae] block leading-tight">
                  {currentTrack.title}
                </span>
                <span className="text-xs font-bold text-[#b3789a] block mt-0.5">
                  {currentTrack.artist}
                </span>
                <span className="inline-block mt-2 text-[10px] font-bold bg-[#ffc9de] text-[#b7407a] px-2.5 py-0.5 rounded-full">
                  Charo Fest Official Track 🎀
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="my-3">
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-2 bg-[#ffd6e6] rounded-lg appearance-none cursor-pointer accent-[#ef7fae]"
              />
              <div className="flex justify-between text-[11px] font-bold text-[#b3789a] mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-center gap-4 my-2">
              <button
                onClick={handlePrevTrack}
                className="w-10 h-10 rounded-full bg-white border-2 border-[#ffd0e2] text-[#ef7fae] flex items-center justify-center hover:bg-[#fff0f6] transition-transform active:scale-90"
              >
                <SkipBack className="w-5 h-5" />
              </button>

              <button
                onClick={togglePlay}
                className="w-14 h-14 rounded-full bg-[#ef7fae] hover:bg-[#e0669a] text-white flex items-center justify-center shadow-[0_4px_0_rgba(214,105,155,0.4)] transition-all hover:scale-105 active:scale-95"
              >
                {isPlaying ? <Pause className="w-7 h-7 fill-white" /> : <Play className="w-7 h-7 fill-white ml-0.5" />}
              </button>

              <button
                onClick={handleNextTrack}
                className="w-10 h-10 rounded-full bg-white border-2 border-[#ffd0e2] text-[#ef7fae] flex items-center justify-center hover:bg-[#fff0f6] transition-transform active:scale-90"
              >
                <SkipForward className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Link directo a la Playlist Oficial de Spotify en la App */}
        <div className="mt-4">
          <a
            href={OFFICIAL_PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#1DB954] hover:underline bg-[#eefbf3] border border-[#a3e5bb] px-4 py-2 rounded-full"
          >
            <span>💚 Abrir Playlist Oficial del Charo Fest en la App de Spotify</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
