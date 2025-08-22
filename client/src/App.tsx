import React, { useRef } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Footer from './components/Footer';
import ContactForm from './pages/ContactForm';
import Projects from "./pages/Projects.tsx";

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  return (
    <section className='px-8 sm:px-12 md:px-20 lg:px-32 relative bg-primaryBlack'>
      <div className='sticky top-0 z-50 bg-primaryBlack'>
        <Header
            homeRef={homeRef}
            servicesRef={servicesRef}
            contactRef={contactRef}
            projectRef={projectRef}
        />
      </div>

      <main className='flex-grow mt-16 mb-12'>
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
          <div ref={projectRef}>
              <Projects />
          </div>
        <div ref={contactRef}>
          <ContactForm />
        </div>
      </main>

      <Footer />
    </section>
  );
}

export default App;
