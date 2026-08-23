import React from 'react';

export default function Hero({ onOpenCalendar, onOpenWishlist, onOpenGallery }) {
  return (
    <header 
      id="top" 
      className="relative w-full h-screen min-h-[560px] max-h-[1080px] overflow-hidden select-none bg-[#fff2f6]"
    >
      
      {/* 1. Fondo completo (Fondo2.png) */}
      <img
        src="/assets/fondo2.png"
        alt="Fondo Charo Fest"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* 2. Borde Superior de Encaje (borde.png) */}
      <img
        src="/assets/borde.png"
        alt="Borde Encaje Superior"
        className="absolute top-0 left-0 right-0 w-full h-16 sm:h-24 md:h-28 object-fill z-20 pointer-events-none"
      />

      {/* 3. Borde Inferior de Encaje (borde.png) */}
      <img
        src="/assets/borde.png"
        alt="Borde Encaje Inferior"
        className="absolute bottom-0 left-0 right-0 w-full h-16 sm:h-24 md:h-28 object-fill z-20 pointer-events-none rotate-180"
      />

      {/* 4. Personaje My Melody Izquierda (mascot_personaje.png) - Elevada (bottom-[11%]) */}
      <img
        src="/assets/mascot_personaje.png"
        alt="My Melody Mascot"
        className="absolute left-[1.5%] bottom-[11%] h-[58vh] max-h-[520px] min-h-[280px] w-auto object-contain drop-shadow-md z-25 animate-floaty"
      />

      {/* 5. Ratita Flat con Globo (rata_mouse.png) por ENCIMA del borde inferior (z-30) */}
      <img
        src="/assets/rata_mouse.png"
        alt="Flat Mouse Balloon"
        className="absolute left-[4.5%] bottom-[3.5%] h-[20vh] max-h-[185px] min-h-[100px] w-auto object-contain drop-shadow-md z-30"
      />

      {/* 6. Elementos Derecha: Atril, Cesta Picnic, Árbol y Cojín Corazón (derecha_items.png) - Elevados (bottom-[8%]) */}
      <img
        src="/assets/derecha_items.png"
        alt="Elementos Derecha Charo Fest"
        className="absolute right-[1%] bottom-[8%] h-[68vh] max-h-[600px] min-h-[320px] w-auto object-contain drop-shadow-md hover:scale-102 transition-transform z-25"
      />

      {/* 7. Título Gráfico Central (titulo.png) */}
      <img
        src="/assets/titulo.png"
        alt="Título Charo Fest"
        className="absolute left-1/2 -translate-x-1/2 top-[8%] sm:top-[9%] h-[52vh] max-h-[480px] min-h-[240px] w-auto object-contain z-25 drop-shadow-xs"
      />

      {/* 8. Botones e Interacciones Transparentes Superpuestas sobre la Imagen */}
      
      {/* Botones de Navegación del Encabezado sobre la imagen */}
      <button
        onClick={onOpenCalendar}
        className="absolute left-[46%] w-[9%] top-[1%] h-[4%] rounded-full cursor-pointer hover:bg-white/20 transition-all z-40"
        title="Ver Calendario"
      />

      <button
        onClick={onOpenWishlist}
        className="absolute left-[62%] w-[8%] top-[1%] h-[4%] rounded-full cursor-pointer hover:bg-white/20 transition-all z-40"
        title="Ver Wishlist"
      />

      <button
        onClick={onOpenGallery}
        className="absolute left-[71%] w-[8%] top-[1%] h-[4%] rounded-full cursor-pointer hover:bg-white/20 transition-all z-40"
        title="Ver Galería"
      />

      <button
        onClick={onOpenCalendar}
        className="absolute left-[80%] w-[13%] top-[0.5%] h-[5%] rounded-full cursor-pointer hover:bg-white/20 transition-all z-40"
        title="Ir a Charo Day"
      />

      {/* Botón Ver Calendario principal */}
      <button
        onClick={onOpenCalendar}
        className="absolute left-[36.5%] w-[13%] top-[54%] h-[6%] rounded-full cursor-pointer hover:bg-white/20 hover:scale-105 transition-all z-40"
        title="Ver Calendario"
      />

      {/* Botón Wishlist principal */}
      <button
        onClick={onOpenWishlist}
        className="absolute left-[50.5%] w-[11%] top-[54%] h-[6%] rounded-full cursor-pointer hover:bg-white/20 hover:scale-105 transition-all z-40"
        title="Ver Wishlist"
      />

      {/* Zona interactiva del Atril de Madera ("24 días de cumple y magia") */}
      <div 
        onClick={onOpenCalendar}
        className="absolute right-[5%] w-[14%] top-[30%] h-[22%] cursor-pointer hover:scale-102 transition-transform z-40"
        title="Ver Calendario completo"
      />

    </header>
  );
}
