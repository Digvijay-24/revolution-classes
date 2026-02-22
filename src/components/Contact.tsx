import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare, User, MessageCircle, CheckCircle2, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setStatus('loading');
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Get in Touch
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Let's Start Your <span className="text-primary">Success</span> Journey
            </h3>
            <p className="text-lg text-slate-600 mb-10 max-w-md">
              Have questions about our batches or teaching methodology? Our team is here to help you choose the right path.
            </p>
            
            <div className="space-y-6">
              <div className="group flex gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Our Location</h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    1st Floor, Yarana Palace, Opp - Middle School,<br />
                    Chakbairiya, Patna - 07
                  </p>
                </div>
              </div>

              <div className="group flex gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Call or WhatsApp</h4>
                  <div className="flex flex-col gap-1 mt-1">
                    <a href="tel:9682526467" className="text-slate-600 text-sm hover:text-primary transition-colors">9682526467</a>
                    <a href="tel:7563000762" className="text-slate-600 text-sm hover:text-primary transition-colors">7563000762</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 relative"
          >
            <div className="absolute top-0 right-12 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-b-full" />
            
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Enquiry Form</h3>
              <p className="text-slate-500 text-sm">Fill out the details below and we'll get back to you shortly.</p>
            </div>

            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                <p className="text-slate-500 mb-8">Thank you for your enquiry. We will contact you very soon.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full pl-12 pr-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full pl-12 pr-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="9682526467"
                      className="w-full pl-12 pr-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Your Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 text-slate-400" size={18} />
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you?"
                      className="w-full pl-12 pr-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-sm resize-none"
                    ></textarea>
                  </div>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm font-medium ml-1">Something went wrong. Please try again.</p>
                )}

                <button 
                  disabled={status === 'loading'}
                  className="w-full group bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary transition-all duration-300 shadow-xl shadow-slate-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="mt-10 pt-8 border-t border-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-400 text-xs font-medium">Prefer instant chat?</p>
              <a 
                href="https://wa.me/919682526467"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-50 text-emerald-600 text-sm font-bold hover:bg-emerald-500 hover:text-white transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp Now
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
