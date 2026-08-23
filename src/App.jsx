import React, { useState, useEffect } from 'react';
import WelcomeVideoModal from './components/WelcomeVideoModal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import WeeklyQuickView from './components/WeeklyQuickView';
import CalendarSection from './components/CalendarSection';
import WishlistView from './components/WishlistView';
import GallerySection from './components/GallerySection';
import DayDetailModal from './components/DayDetailModal';
import SpotifyPlayerModal from './components/SpotifyPlayerModal';
import Footer from './components/Footer';

import { SEPTEMBER_ACTIVITIES, INITIAL_WISHLIST, POLAROID_PHOTOS } from './data/calendarData';

const STORAGE_ACTS_KEY = 'charo_fest_activities_v1';
const STORAGE_WISH_KEY = 'charo_fest_wishlist_v1';

export default function App() {
  const [showWelcomeVideo, setShowWelcomeVideo] = useState(true);
  const [showSpotifyPlayer, setShowSpotifyPlayer] = useState(false);
  const [activeTab, setActiveTab] = useState('main'); // 'main' | 'wishlist'
  const [selectedDay, setSelectedDay] = useState(null);

  // Cargar estado guardado o usar defaults
  const [activities, setActivities] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_ACTS_KEY);
      return saved ? JSON.parse(saved) : SEPTEMBER_ACTIVITIES;
    } catch {
      return SEPTEMBER_ACTIVITIES;
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_WISH_KEY);
      return saved ? JSON.parse(saved) : INITIAL_WISHLIST;
    } catch {
      return INITIAL_WISHLIST;
    }
  });

  // Guardar cambios en localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_ACTS_KEY, JSON.stringify(activities));
    } catch (e) {
      console.error("Error al guardar actividades:", e);
    }
  }, [activities]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_WISH_KEY, JSON.stringify(wishlist));
    } catch (e) {
      console.error("Error al guardar wishlist:", e);
    }
  }, [wishlist]);

  // Toggle estado de reto completado
  const handleToggleComplete = (day) => {
    setActivities(prev =>
      prev.map(act => (act.day === day ? { ...act, completed: !act.completed } : act))
    );
  };

  // Toggle reserva de la wishlist
  const handleToggleReserve = (id) => {
    setWishlist(prev =>
      prev.map(item => (item.id === id ? { ...item, reserved: !item.reserved } : item))
    );
  };

  // Agregar nuevo item a la wishlist
  const handleAddWishItem = (newItem) => {
    setWishlist(prev => [newItem, ...prev]);
  };

  const currentSelectedData = activities.find(a => a.day === selectedDay);

  return (
    <div className="min-h-screen flex flex-col font-quicksand bg-[#fff2f6] text-[#7a4a63]">
      
      {/* 1. Modal de Video de Bienvenida */}
      {showWelcomeVideo && (
        <WelcomeVideoModal onClose={() => setShowWelcomeVideo(false)} />
      )}

      {/* 2. Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onReplayVideo={() => setShowWelcomeVideo(true)}
      />

      {/* 3. Main Views */}
      {activeTab === 'main' ? (
        <main className="flex-1">
          {/* Hero Banner CHARO FEST */}
          <Hero
            onOpenCalendar={() => {
              document.getElementById('calendario')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenWishlist={() => setActiveTab('wishlist')}
            onOpenSpotifyPlayer={() => setShowSpotifyPlayer(true)}
          />

          {/* Cards TU CHARO FEST & Timer */}
          <FeatureCards
            onOpenCalendar={() => {
              document.getElementById('calendario')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenWishlist={() => setActiveTab('wishlist')}
            onSelectDay={(day) => setSelectedDay(day)}
          />

          {/* Vista Rápida Primera Semana */}
          <WeeklyQuickView
            activities={activities}
            onSelectDay={(day) => setSelectedDay(day)}
            onOpenCalendar={() => {
              document.getElementById('calendario')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* Grid Completo del Calendario 1 - 24 Septiembre */}
          <CalendarSection
            activities={activities}
            onSelectDay={(day) => setSelectedDay(day)}
          />

          {/* Galería de Recuerdos Polaroid */}
          <GallerySection polaroids={POLAROID_PHOTOS} />
        </main>
      ) : (
        <main className="flex-1">
          {/* Vista Completa de Wishlist */}
          <WishlistView
            wishlist={wishlist}
            onToggleReserve={handleToggleReserve}
            onAddWishItem={handleAddWishItem}
          />
        </main>
      )}

      {/* 4. Modal de Detalle de Día */}
      {selectedDay !== null && (
        <DayDetailModal
          dayData={currentSelectedData}
          onClose={() => setSelectedDay(null)}
          onToggleComplete={handleToggleComplete}
        />
      )}

      {/* 5. Modal de Reproductor en Tiempo Real de Spotify */}
      <SpotifyPlayerModal
        isOpen={showSpotifyPlayer}
        onClose={() => setShowSpotifyPlayer(false)}
      />

      {/* 6. Footer */}
      <Footer />

    </div>
  );
}
