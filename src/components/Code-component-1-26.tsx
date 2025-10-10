import React from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Shield, Award } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 pt-20">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20v20h20zm0 0c11.046 0 20-8.954 20-20H30v20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="block text-amber-900">Timeless</span>
                <span className="block bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Elegance
                </span>
                <span className="block text-amber-800">Awaits</span>
              </h1>
              <p className="text-lg md:text-xl text-amber-700 max-w-lg leading-relaxed">
                Discover the finest collection of handcrafted gold jewelry, blending traditional Bengali artistry with contemporary designs. Each piece tells a story of heritage and sophistication.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2 bg-white/70 rounded-full px-4 py-2 shadow-md">
                <Shield className="w-5 h-5 text-amber-600" />
                <span className="text-sm text-amber-800">BIS Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 rounded-full px-4 py-2 shadow-md">
                <Award className="w-5 h-5 text-amber-600" />
                <span className="text-sm text-amber-800">Since 1985</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 rounded-full px-4 py-2 shadow-md">
                <Star className="w-5 h-5 text-amber-600" />
                <span className="text-sm text-amber-800">5000+ Happy Customers</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-6"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Collection
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-6"
                onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Consultation
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1602752250055-5ebb552fc3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xkJTIwamV3ZWxyeSUyMG5lY2tsYWNlfGVufDF8fHx8MTc1NzU2NzEzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury Gold Jewelry Collection"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-20 blur-xl"></div>
            
            {/* Floating review card */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">5.0 (2,450 reviews)</span>
              </div>
              <p className="text-sm text-gray-700 italic">"Absolutely stunning craftsmanship!"</p>
              <p className="text-xs text-gray-500 mt-1">- Priya Sharma</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}