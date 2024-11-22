import React from 'react';
import { Baby, Sparkles, Dumbbell, Laptop, ShoppingBag, Shirt, Home, Dog, Package, Heart } from 'lucide-react';

export default function Industries() {
  const industries = [
    { icon: Baby, name: "Baby Care" },
    { icon: Sparkles, name: "Beauty & Cosmetics" },
    { icon: Dumbbell, name: "Sports goods" },
    { icon: Laptop, name: "Electronics" },
    { icon: ShoppingBag, name: "Footwear" },
    { icon: Shirt, name: "Apparels" },
    { icon: Home, name: "Home & Living" },
    { icon: Dog, name: "Pet care" },
    { icon: Package, name: "FMCG" },
    { icon: Heart, name: "Healthcare" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Industries</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {industries.map(({ icon: Icon, name }) => (
            <div key={name} className="material-card p-6 rounded-xl bg-white text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-teal-50">
                  <Icon className="h-6 w-6 text-teal-600" />
                </div>
              </div>
              <h3 className="text-gray-900">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}