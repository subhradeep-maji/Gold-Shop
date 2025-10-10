import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-900 to-yellow-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="text-2xl font-bold text-white mb-2">
                <span className="text-3xl">💎</span> Suvarna Heritage
              </div>
              <p className="text-amber-100 leading-relaxed">
                Crafting timeless jewelry since 1985. We blend traditional Bengali artistry with contemporary designs to create pieces that celebrate your most precious moments.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-amber-300" />
                <span className="text-amber-100">123 Park Street, Kolkata 700016</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-300" />
                <span className="text-amber-100">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-300" />
                <span className="text-amber-100">info@suvarnaheritage.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Our Collection', href: '#products' },
                { name: 'About Us', href: '#about' },
                { name: 'Customer Reviews', href: '#reviews' },
                { name: 'Book Appointment', href: '#booking-section' },
                { name: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-amber-100 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Custom Jewelry Design',
                'Jewelry Repair & Maintenance',
                'Ring Resizing',
                'Jewelry Appraisal',
                'Wedding Collection',
                'Corporate Gifts',
              ].map((service) => (
                <li key={service}>
                  <span className="text-amber-100">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Stay Connected</h3>
            <div className="space-y-6">
              <div>
                <p className="text-amber-100 mb-4">
                  Subscribe to our newsletter for exclusive offers and new collection updates.
                </p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-white/10 border-amber-300/30 text-white placeholder:text-amber-200 focus:border-amber-300"
                  />
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white px-4">
                    Subscribe
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: '#' },
                    { icon: Instagram, href: '#' },
                    { icon: Twitter, href: '#' },
                    { icon: Youtube, href: '#' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-amber-200 hover:text-white hover:bg-amber-600 transition-all duration-300 transform hover:scale-110"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Store Hours & Certifications */}
      <div className="border-t border-amber-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center gap-4">
              <Clock className="w-6 h-6 text-amber-300" />
              <div>
                <h4 className="font-semibold text-white">Store Hours</h4>
                <p className="text-amber-100">Mon-Sat: 10AM-8PM | Sun: 11AM-6PM</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-end gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold">BIS</span>
                </div>
                <span className="text-xs text-amber-100">Certified</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold">35+</span>
                </div>
                <span className="text-xs text-amber-100">Years</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold">5K+</span>
                </div>
                <span className="text-xs text-amber-100">Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-amber-100 text-sm">
              © 2025 Suvarna Heritage. All rights reserved. | Established 1985
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-amber-100 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-amber-100 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-amber-100 hover:text-white transition-colors">
                Return Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400"></div>
    </footer>
  );
}