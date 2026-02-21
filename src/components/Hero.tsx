import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] lg:min-h-screen pt-24 lg:pt-20 flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <Star size={14} className="fill-current" />
              <span>#1 Coaching in Patna</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Join the <span className="text-primary">Revolution</span> – Best Coaching in Patna for <span className="text-secondary">Bright Futures</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Empowering students from Classes 4-12 with expert guidance, personalized attention, and a proven track record of success in CBSE, BSEB, and ICSE boards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                Enroll Now <ArrowRight size={20} />
              </button>
              <button className="bg-white text-slate-700 border-2 border-slate-100 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                View Batches
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                'Expert Faculty',
                'Small Batches',
                'Regular Tests',
              ].map((item) => (
                <div key={item} className="flex items-center justify-center lg:justify-start gap-2 text-slate-600 font-medium">
                  <CheckCircle size={18} className="text-green-500" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-white">
              <img
                src="https://picsum.photos/seed/patna-teacher/800/1000"
                alt="Founder of Revolution Classes"
                className="w-full h-[400px] md:h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <p className="font-bold text-xl">Prof. R.K. Singh</p>
                <p className="text-sm opacity-90 text-secondary font-semibold">Founder & Lead Educator</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const GraduationCap = ({ className, ...props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

export default Hero;
