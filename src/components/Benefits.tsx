import React from 'react';
import { TrendingUp, RotateCcw, Repeat, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Benefits() {
  const navigate = useNavigate();
  
  const benefits = [
    {
      icon: TrendingUp,
      title: "High Cart Value",
      description: "Experience a 10% Increase your AOV"
    },
    {
      icon: RotateCcw,
      title: "Reduced Returns",
      description: "Reduce Returns by 25%"
    },
    {
      icon: Repeat,
      title: "More Repeat Orders",
      description: "Earn customer's trust & loyalty"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Fast Delivery = More Business</h2>
          <p className="mt-4 text-xl text-gray-600">
            Deliver an experience that delights your customers. Enable same-day delivery and boost your ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="material-card p-6 rounded-xl bg-white text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-teal-50">
                  <Icon className="h-6 w-6 text-teal-600" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/roi-calculator')}
            className="material-button inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl hover:opacity-90"
          >
            Calculate your ROI
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}