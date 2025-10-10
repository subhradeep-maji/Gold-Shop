import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Collections', count: 48 },
    { id: 'necklaces', name: 'Necklaces', count: 12 },
    { id: 'earrings', name: 'Earrings', count: 16 },
    { id: 'rings', name: 'Rings', count: 10 },
    { id: 'bracelets', name: 'Bracelets', count: 10 },
  ];

  const products = [
    {
      id: 1,
      name: 'Royal Bengal Necklace',
      category: 'necklaces',
      price: '₹85,000',
      originalPrice: '₹95,000',
      image: 'https://images.unsplash.com/photo-1602752250055-5ebb552fc3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xkJTIwamV3ZWxyeSUyMG5lY2tsYWNlfGVufDF8fHx8MTc1NzU2NzEzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.9,
      reviews: 87,
      isNew: true,
      description: 'Exquisite handcrafted necklace with traditional Bengali motifs'
    },
    {
      id: 2,
      name: 'Heritage Gold Earrings',
      category: 'earrings',
      price: '₹35,000',
      originalPrice: '₹42,000',
      image: 'https://images.unsplash.com/photo-1645994044915-a67a383f7c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwZWFycmluZ3MlMjBpbmRpYW4lMjBqZXdlbHJ5fGVufDF8fHx8MTc1NzYxMzMwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.8,
      reviews: 134,
      isBestseller: true,
      description: 'Elegant gold earrings perfect for special occasions'
    },
    {
      id: 3,
      name: 'Traditional Gold Bracelet',
      category: 'bracelets',
      price: '₹28,000',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1606293926249-ed22e446d476?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwYnJhY2VsZXQlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NTc2MTMzMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.7,
      reviews: 96,
      description: 'Classic gold bracelet with intricate Bengali craftsmanship'
    },
    {
      id: 4,
      name: 'Eternal Wedding Rings',
      category: 'rings',
      price: '₹65,000',
      originalPrice: '₹75,000',
      image: 'https://images.unsplash.com/photo-1584115838127-3b22ea008f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwcmluZ3MlMjB3ZWRkaW5nfGVufDF8fHx8MTc1NzYxMzMwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5.0,
      reviews: 234,
      isBestseller: true,
      description: 'Beautifully crafted wedding rings symbolizing eternal love'
    },
    {
      id: 5,
      name: 'Kolkata Classic Chain',
      category: 'necklaces',
      price: '₹45,000',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1602752250055-5ebb552fc3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xkJTIwamV3ZWxyeSUyMG5lY2tsYWNlfGVufDF8fHx8MTc1NzU2NzEzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.6,
      reviews: 67,
      description: 'Timeless gold chain inspired by Kolkata heritage'
    },
    {
      id: 6,
      name: 'Festive Gold Studs',
      category: 'earrings',
      price: '₹18,000',
      originalPrice: '₹22,000',
      image: 'https://images.unsplash.com/photo-1645994044915-a67a383f7c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwZWFycmluZ3MlMjBpbmRpYW4lMjBqZXdlbHJ5fGVufDF8fHx8MTc1NzYxMzMwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.8,
      reviews: 189,
      isNew: true,
      description: 'Delicate gold studs perfect for everyday elegance'
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-cream-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Our <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">Premium</span> Collection
          </h2>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Each piece is meticulously crafted by skilled artisans, combining traditional Bengali techniques with contemporary aesthetics to create jewelry that transcends time.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-lg'
                  : 'border-amber-300 text-amber-700 hover:bg-amber-100'
              }`}
            >
              {category.name}
              <Badge 
                variant="secondary" 
                className={`ml-2 ${
                  selectedCategory === category.id ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-700'
                }`}
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay with actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Button size="icon" variant="secondary" className="rounded-full hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full hover:bg-white">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full hover:bg-white">
                      <ShoppingBag className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-green-500 text-white px-2 py-1">New</Badge>
                    )}
                    {product.isBestseller && (
                      <Badge className="bg-red-500 text-white px-2 py-1">Bestseller</Badge>
                    )}
                    {product.originalPrice && (
                      <Badge className="bg-amber-500 text-white px-2 py-1">Sale</Badge>
                    )}
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-amber-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-amber-900">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white"
                      onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      View Details
                    </Button>
                    <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="px-8 py-4 border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Collection ({products.length}+ pieces)
          </Button>
        </div>
      </div>
    </section>
  );
}