import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className={`font-bold text-xl tracking-tight text-slate-900`}>
              Revolution <span className="text-secondary">Classes</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-secondary text-slate-600`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:9682526467"
              className="bg-secondary text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-orange-600 transition-all shadow-lg shadow-orange-200"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-slate-900' : 'text-slate-900'} p-2`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="tel:9682526467"
                  className="w-full bg-primary text-white px-4 py-3 rounded-lg text-center font-semibold flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
