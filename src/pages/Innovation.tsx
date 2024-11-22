import React from 'react';
import { Brain, Cpu, Network, Shield, Zap, BarChart3 } from 'lucide-react';

export default function Innovation() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Routing",
      description: "Smart algorithms optimize delivery routes in real-time for maximum efficiency"
    },
    {
      icon: Network,
      title: "Smart Network",
      description: "Dynamic network adaptation based on real-time conditions and demand patterns"
    },
    {
      icon: Shield,
      title: "Secure Operations",
      description: "End-to-end encryption and blockchain-based tracking for maximum security"
    },
    {
      icon: Zap,
      title: "Quick Processing",
      description: "Advanced sorting technology for rapid package processing"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Data-driven insights for optimized delivery planning"
    },
    {
      icon: Cpu,
      title: "Automated Systems",
      description: "Cutting-edge automation for faster processing and reduced errors"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-gray-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Innovation at Sonic</h1>
            <p className="mt-4 text-xl text-gray-600">
              Cutting-edge technology powering next-generation delivery
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              State-of-the-Art Distribution Hubs
            </h2>
            <p className="text-lg text-gray-600">
              Our advanced sorting centers use cutting-edge technology to process thousands 
              of packages per hour with maximum accuracy. Smart conveyor systems, automated 
              sorting, and AI-powered quality checks ensure your packages are handled with 
              precision and care.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-xl blur-xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80"
              alt="Distribution Hub"
              className="relative rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}