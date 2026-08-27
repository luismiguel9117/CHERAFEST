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
import Footer from './components/Footer';

import { SEPTEMBER_ACTIVITIES, INITIAL_WISHLIST, POLAROID_PHOTOS } from './data/calendarData';
import { supabase } from './lib/supabase';

const STORAGE_ACTS_KEY = 'charo_fest_activities_v1';
const STORAGE_WISH_KEY = 'charo_fest_wishlist_v1';

export default function App() {
  const [showWelcomeVideo, setShowWelcomeVideo] = useState(true);
  const [activeTab, setActiveTab] = useState('main'); // 'main' | 'wishlist'
  const [selectedDay, setSelectedDay] = useState(null);

  // Estados de datos
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

  // 1. Cargar datos en tiempo real desde Supabase al iniciar
  useEffect(() => {
    async function loadSupabaseData() {
      try {
        const { data: actsData, error: actsError } = await supabase
          .from('activities')
          .select('*')
          .order('day', { ascending: true });

        if (!actsError && actsData && actsData.length > 0) {
          const formatted = actsData.map(a => ({
            day: a.day,
            weekday: a.weekday,
            title: a.title,
            time: a.time,
            place: a.place,
            tag: a.tag,
            icon: a.icon,
            note: a.note,
            secretChallenge: a.secret_challenge,
            completed: !!a.completed
          }));
          setActivities(formatted);
          localStorage.setItem(STORAGE_ACTS_KEY, JSON.stringify(formatted));
        }

        const { data: wishData, error: wishError } = await supabase
          .from('wishlist')
          .select('*')
          .order('created_at', { ascending: false });

        if (!wishError && wishData && wishData.length > 0) {
          const formattedWish = wishData.map(w => ({
            id: w.id,
            title: w.title,
            category: w.category,
            price: w.price,
            note: w.note,
            status: w.status,
            reserved: !!w.reserved,
            image: w.image,
            link: w.link
          }));
          setWishlist(formattedWish);
          localStorage.setItem(STORAGE_WISH_KEY, JSON.stringify(formattedWish));
        }
      } catch (err) {
        console.log("Usando datos locales por desconexión:", err);
      }
    }

    loadSupabaseData();
  }, []);

  // 2. Toggle estado de reto completado en Supabase
  const handleToggleComplete = async (day) => {
    const target = activities.find(a => a.day === day);
    if (!target) return;

    const nextCompleted = !target.completed;
    const updated = activities.map(act => (act.day === day ? { ...act, completed: nextCompleted } : act));
    setActivities(updated);
    localStorage.setItem(STORAGE_ACTS_KEY, JSON.stringify(updated));

    try {
      await supabase
        .from('activities')
        .update({ completed: nextCompleted })
        .eq('day', day);
    } catch (e) {
      console.error("Error actualizando Supabase:", e);
    }
  };

  // 3. Toggle reserva de la wishlist en Supabase
  const handleToggleReserve = async (id) => {
    const target = wishlist.find(w => w.id === id);
    if (!target) return;

    const nextReserved = !target.reserved;
    const updated = wishlist.map(item => (item.id === id ? { ...item, reserved: nextReserved } : item));
    setWishlist(updated);
    localStorage.setItem(STORAGE_WISH_KEY, JSON.stringify(updated));

    try {
      await supabase
        .from('wishlist')
        .update({ reserved: nextReserved, status: nextReserved ? 'Reservado' : 'Deseado' })
        .eq('id', id);
    } catch (e) {
      console.error("Error actualizando Supabase wishlist:", e);
    }
  };

  // 4. Agregar nuevo item a la wishlist en Supabase
  const handleAddWishItem = async (newItem) => {
    const updated = [newItem, ...wishlist];
    setWishlist(updated);
    localStorage.setItem(STORAGE_WISH_KEY, JSON.stringify(updated));

    try {
      await supabase
        .from('wishlist')
        .insert([{
          id: newItem.id,
          title: newItem.title,
          category: newItem.category,
          price: newItem.price,
          note: newItem.note,
          status: newItem.status || 'Deseado',
          reserved: !!newItem.reserved,
          image: newItem.image,
          link: newItem.link
        }]);
    } catch (e) {
      console.error("Error insertando en Supabase wishlist:", e);
    }
  };

  const currentSelectedData = activities.find(a => a.day === selectedDay);

  return (
    <div className="min-h-screen flex flex-col font-quicksand bg-[#fff2f6] text-[#7a4a63] relative">
      
      {/* BORDE DE ENCAJE SUPERIOR GLOBAL (Borde.png) PERMANENTE EN TODAS LAS PÁGINAS */}
      <img
        src="/assets/borde.png"
        alt="Borde Encaje Superior"
        className="fixed top-0 left-0 right-0 w-full h-14 sm:h-20 md:h-24 object-fill z-40 pointer-events-none"
      />

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
        <main className="flex-1 pt-12 sm:pt-14">
          {/* Hero Banner CHARO FEST */}
          <Hero
            onOpenCalendar={() => {
              document.getElementById('calendario')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenWishlist={() => setActiveTab('wishlist')}
            onOpenGallery={() => {
              document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' });
            }}
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
        <main className="flex-1 pt-20 sm:pt-24">
          {/* Vista Completa de Wishlist sin la franja blanca superior */}
          <WishlistView
            wishlist={wishlist}
            onToggleReserve={handleToggleReserve}
            onAddWishItem={handleAddWishItem}
            onBackToMain={() => {
              setActiveTab('main');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
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

      {/* 5. Footer */}
      <Footer />

    </div>
  );
}
