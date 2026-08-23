import React, { useState } from 'react';
import { Gift, Heart, Plus, Sparkles, Check, Tag, Filter, Lock, Unlock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WishlistView({ wishlist, onToggleReserve, onAddWishItem }) {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newItem, setNewItem] = useState({
    title: '',
    category: 'Físicos',
    price: '$$',
    note: '',
    image: ''
  });

  const categories = ['Todas', 'Físicos', 'Experiencias', 'Antojos'];

  const filteredItems = selectedCategory === 'Todas'
    ? wishlist
    : wishlist.filter(item => item.category === selectedCategory);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newItem.title.trim()) return;

    onAddWishItem({
      ...newItem,
      id: 'w' + Date.now(),
      status: 'Deseado',
      reserved: false,
      image: newItem.image.trim() || 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&auto=format&fit=crop&q=60'
    });

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#bda3e8', '#ef7fae', '#ffd0e2']
    });

    setNewItem({ title: '', category: 'Físicos', price: '$$', note: '', image: '' });
    setShowAddModal(false);
  };

  return (
    <div className="py-10 px-4 sm:px-6 min-h-[80vh]">
      <div className="max-w-6xl mx-auto">
        
        {/* Title Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#bda3e8] text-white font-baloo font-bold text-xs sm:text-sm tracking-[0.2em] uppercase px-5 py-1.5 rounded-full shadow-[0_4px_0_rgba(150,110,205,0.4)] mb-3">
            <Gift className="w-4 h-4" />
            <span>WISH LIST DE CHARO</span>
            <Gift className="w-4 h-4" />
          </div>

          <h2 className="font-baloo font-extrabold text-4xl sm:text-6xl text-[#bda3e8] text-stroke-white drop-shadow-[0_4px_0_rgba(189,163,232,0.3)]">
            Ideas & Regalos
          </h2>
          <p className="text-sm sm:text-base font-semibold text-[#b3789a] mt-2">
            Cosas que le harían muy feliz a Charo en su mes especial ♥
          </p>
        </div>

        {/* Category Filter Buttons & Add Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-[#8a63b8] uppercase tracking-wider flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Filtrar:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-baloo font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full border-2 transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#bda3e8] border-white text-white shadow-[0_3px_0_rgba(150,110,205,0.4)]'
                    : 'bg-white border-[#eadcfa] text-[#8a63b8] hover:bg-[#f8f2ff]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="font-baloo font-bold text-xs sm:text-sm text-white bg-[#ef7fae] hover:bg-[#e0669a] border-2 border-white rounded-full px-5 py-2 shadow-[0_4px_0_rgba(214,105,155,0.4)] flex items-center gap-1.5 transition-all hover:scale-105"
          >
            <Plus className="w-4 h-4" />
            <span>Agregar Deseo</span>
          </button>
        </div>

        {/* Grid de Regalos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border-3 border-[#eadcfa] rounded-3xl p-4 shadow-[0_8px_0_rgba(200,175,240,0.32)] relative flex flex-col justify-between hover:translate-y-[-4px] transition-all group"
            >
              {/* Imagen del Regalo */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#fdf5ff] border border-[#f0e6fc]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Status Badge Over Image */}
                {item.reserved && (
                  <div className="absolute top-3 right-3 bg-[#ef7fae] text-white font-baloo font-bold text-xs tracking-wider px-3.5 py-1 rounded-full shadow-md uppercase border border-white flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-white" />
                    <span>Reservado</span>
                  </div>
                )}

                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-[#8a63b8] font-bold text-[11px] px-3 py-0.5 rounded-full border border-[#eadcfa]">
                  {item.category} • {item.price}
                </div>
              </div>

              {/* Title & Notes */}
              <div className="my-3">
                <h3 className="font-baloo font-bold text-xl text-[#8a63b8] leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-[#a98fc4] mt-1 line-clamp-2">
                  {item.note}
                </p>
              </div>

              {/* Action Button: Reservar */}
              <button
                onClick={() => onToggleReserve(item.id)}
                className={`w-full font-baloo font-bold text-xs sm:text-sm py-2.5 px-4 rounded-full border-2 transition-all flex items-center justify-center gap-2 ${
                  item.reserved
                    ? 'bg-[#ffeef5] border-[#ffc0d8] text-[#ef7fae] hover:bg-[#ffd0e2]'
                    : 'bg-[#bda3e8] border-white text-white hover:bg-[#a882dd] shadow-[0_4px_0_rgba(150,110,205,0.4)]'
                }`}
              >
                {item.reserved ? (
                  <>
                    <Unlock className="w-4 h-4" />
                    <span>Liberar Reserva</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Reservar este regalo ♥</span>
                  </>
                )}
              </button>

            </div>
          ))}
        </div>

        {/* Modal de Agregar Nuevo Deseo */}
        {showAddModal && (
          <div className="fixed inset-0 z-[160] bg-[#783c5a]/45 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white border-4 border-[#eadcfa] rounded-3xl p-6 max-w-md w-full shadow-2xl relative text-left">
              <h3 className="font-baloo font-extrabold text-2xl text-[#8a63b8] mb-4 text-center">
                ✨ Agregar Nuevo Deseo
              </h3>

              <form onSubmit={handleAddSubmit} className="space-y-4 font-quicksand text-sm">
                <div>
                  <label className="block font-bold text-[#7a4a63] mb-1">Nombre del Regalo / Deseo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Taza My Melody de cerámica"
                    value={newItem.title}
                    onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                    className="w-full border-2 border-[#f0e6fc] rounded-xl p-2.5 text-sm focus:outline-none focus:border-[#bda3e8] bg-[#fdf9ff]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#7a4a63] mb-1">Categoría</label>
                    <select
                      value={newItem.category}
                      onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                      className="w-full border-2 border-[#f0e6fc] rounded-xl p-2.5 text-sm focus:outline-none focus:border-[#bda3e8] bg-[#fdf9ff]"
                    >
                      <option value="Físicos">Físicos</option>
                      <option value="Experiencias">Experiencias</option>
                      <option value="Antojos">Antojos</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-[#7a4a63] mb-1">Precio Aprox</label>
                    <select
                      value={newItem.price}
                      onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                      className="w-full border-2 border-[#f0e6fc] rounded-xl p-2.5 text-sm focus:outline-none focus:border-[#bda3e8] bg-[#fdf9ff]"
                    >
                      <option value="$">$ (Accesible)</option>
                      <option value="$$">$$ (Medio)</option>
                      <option value="$$$">$$$ (Especial)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#7a4a63] mb-1">Nota (Talle, color, link, detalle)</label>
                  <input
                    type="text"
                    placeholder="Ej: Talle M, rosa pastel"
                    value={newItem.note}
                    onChange={(e) => setNewItem({ ...newItem, note: e.target.value })}
                    className="w-full border-2 border-[#f0e6fc] rounded-xl p-2.5 text-sm focus:outline-none focus:border-[#bda3e8] bg-[#fdf9ff]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#7a4a63] mb-1">URL de Imagen (Opcional)</label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={newItem.image}
                    onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
                    className="w-full border-2 border-[#f0e6fc] rounded-xl p-2.5 text-sm focus:outline-none focus:border-[#bda3e8] bg-[#fdf9ff]"
                  />
                </div>

                <div className="flex gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="w-1/2 font-baloo font-bold py-2.5 rounded-full border-2 border-[#eadcfa] text-[#8a63b8] hover:bg-[#fdf9ff]"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 font-baloo font-bold py-2.5 rounded-full bg-[#bda3e8] text-white hover:bg-[#a882dd] shadow-md"
                  >
                    Guardar ♥
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
