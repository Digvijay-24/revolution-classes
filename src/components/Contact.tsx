import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">
              Visit Our Campus in Patna
            </h3>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-primary">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Our Location</h4>
                  <p className="text-slate-600 mt-1">
                    1st Floor, Yarana Palace, Opp - Middle School,<br />
                    Chakbairiya, Patna - 07
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-secondary">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Call or WhatsApp</h4>
                  <p className="text-slate-600 mt-1">9682526467</p>
                  <p className="text-slate-600">7563000762</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-blue-500">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Email Us</h4>
                  <p className="text-slate-600 mt-1">info@revolutionclasses.com</p>
                  <p className="text-slate-600">admissions@revolutionclasses.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-emerald-500">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Working Hours</h4>
                  <p className="text-slate-600 mt-1">Mon - Sat: 7:00 AM - 8:00 PM</p>
                  <p className="text-slate-600">Sunday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-12 rounded-[32px] md:rounded-[40px] shadow-2xl border border-slate-100 mt-12 lg:mt-0"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h3>
              <p className="text-slate-500">Have a question? Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Interested Course</label>
                <select className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all appearance-none bg-white">
                  <option>Select a batch</option>
                  <option>Junior Foundation (4-7)</option>
                  <option>Middle School (8-9)</option>
                  <option>Class 10 Board Special</option>
                  <option>Class 11-12 PCM/PCB</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
                <Send size={20} />
                Send Message
              </button>
            </form>

            <div className="mt-10 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-6">
              <p className="text-slate-500 font-medium">Or reach us instantly via:</p>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-50 text-emerald-600 font-bold hover:bg-emerald-100 transition-all">
                  <MessageSquare size={18} />
                  WhatsApp
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
