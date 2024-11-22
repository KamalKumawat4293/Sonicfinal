import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Innovation() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Innovating for Speed
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Sonic technology is built for speed & accuracy. The cutting edge sorting tech 
              deployed at our state-of-the-art sorting & distribution hubs accelerate the 
              delivery process by enabling quick dispatch, optimised routing, and real time updates.
            </p>
            <button 
              onClick={() => navigate('/innovation')}
              className="material-button inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
            >
              Explore
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-xl blur-xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
              alt="Innovation Technology"
              className="relative rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}