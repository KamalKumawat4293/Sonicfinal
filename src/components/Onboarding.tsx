import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Onboarding() {
  const navigate = useNavigate();
  
  const steps = [
    "Integrate your Sales Channels within few minutes.",
    "Add your Pickup Address/s and start shipping Same Day!",
    "All orders upto 2 pm are picked & shipped, on the Same Day!",
    "Customers get the delivery within 6-8 hours of placing the order!"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Get started in minutes!</h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience a same-day delivery network built for India's growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="material-card p-6 rounded-xl bg-white">
              <div className="text-2xl font-bold text-teal-600 mb-4">
                {index + 1}
              </div>
              <p className="text-gray-600">{step}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/get-started')}
            className="material-button inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl hover:opacity-90"
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}