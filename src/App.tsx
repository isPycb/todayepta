import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Occasions } from './components/Occasions';
import { Features } from './components/Features';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export function App() {
  return (
    <SmoothScroll>
      <div className="bg-black min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Occasions />
          <CTA />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
