import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, GraduationCap, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">
                Revolution <span className="text-secondary">Classes</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Leading the way in quality education in Patna. Empowering students to achieve their dreams through expert guidance and modern teaching methods.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Courses', 'Faculty', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Batches</h4>
            <ul className="space-y-4">
              {['Junior Foundation', 'Middle School', 'Class 10 Boards', 'Class 11-12 PCM', 'Class 11-12 PCB', 'NTSE Preparation'].map((link) => (
                <li key={link}>
                  <a href="#courses" className="hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-slate-400 mb-6 text-sm">Subscribe to get the latest exam updates and study tips.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
              <button className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>© {currentYear} Revolution Classes Patna. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-current" /> in Patna
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
