import React from 'react';
import { MapPin, Package, Users, Building2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Mumbai() {
  const navigate = useNavigate();

  const stats = [
    {
      icon: Building2,
      label: "Pincodes Covered",
      description: "Extensive coverage across Mumbai"
    },
    {
      icon: Users,
      label: "Delivery Partners",
      description: "Large network of trained partners"
    },
    {
      icon: Package,
      label: "Daily Deliveries",
      description: "Thousands of successful deliveries"
    }
  ];

  const areas = [
    "Andheri", "Bandra", "Colaba", "Dadar",
    "Goregaon", "Juhu", "Kandivali", "Malad",
    "Powai", "Worli"
  ];

  return (
    <div className="pt-16">
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1200&q=80"
            alt="Mumbai Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-16">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Mumbai</h1>
            <p className="text-xl text-teal-300">Extensive pincode coverage</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map(({ icon: Icon, label, description }) => (
            <div key={label} className="material-card p-6 rounded-xl text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-teal-50">
                  <Icon className="h-6 w-6 text-teal-600" />
                </div>
              </div>
              <div className="text-xl font-medium text-gray-900 mb-2">{label}</div>
              <div className="text-gray-600">{description}</div>
            </div>
          ))}
        </div>

        <div className="material-card p-8 rounded-xl mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-teal-600" />
                <span className="text-gray-600">{area}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-teal-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Experience the fastest delivery service in Mumbai. Sign up now and transform 
                your logistics operations.
              </p>
              <button 
                onClick={() => navigate('/get-started')}
                className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-xl blur-xl opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?auto=format&fit=crop&w=800&q=80"
                alt="Mumbai Delivery"
                className="relative rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}