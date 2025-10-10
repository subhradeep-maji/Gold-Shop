import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, Clock, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const services = [
    'Jewelry Consultation',
    'Custom Design',
    'Ring Sizing',
    'Jewelry Repair',
    'Appraisal Service',
    'Wedding Collection Viewing'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.service) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Simulate booking submission
    setIsSubmitted(true);
    toast.success('Appointment booked successfully! We will contact you shortly.');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="booking-section" className="py-20 bg-gradient-to-br from-cream-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Book Your <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">Consultation</span>
          </h2>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Schedule a personalized consultation with our expert jewelers. Let us help you find or create the perfect piece for your special moments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <Card className="bg-white shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Schedule Your Appointment</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="border-amber-200 focus:border-amber-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="border-amber-200 focus:border-amber-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="border-amber-200 focus:border-amber-500"
                      required
                    />
                  </div>

                  {/* Appointment Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="border-amber-200 focus:border-amber-500"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time *</Label>
                      <Select onValueChange={(value) => handleInputChange('time', value)}>
                        <SelectTrigger className="border-amber-200 focus:border-amber-500">
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type *</Label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="border-amber-200 focus:border-amber-500">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your preferences, budget, or any specific requirements..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="border-amber-200 focus:border-amber-500 min-h-[100px]"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book Appointment
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">Appointment Confirmed!</h3>
                  <p className="text-amber-700 mb-4">
                    Thank you for choosing Suvarna Heritage. We have received your appointment request and will contact you within 24 hours to confirm the details.
                  </p>
                  <div className="bg-amber-50 rounded-lg p-4 text-left">
                    <h4 className="font-semibold text-amber-900 mb-2">Appointment Summary:</h4>
                    <ul className="space-y-1 text-sm text-amber-700">
                      <li><strong>Name:</strong> {formData.name}</li>
                      <li><strong>Date:</strong> {formData.date}</li>
                      <li><strong>Time:</strong> {formData.time}</li>
                      <li><strong>Service:</strong> {formData.service}</li>
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Information and Store Details */}
          <div className="space-y-8">
            {/* Store Information */}
            <Card className="bg-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-900">Visit Our Store</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-900">Address</h4>
                    <p className="text-amber-700">
                      123 Park Street, Near Metro Station<br />
                      Kolkata, West Bengal 700016<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-900">Phone</h4>
                    <p className="text-amber-700">+91 98765 43210</p>
                    <p className="text-amber-700">+91 33 2234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-900">Email</h4>
                    <p className="text-amber-700">info@suvarnaheritage.com</p>
                    <p className="text-amber-700">orders@suvarnaheritage.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-900">Opening Hours</h4>
                    <div className="text-amber-700">
                      <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                      <p>Sunday: 11:00 AM - 6:00 PM</p>
                      <p className="text-sm text-amber-600 mt-1">
                        *Extended hours during festive seasons
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="bg-gradient-to-br from-amber-600 to-yellow-600 text-white shadow-xl border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Why Choose Suvarna Heritage?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>BIS Certified Gold Jewelry</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>Expert Craftsmanship Since 1985</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>Lifetime Maintenance & Support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>Custom Design Services</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>Transparent Pricing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}