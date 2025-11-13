import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Approach from './components/Approach';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
      </main>
      <section className="final-snap-section">
        <Footer />
      </section>
    </div>
  )
}