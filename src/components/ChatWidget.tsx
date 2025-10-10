import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to Suvarna Heritage. I'm here to help you with any questions about our jewelry collection. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses = {
    greeting: [
      "Hello! I'm happy to help you with our jewelry collection. What are you looking for today?",
      "Hi there! Welcome to Suvarna Heritage. How can I assist you with finding the perfect jewelry piece?",
      "Greetings! I'm here to help you explore our beautiful collection of gold jewelry. What interests you?"
    ],
    products: [
      "We have a stunning collection of necklaces, earrings, rings, and bracelets. All our pieces are crafted with BIS certified gold and feature traditional Bengali motifs. Would you like to know about any specific category?",
      "Our collection includes Royal Bengal Necklaces, Heritage Gold Earrings, Traditional Bracelets, and Wedding Rings. Each piece is handcrafted by skilled artisans. What type of jewelry are you interested in?"
    ],
    prices: [
      "Our jewelry prices range from ₹18,000 for elegant studs to ₹95,000 for elaborate necklaces. Prices depend on gold weight, craftsmanship complexity, and design. Would you like specific pricing for any category?",
      "We offer jewelry for various budgets. Our rings start from ₹28,000, earrings from ₹18,000, and necklaces from ₹45,000. All prices include BIS certification and our quality guarantee."
    ],
    appointment: [
      "I'd be happy to help you book an appointment! You can schedule a consultation through our booking section on the website, or I can guide you through the process. When would you prefer to visit?",
      "Booking an appointment is easy! We're open Monday-Saturday 10 AM-8 PM, and Sunday 11 AM-6 PM. Would you like to schedule a consultation for jewelry viewing or custom design?"
    ],
    location: [
      "We're located at 123 Park Street, near Metro Station, Kolkata 700016. We're easily accessible by metro and have parking available. Our store hours are Monday-Saturday 10 AM-8 PM, Sunday 11 AM-6 PM.",
      "You can find us on Park Street in Kolkata, very close to the metro station. We've been serving customers from this location since 1985!"
    ],
    default: [
      "That's a great question! For detailed information about our jewelry, prices, and services, I recommend booking a consultation with our experts. They can provide personalized assistance based on your needs.",
      "I'd love to help you with that! Our jewelry experts can provide detailed information about our collection, customization options, and pricing. Would you like to schedule an appointment?",
      "Thank you for your interest! For the best assistance with your jewelry needs, I suggest visiting our store or booking a consultation. Our team can show you our collection and help you find the perfect piece."
    ]
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)];
    }
    
    if (message.includes('product') || message.includes('jewelry') || message.includes('collection') || message.includes('necklace') || message.includes('ring') || message.includes('earring')) {
      return predefinedResponses.products[Math.floor(Math.random() * predefinedResponses.products.length)];
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('expensive') || message.includes('cheap') || message.includes('budget')) {
      return predefinedResponses.prices[Math.floor(Math.random() * predefinedResponses.prices.length)];
    }
    
    if (message.includes('appointment') || message.includes('book') || message.includes('visit') || message.includes('consultation')) {
      return predefinedResponses.appointment[Math.floor(Math.random() * predefinedResponses.appointment.length)];
    }
    
    if (message.includes('location') || message.includes('address') || message.includes('where') || message.includes('store')) {
      return predefinedResponses.location[Math.floor(Math.random() * predefinedResponses.location.length)];
    }
    
    return predefinedResponses.default[Math.floor(Math.random() * predefinedResponses.default.length)];
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user' as const,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: 'bot' as const,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const quickQuestions = [
    "What jewelry do you have?",
    "What are your prices?",
    "Book an appointment",
    "Store location?"
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] z-50">
          <Card className="bg-white shadow-2xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white p-4">
              <CardTitle className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg">Suvarna Heritage</div>
                  <div className="text-sm opacity-90">Chat Assistant</div>
                </div>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-0">
              {/* Messages Area */}
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender === 'bot' && (
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-amber-600" />
                      </div>
                    )}
                    
                    <div
                      className={`max-w-[75%] p-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white'
                          : 'bg-amber-50 text-amber-900'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-1 opacity-70 ${
                        message.sender === 'user' ? 'text-white' : 'text-amber-600'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    
                    {message.sender === 'user' && (
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-amber-600" />
                    </div>
                    <div className="bg-amber-50 p-3 rounded-2xl">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              {messages.length === 1 && (
                <div className="p-4 border-t bg-amber-50">
                  <p className="text-sm text-amber-700 mb-3">Quick questions:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => setInputMessage(question)}
                        className="text-xs text-amber-700 border-amber-200 hover:bg-amber-100 h-8"
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 border-t bg-white">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 border-amber-200 focus:border-amber-500"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}