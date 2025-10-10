import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Phone, MapPin, Sparkles, Crown, Star } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Collections', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl">
      {/* Premium golden top bar */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-white py-3 px-4 relative overflow-hidden">
        {/* Elegant decorative elements */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-400/40 rounded-full blur-3xl transform -translate-y-1/2"></div>
          <div className="absolute top-0 right-1/3 w-24 h-24 bg-amber-400/30 rounded-full blur-2xl transform -translate-y-1/3"></div>
        </div>
        
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm relative z-10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm border border-white/30 hover:bg-white/25 transition-all duration-300">
              <Phone className="w-3.5 h-3.5 text-amber-100" />
              <span className="font-medium text-white">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm border border-white/30 hover:bg-white/25 transition-all duration-300">
              <MapPin className="w-3.5 h-3.5 text-amber-100" />
              <span className="font-medium text-white">Park Street, Kolkata</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-white/20 rounded-full px-5 py-2 backdrop-blur-sm border border-white/30">
            <Sparkles className="w-4 h-4 text-yellow-200 animate-pulse" />
            <span className="font-medium text-white">Handcrafted Gold Jewelry Since 1985</span>
            <Sparkles className="w-4 h-4 text-yellow-200 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Main header with premium design */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Stunning Logo Design */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              {/* Golden glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-35 transition-opacity duration-500"></div>
              
              {/* Main logo container with premium styling */}
              <div className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 rounded-3xl p-4 border-2 border-amber-300/50 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                <div className="flex items-center gap-4">
                  {/* Luxurious crown icon */}
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-3 transition-transform duration-500">
                      <Crown className="w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
                      <Star className="w-3 h-3 text-white fill-current" />
                    </div>
                    {/* Multiple sparkle effects */}
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full opacity-70 animate-pulse"></div>
                    <div className="absolute top-1 -left-2 w-1.5 h-1.5 bg-amber-400 rounded-full opacity-50 animate-ping"></div>
                  </div>
                  
                  {/* Premium brand name */}
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 bg-clip-text text-transparent leading-tight tracking-wide">
                      Suvarna
                    </span>
                    <span className="text-sm text-amber-600 font-semibold -mt-1 tracking-widest uppercase">
                      Heritage
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Beautiful Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-5 py-3 text-gray-700 hover:text-amber-700 font-semibold transition-all duration-400 rounded-2xl group overflow-hidden"
              >
                <span className="relative z-10">{item.name}</span>
                {/* Golden hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-100 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-400 origin-center"></div>
                {/* Animated golden underline */}
                <div className="absolute bottom-1 left-1/2 w-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 group-hover:w-8 group-hover:-translate-x-1/2 transition-all duration-400 rounded-full"></div>
                {/* Sparkle effect on hover */}
                <div className="absolute top-1 right-2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Stunning CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="outline"
              size="sm"
              className="group relative border-2 border-amber-400 text-amber-700 hover:text-white font-semibold transition-all duration-500 rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {/* Golden fill animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-2xl"></div>
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                View Collection
              </span>
            </Button>
            
            <Button 
              className="group relative bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:from-amber-700 hover:via-yellow-600 hover:to-amber-700 text-white font-semibold px-8 py-3 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 overflow-hidden border-2 border-yellow-400/50"
              onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {/* Magical shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Golden particles effect */}
              <div className="absolute top-1 left-2 w-1 h-1 bg-yellow-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
              <div className="absolute bottom-1 right-3 w-1 h-1 bg-yellow-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-200"></div>
              
              <span className="relative flex items-center gap-2 z-10">
                <Crown className="w-5 h-5" />
                Book Consultation
              </span>
            </Button>
          </div>

          {/* Beautiful Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-200"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border-amber-300 w-80">
              <div className="mt-8 space-y-6">
                {/* Mobile logo with premium styling */}
                <div className="flex items-center gap-4 pb-6 border-b border-amber-300/50">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">
                      Suvarna Heritage
                    </span>
                    <span className="text-sm text-amber-600 font-semibold">Premium Jewelry</span>
                  </div>
                </div>

                {/* Mobile navigation with golden styling */}
                <div className="space-y-3">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group flex items-center gap-4 px-5 py-4 text-gray-700 hover:text-amber-700 hover:bg-amber-100/70 rounded-2xl transition-all duration-300 font-semibold"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* Mobile CTA buttons with stunning styling */}
                <div className="space-y-4 pt-6 border-t border-amber-300/50">
                  <Button 
                    variant="outline"
                    className="group w-full border-2 border-amber-400 text-amber-700 hover:text-white rounded-2xl font-semibold py-3 overflow-hidden relative"
                    onClick={() => {
                      setIsOpen(false);
                      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      View Collection
                    </span>
                  </Button>
                  
                  <Button 
                    className="group w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white rounded-2xl shadow-xl font-semibold py-3 relative overflow-hidden"
                    onClick={() => {
                      setIsOpen(false);
                      document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Crown className="w-5 h-5" />
                      Book Consultation
                    </span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}