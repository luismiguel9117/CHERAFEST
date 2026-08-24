import React, { useState } from 'react';
import { Sparkles, Heart, X, ZoomIn } from 'lucide-react';

export default function GallerySection({ polaroids }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Lista de 5 Fotos Polaroid de alta calidad matching el mockup de referencia
  const galleryPhotos = [
    {
      id: 1,
      url: '/428208e2-1f50-4e60-8b6e-c089303b65ca.jpg',
      caption: 'My Melody & Cojín Corazón 🌸',
      date: 'Septiembre 2026',
      rotation: '-rotate-2'
    },
    {
      id: 2,
      url: '/ChatGPT Image 22 ago 2026, 02_37_09 p.m..png',
      caption: 'Arco de Globos Charo Fest 🎈',
      date: 'Septiembre 2026',
      rotation: 'rotate-1'
    },
    {
      id: 3,
      url: '/ChatGPT Image 22 ago 2026, 02_37_45 p.m..png',
      caption: 'Papelería & Stickers Sanrio 🎀',
      date: 'Septiembre 2026',
      rotation: '-rotate-3'
    },
    {
      id: 4,
      url: '/assets/picnic_decor_hd.png',
      caption: 'Picnic Mágico My Melody 🧺',
      date: 'Septiembre 2026',
      rotation: 'rotate-2'
    },
    {
      id: 5,
      url: '/assets/easel_canvas_hd.png',
      caption: '24 Días de Cumple y Magia ✨',
      date: 'Septiembre 2026',
      rotation: '-rotate-1'
    }
  ];

  return (
    <section id="galeria" className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 select-none">
      
      {/* Título de la Sección */}
      <div className="text-center mb-10">
        <h2 className="font-baloo font-black text-2xl sm:text-3xl md:text-4xl text-[#ef7fae] uppercase tracking-wide flex items-center justify-center gap-2">
          <span>✨</span>
          <span>♥ NUESTROS MEJORES MOMENTOS ♥</span>
          <span>✨</span>
        </h2>
        <p className="font-quicksand font-bold text-xs sm:text-sm md:text-base text-[#b3789a] mt-1">
          Cada foto es un pedacito de la magia del Charo Fest.
        </p>
      </div>

      {/* Grid de 5 Fotos Polaroid Inclinadas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 mb-10">
        {galleryPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className={`bg-white p-3 pt-4 pb-5 rounded-2xl shadow-[0_8px_20px_rgba(239,127,174,0.15)] border-2 border-[#ffd0e2] cursor-pointer transition-all duration-300 hover:scale-105 hover:z-20 hover:rotate-0 ${photo.rotation} relative group`}
          >
            {/* Adorno de Pin o Cinta adhesiva rosa */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#ffc5dc]/80 border border-[#f78ab6] rounded-xs" />

            {/* Foto Polaroid */}
            <div className="rounded-xl overflow-hidden bg-[#fff0f6] border border-[#ffd0e2] aspect-square relative">
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#ef7fae]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white drop-shadow-md" />
              </div>
            </div>

            {/* Leyenda Polaroid */}
            <div className="mt-3 text-center">
              <span className="font-baloo font-extrabold text-xs text-[#ef7fae] block truncate">
                {photo.caption}
              </span>
              <span className="text-[10px] font-bold text-[#b3789a] block mt-0.5">
                {photo.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Botón Ver Toda la Galería */}
      <div className="text-center">
        <button
          onClick={() => setSelectedPhoto(galleryPhotos[0])}
          className="bg-[#ef7fae] hover:bg-[#e0669a] text-white font-baloo font-extrabold text-xs sm:text-sm px-8 py-3 rounded-full shadow-[0_4px_0_rgba(214,105,155,0.4)] transition-all hover:scale-105 active:scale-95 uppercase tracking-wider"
        >
          VER TODA LA GALERÍA
        </button>
      </div>

      {/* Modal Lightbox de Foto */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-[200] bg-[#2b1520]/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white border-4 border-[#ffd0e2] rounded-3xl p-4 sm:p-6 max-w-lg w-full shadow-[0_16px_40px_rgba(239,127,174,0.35)] relative animate-popIn text-center">
            
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#fff0f6] border-2 border-[#ffd0e2] text-[#e0669a] flex items-center justify-center font-bold hover:bg-[#ffe0ec] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-2xl overflow-hidden border-2 border-[#ffd0e2] max-h-[60vh] flex items-center justify-center bg-[#fff0f6] my-2">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="mt-3">
              <h3 className="font-baloo font-black text-lg text-[#ef7fae]">
                {selectedPhoto.caption}
              </h3>
              <p className="font-quicksand font-bold text-xs text-[#b3789a]">
                {selectedPhoto.date} • Charo Fest 2026 🎀
              </p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
