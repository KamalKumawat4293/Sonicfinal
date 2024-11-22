import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-br from-white via-teal-50/30 to-teal-100/30 pt-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-[0.02] bg-cover bg-center"></div>
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-slow-spin">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-200/20 to-emerald-200/20 blur-3xl transform rotate-12"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 mb-6">
            Get it delivered, <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">today!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Blazing fast same-day delivery at ZERO upfront cost. Start shipping at just ₹69 per order.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/get-started')}
              className="group relative px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-teal-200 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center justify-center">
                Get Started 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button 
              onClick={() => navigate('/track')}
              className="group relative px-8 py-4 bg-white rounded-xl text-gray-800 font-medium hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-100"
            >
              Track AWB
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}