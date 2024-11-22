import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Solutions: [
      { name: 'Same Day Delivery', path: '/services/same-day' }
    ],
    Resources: [
      { name: 'Check Serviceability', path: '/coverage' },
      { name: 'TAT Calculator', path: '/calculators' },
      { name: 'ROI Calculator', path: '/roi-calculator' },
      { name: 'API Docs', path: '/services/api' }
    ],
    Company: [
      { name: 'About', path: '/about' },
      { name: 'Innovation', path: '/innovation' },
      { name: 'Careers', path: '/careers' },
      { name: 'Blog', path: '/blog' }
    ],
    'Contact us': [
      { name: 'contact@gosonic.in', path: 'mailto:contact@gosonic.in' },
      { name: '1800-123-4567', path: 'tel:1800-123-4567' }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-white mb-4">
              <Zap className="h-6 w-6 text-white" />
              <span className="text-xl font-semibold">goSonic</span>
            </Link>
            <p className="text-sm text-white/90 mb-4">
              Revolutionizing same-day delivery across India with technology and innovation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-white/90" />
                <a href="mailto:contact@gosonic.in" className="text-sm text-white/90 hover:text-white">contact@gosonic.in</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white/90" />
                <a href="tel:1800-123-4567" className="text-sm text-white/90 hover:text-white">1800-123-4567</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white/90" />
                <span className="text-sm text-white/90">Mumbai, India</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/90">
            © {new Date().getFullYear()} goSonic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}