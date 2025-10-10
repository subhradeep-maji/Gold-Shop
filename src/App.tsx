import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Reviews } from './components/Reviews';
import { BookingSection } from './components/BookingSection';
import { ChatWidget } from './components/ChatWidget';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b8860b' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20v20h20zm0 0c11.046 0 20-8.954 20-20H40v20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }} />
        </div>
        
        {/* Hero Section */}
        <Hero />
        
        {/* Products Section */}
        <Products />
        
        {/* Reviews Section */}
        <Reviews />
        
        {/* Booking Section */}
        <BookingSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Chat Widget */}
      <ChatWidget />
      
      {/* Toast Notifications */}
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: 'linear-gradient(135deg, #d4af37 0%, #eab308 100%)',
            color: 'white',
            border: '1px solid #f7d575',
            borderRadius: '8px',
            boxShadow: '0 8px 32px rgba(184, 134, 11, 0.3)',
          },
        }}
      />
    </div>
  );
}