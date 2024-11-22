import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Services() {
  const features = [
    "6-8 hour delivery",
    "300+ Pincodes Covered",
    "Live tracking & updates for customer",
    "100% Shipment Protection",
    "Quick Integrations & onboarding",
    "Dedicated Relationship Manager",
    "Next Day Exchanges*"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Sonic deliveries starting at just ₹69 per order
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
            <p className="text-sm text-gray-500 mt-4">* Terms and conditions apply</p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-xl blur-xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80"
              alt="Professional Delivery Service"
              className="relative rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}