import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const WhatsAppButton = () => {
  const phoneNumber = "919682526467"; // Updated number
  const message = "Hi Revolution Classes, I'm interested in enrolling for a batch. Please provide more details.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-emerald-600 transition-all group"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl shadow-xl border border-slate-100 font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
      </span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
    </motion.a>
  );
};

export default WhatsAppButton;
