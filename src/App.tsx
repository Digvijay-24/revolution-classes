/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  useEffect(() => {
    document.title = "Revolution Classes Patna – NTSE & Board Coaching (CBSE/BSEB/ICSE)";
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Faculty />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
