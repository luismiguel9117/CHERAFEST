import React, { useState } from 'react';
import { Camera, X, Heart } from 'lucide-react';

export default function GallerySection({ polaroids }) {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section id="galeria" className="py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 font-baloo font-bold text-sm text-[#f78ab6] uppercase tracking-widest">
            <span>💖</span>
            <span>NUESTROS MEJORES MOMENTOS</span>
            <span>💖</span>
          </div>
          <h2 className="font-baloo font-extrabold text-4xl sm:text-5xl text-[#f78ab6] text-stroke-white drop-shadow-[0_4px_0_rgba(247,138,182,0.3)] mt-1">
            Galería de Recuerdos
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-[#b3789a] mt-2">
            Cada foto es un pedacito de la magia del Charo Fest.
          </p>
        </div>

        {/* Polaroid Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {polaroids.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className={`bg-white p-3 pb-12 rounded-sm shadow-[0_10px_22px_rgba(200,130,170,0.26)] w-full max-w-[240px] relative cursor-pointer hover:scale-105 transition-all duration-300 ${photo.rotation}`}
            >
              {/* Pink Tape Decor on top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#ffc9de]/70 backdrop-blur-xs border border-[#ffb3d1]/50 rotate-[-2deg] z-10" />

              {/* Photo Image Container */}
              <div className="relative w-full aspect-square bg-[#ffeef5] overflow-hidden rounded-xs">
                <img
                  src={photo.image}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption text */}
              <div className="absolute bottom-3 left-0 right-0 text-center font-baloo font-bold text-sm text-[#c07fa4]">
                {photo.caption} ♥
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Popup Modal */}
        {activePhoto && (
          <div
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-[170] bg-[#2b1520]/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn cursor-pointer"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-4 pb-14 rounded-md max-w-lg w-full shadow-2xl relative animate-popIn text-center cursor-default"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#fff0f6] text-[#ef7fae] flex items-center justify-center font-bold"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={activePhoto.image}
                alt={activePhoto.caption}
                className="w-full max-h-[70vh] object-contain rounded-xs bg-[#ffeef5]"
              />

              <div className="mt-4 font-baloo font-bold text-xl text-[#ef7fae] flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 fill-[#ef7fae]" />
                <span>{activePhoto.caption}</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
