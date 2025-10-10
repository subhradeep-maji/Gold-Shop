import React from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Star, Quote } from 'lucide-react';

export function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Salt Lake, Kolkata',
      avatar: null,
      rating: 5,
      date: '2 weeks ago',
      review: 'Absolutely stunning craftsmanship! The necklace I bought for my wedding was beyond beautiful. The traditional Bengali motifs were perfectly executed. Highly recommend Suvarna Heritage for anyone looking for authentic gold jewelry.',
      product: 'Royal Bengal Necklace'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Park Street, Kolkata',
      avatar: null,
      rating: 5,
      date: '1 month ago',
      review: 'Excellent service and quality! I purchased wedding rings for my daughter and the entire experience was wonderful. The staff was knowledgeable and helped us choose the perfect design. The BIS certification gives complete peace of mind.',
      product: 'Eternal Wedding Rings'
    },
    {
      id: 3,
      name: 'Anita Ghosh',
      location: 'New Town, Kolkata',
      avatar: null,
      rating: 5,
      date: '3 weeks ago',
      review: 'I have been a customer for over 10 years and the quality has always been exceptional. The gold purity is always as promised and the designs are unique. Recently bought earrings for Durga Puja - absolutely love them!',
      product: 'Heritage Gold Earrings'
    },
    {
      id: 4,
      name: 'Debashish Roy',
      location: 'Howrah, Kolkata',
      avatar: null,
      rating: 5,
      date: '1 week ago',
      review: 'Great experience! The booking process was smooth and the consultation was very helpful. They understood exactly what I wanted and delivered a beautiful custom piece. The craftsmanship reflects true Bengali heritage.',
      product: 'Custom Design'
    },
    {
      id: 5,
      name: 'Meera Das',
      location: 'Ballygunge, Kolkata',
      avatar: null,
      rating: 5,
      date: '2 months ago',
      review: 'Outstanding quality and service! I bought a complete jewelry set for my anniversary and every piece is perfect. The gold has a beautiful shine and the intricate work is remarkable. Worth every penny!',
      product: 'Bridal Jewelry Set'
    },
    {
      id: 6,
      name: 'Suresh Agarwal',
      location: 'Esplanade, Kolkata',
      avatar: null,
      rating: 5,
      date: '3 weeks ago',
      review: 'Highly professional team and authentic products. I appreciate the transparency in pricing and the detailed certification. The bracelet I purchased has received so many compliments. Will definitely return for future purchases.',
      product: 'Traditional Gold Bracelet'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Customers' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '35+', label: 'Years of Excellence' }
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            What Our <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">Customers</span> Say
          </h2>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Over three decades of trust, quality, and excellence. Read what our valued customers have to say about their experience with Suvarna Heritage.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-amber-700">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-amber-400 opacity-50" />
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{review.review}"
                </p>

                {/* Product Info */}
                <div className="mb-4">
                  <div className="text-sm text-amber-600 bg-amber-50 rounded-full px-3 py-1 inline-block">
                    Product: {review.product}
                  </div>
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <Avatar className="border-2 border-amber-200">
                    <AvatarImage src={review.avatar} />
                    <AvatarFallback className="bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-amber-900">{review.name}</div>
                    <div className="text-sm text-amber-600">{review.location}</div>
                    <div className="text-xs text-gray-500">{review.date}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating Summary */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-amber-900 mb-4">
                Overall Customer Rating
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-6xl font-bold text-amber-900">4.9</div>
                <div>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-current" />
                    ))}
                  </div>
                  <div className="text-amber-700">Based on 2,450+ reviews</div>
                </div>
              </div>
              <p className="text-amber-600">
                Join thousands of satisfied customers who trust Suvarna Heritage for their most precious moments.
              </p>
            </div>
            
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((stars) => {
                const percentage = stars === 5 ? 89 : stars === 4 ? 8 : stars === 3 ? 2 : stars === 2 ? 1 : 0;
                return (
                  <div key={stars} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-12">
                      <span className="text-sm text-amber-700">{stars}</span>
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    </div>
                    <div className="flex-1 bg-amber-100 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-amber-700 w-12">{percentage}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}