import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Coverage() {
  const navigate = useNavigate();

  const cities = [
    {
      name: "Mumbai",
      pincodes: "120+ pincodes",
      image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=300&q=80",
      path: "/cities/mumbai"
    },
    {
      name: "Delhi",
      pincodes: "100+ pincodes",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=300&q=80",
      path: "/cities/delhi"
    },
    {
      name: "Bangalore",
      pincodes: "80+ pincodes",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=300&q=80",
      path: "/cities/bangalore"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Delivering in 300+ pincodes</h2>
          <p className="mt-4 text-xl text-gray-600">
            Fast, reliable delivery across major Indian cities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cities.map((city) => (
            <div 
              key={city.name}
              onClick={() => navigate(city.path)}
              className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <div className="absolute inset-0">
                <img 
                  src={city.image} 
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
              </div>
              <div className="relative p-6 h-full flex flex-col justify-end text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5" />
                  <h3 className="text-2xl font-bold">{city.name}</h3>
                </div>
                <div className="flex items-center gap-2 text-teal-300">
                  <CheckCircle className="h-4 w-4" />
                  <span>{city.pincodes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}