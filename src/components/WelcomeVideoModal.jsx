import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WelcomeVideoModal({ onClose }) {
  const videoRef = useRef(null);
  // Por defecto el sonido SIEMPRE está activado (isMuted = false)
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(err => {
        console.log("Autoplay con audio requiere interacción o se silenció preventivamente:", err);
        // Si el navegador bloquea el audio sin interacción previa, reproducir silenciado pero listo para activar
        videoRef.current.muted = true;
        setIsMuted(true);
        videoRef.current.play().catch(() => {});
      });
    }
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const handleEnter = () => {
    // Lanzar efecto de confeti rosa y corazones
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#ef7fae', '#f78ab6', '#bda3e8', '#ffffff', '#ffd0e2']
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-[200] bg-[#2b1520] flex flex-col items-center justify-center animate-fadeIn overflow-hidden">
      {/* Video de Fondo */}
      <video
        ref={videoRef}
        src="/welcome-video.mp4"
        autoPlay
        muted={isMuted}
        playsInline
        onEnded={handleEnter}
        className="w-full h-full object-contain md:object-cover opacity-90"
      />

      {/* Glow ambiental rosa alrededor */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_180px_rgba(255,150,190,0.5)]" />

      {/* Header flotante */}
      <div className="absolute top-6 left-0 right-0 flex justify-center items-center pointer-events-none px-4">
        <div className="bg-white/90 backdrop-blur-md border-2 border-[#ffd0e2] rounded-full px-6 py-2 shadow-lg flex items-center gap-2">
          <Heart className="w-5 h-5 text-[#ef7fae] fill-[#ef7fae] animate-bounce" />
          <span className="font-baloo font-bold text-lg md:text-xl text-[#b7407a] tracking-wide text-center">
            BIENVENIDOS AL CHARO FEST 2026
          </span>
          <Sparkles className="w-5 h-5 text-[#bda3e8] animate-spin hidden sm:inline-block" />
        </div>
      </div>

      {/* Botones de acción inferiores */}
      <div className="absolute bottom-8 sm:bottom-10 left-0 right-0 flex flex-col sm:flex-row justify-center items-center gap-3.5 sm:gap-4 px-6 z-10">
        <button
          onClick={toggleSound}
          className="font-baloo font-bold text-base md:text-lg text-[#b7407a] bg-white/95 hover:bg-white border-2 border-[#ffc0d8] rounded-full px-6 py-3 shadow-[0_6px_0_rgba(255,160,200,0.55)] hover:translate-y-[-2px] transition-all flex items-center gap-2 cursor-pointer"
        >
          {!isMuted ? (
            <>
              <Volume2 className="w-5 h-5 text-[#ef7fae]" />
              <span>Desactivar sonido 🔇</span>
            </>
          ) : (
            <>
              <VolumeX className="w-5 h-5 text-[#ef7fae]" />
              <span>Activar sonido 🔊</span>
            </>
          )}
        </button>

        <button
          onClick={handleEnter}
          className="font-baloo font-extrabold text-lg md:text-xl text-white bg-[#ef7fae] hover:bg-[#e0669a] border-2 border-white rounded-full px-8 py-3.5 shadow-[0_6px_0_rgba(190,70,125,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group cursor-pointer"
        >
          <span>Entrar al Charo Fest ♥</span>
          <Sparkles className="w-5 h-5 group-hover:rotate-45 transition-transform" />
        </button>
      </div>
    </div>
  );
}
