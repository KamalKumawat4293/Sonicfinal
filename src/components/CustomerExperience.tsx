import React from 'react';
import { Clock, MapPin, Bell, RefreshCcw, Shield } from 'lucide-react';

export default function CustomerExperience() {
  const features = [
    {
      icon: Clock,
      title: "Accurate ETAs",
      description: "Precise delivery time estimates"
    },
    {
      icon: MapPin,
      title: "Live Tracking",
      description: "Real-time package location"
    },
    {
      icon: Bell,
      title: "Real-time Updates",
      description: "Instant delivery notifications"
    },
    {
      icon: RefreshCcw,
      title: "Easy Reschedules",
      description: "Flexible delivery options"
    },
    {
      icon: Shield,
      title: "100% Guarantee",
      description: "Assured delivery protection"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Elevate the Delivery Experience
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Enhance the delivery experience for your customers by providing real-time updates, 
            live tracking, accurate ETAs, easy reschedules, and 100% delivery guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="material-card p-6 rounded-xl bg-white">
              <div className="p-3 rounded-full bg-teal-50 w-fit mb-4">
                <Icon className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}