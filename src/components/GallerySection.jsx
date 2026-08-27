import React, { useState, useRef } from 'react';
import { Sparkles, Heart, X, ZoomIn, Camera, Upload, Image as ImageIcon } from 'lucide-react';
import confetti from 'canvas-confetti';

const PLACEHOLDER_IMAGE = "/assets/derecha_items.png"; // Tercera foto / ilustración gráfica placeholder por defecto

export default function GallerySection({ galleryPhotos = [], onAddPhoto }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [filePreview, setFilePreview] = useState(null);
  const [newPhoto, setNewPhoto] = useState({
    caption: '',
    date: 'Septiembre 2026',
    url: ''
  });

  const fileInputRef = useRef(null);

  // Manejar selección de archivo local (PC o Cámara/Galería del Celular)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ef7fae', '#f78ab6', '#bda3e8', '#ffffff']
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!newPhoto.caption.trim()) return;

    // Si se subió un archivo local, se usa dataURL; de lo contrario se usa la URL ingresada o el placeholder por defecto
    const finalImage = filePreview || newPhoto.url.trim() || PLACEHOLDER_IMAGE;

    const created = {
      id: 'p_' + Date.now(),
      caption: newPhoto.caption.trim(),
      date: newPhoto.date.trim() || 'Septiembre 2026',
      url: finalImage,
      rotation: (Math.random() > 0.5 ? 'rotate-2' : '-rotate-2')
    };

    if (onAddPhoto) {
      onAddPhoto(created);
    }

    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#ef7fae', '#f78ab6', '#bda3e8', '#ffd0e2']
    });

    setNewPhoto({ caption: '', date: 'Septiembre 2026', url: '' });
    setFilePreview(null);
    setShowUploadModal(false);
  };

  return (
    <section id="galeria" className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 select-none">
      
      {/* Título de la Sección */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-[#ef7fae] text-white font-baloo font-bold text-xs sm:text-sm tracking-[0.2em] uppercase px-5 py-1.5 rounded-full shadow-[0_4px_0_rgba(214,105,155,0.4)] mb-3">
          <Sparkles className="w-4 h-4" />
          <span>GALERÍA DE RECUERDOS</span>
          <Sparkles className="w-4 h-4" />
        </div>

        <h2 className="font-baloo font-black text-2xl sm:text-4xl md:text-5xl text-[#ef7fae] uppercase tracking-wide flex items-center justify-center gap-2">
          <span>♥ NUESTROS MEJORES MOMENTOS ♥</span>
        </h2>
        <p className="font-quicksand font-bold text-xs sm:text-sm md:text-base text-[#b3789a] mt-2">
          Cada foto es un pedacito de la magia del Charo Fest.
        </p>

        {/* Botón para Subir Nueva Foto desde PC o Celular */}
        <div className="mt-5 flex justify-center">
          <button
            onClick={() => setShowUploadModal(true)}
            className="font-baloo font-extrabold text-xs sm:text-sm text-white bg-[#ef7fae] hover:bg-[#e0669a] border-2 border-white rounded-full px-6 py-2.5 shadow-[0_4px_0_rgba(214,105,155,0.4)] flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
          >
            <Camera className="w-4 h-4" />
            <span>Subir Foto de Recuerdo 🌸</span>
          </button>
        </div>
      </div>

      {/* Grid de Fotos Polaroid Inclinadas con Placeholder manteniendo visibilidad */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 mb-10">
        {galleryPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => handlePhotoClick(photo)}
            className={`bg-white p-3 pt-4 pb-5 rounded-2xl shadow-[0_8px_20px_rgba(239,127,174,0.15)] border-2 border-[#ffd0e2] cursor-pointer transition-all duration-300 hover:scale-105 hover:z-20 hover:rotate-0 ${photo.rotation || '-rotate-1'} relative group`}
          >
            {/* Adorno de Pin o Cinta adhesiva rosa */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#ffc5dc]/80 border border-[#f78ab6] rounded-xs" />

            {/* Foto Polaroid - Con la tercera foto gráfica (PLACEHOLDER_IMAGE) visible por defecto */}
            <div className="rounded-xl overflow-hidden bg-[#fff0f6] border border-[#ffd0e2] aspect-square relative flex items-center justify-center p-2">
              <img
                src={photo.url || PLACEHOLDER_IMAGE}
                alt={photo.caption}
                onError={(e) => { e.target.src = PLACEHOLDER_IMAGE; }}
                className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
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
                {photo.date || 'Septiembre 2026'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL DE SUBIR FOTO DESDE DISPOSITIVO (PC O CELULAR) */}
      {showUploadModal && (
        <div className="fixed inset-0 z-[160] bg-[#783c5a]/45 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white border-4 border-[#ffd0e2] rounded-3xl p-6 max-w-md w-full shadow-2xl relative text-left">
            <h3 className="font-baloo font-extrabold text-2xl text-[#ef7fae] mb-4 text-center flex items-center justify-center gap-2">
              <Camera className="w-6 h-6" />
              <span>Subir Foto de Recuerdo</span>
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-4 font-quicksand text-sm">
              
              {/* Opción 1: Subir Archivo Local desde PC o Celular */}
              <div>
                <label className="block font-bold text-[#7a4a63] mb-1">
                  Seleccionar Foto desde tu Dispositivo (PC / Móvil):
                </label>
                
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />

                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-[#ef7fae] bg-[#fff0f6] hover:bg-[#ffe4ee] p-4 rounded-2xl text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2"
                >
                  {filePreview ? (
                    <div className="relative w-full h-32 rounded-xl overflow-hidden border border-[#ffd0e2]">
                      <img src={filePreview} alt="Vista Previa" className="w-full h-full object-cover" />
                      <span className="absolute bottom-1 right-1 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                        Foto Lista ✓
                      </span>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-8 h-8 text-[#ef7fae] animate-bounce" />
                      <span className="font-baloo font-extrabold text-xs text-[#ef7fae]">
                        Haz clic aquí para elegir una foto de tu celular o PC 📷
                      </span>
                      <span className="text-[10px] text-[#b3789a]">
                        Soporta JPG, PNG, WEBP, HEIC
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Título o Recuerdo */}
              <div>
                <label className="block font-bold text-[#7a4a63] mb-1">Título del Recuerdo</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Picnic en el parque o Karaoke Night"
                  value={newPhoto.caption}
                  onChange={(e) => setNewPhoto({ ...newPhoto, caption: e.target.value })}
                  className="w-full border-2 border-[#ffd0e2] rounded-xl p-2.5 text-sm focus:outline-none focus:border-[#ef7fae] bg-[#fff0f6]"
                />
              </div>

              {/* Fecha o Detalle */}
              <div>
                <label className="block font-bold text-[#7a4a63] mb-1">Fecha o Detalle</label>
                <input
                  type="text"
                  placeholder="Ej: Septiembre 2026"
                  value={newPhoto.date}
                  onChange={(e) => setNewPhoto({ ...newPhoto, date: e.target.value })}
                  className="w-full border-2 border-[#ffd0e2] rounded-xl p-2.5 text-sm focus:outline-none focus:border-[#ef7fae] bg-[#fff0f6]"
                />
              </div>

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowUploadModal(false);
                    setFilePreview(null);
                  }}
                  className="w-1/2 font-baloo font-bold py-2.5 rounded-full border-2 border-[#ffd0e2] text-[#ef7fae] hover:bg-[#fff0f6] cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="w-1/2 font-baloo font-bold py-2.5 rounded-full bg-[#ef7fae] text-white hover:bg-[#e0669a] shadow-md cursor-pointer"
                >
                  Guardar Foto ♥
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* LIGHTBOX MODAL PARA VER FOTO EN GRANDE */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-[170] bg-[#2b1520]/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white border-4 border-[#ffd0e2] rounded-3xl p-6 max-w-lg w-full shadow-2xl relative text-center"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-[#ef7fae] hover:bg-[#fff0f6] p-1.5 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="rounded-2xl overflow-hidden bg-[#fff0f6] border border-[#ffd0e2] mb-4 max-h-[60vh] flex items-center justify-center p-4">
              <img
                src={selectedPhoto.url || PLACEHOLDER_IMAGE}
                alt={selectedPhoto.caption}
                onError={(e) => { e.target.src = PLACEHOLDER_IMAGE; }}
                className="max-w-full max-h-[55vh] object-contain rounded-xl"
              />
            </div>

            <h3 className="font-baloo font-extrabold text-xl sm:text-2xl text-[#ef7fae]">
              {selectedPhoto.caption}
            </h3>
            <p className="font-quicksand font-bold text-xs sm:text-sm text-[#b3789a] mt-1">
              {selectedPhoto.date || 'Septiembre 2026'}
            </p>
          </div>
        </div>
      )}

    </section>
  );
}
