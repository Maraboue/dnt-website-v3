import React, { useLayoutEffect } from 'react';

import { About, Closing, Docs, Footer, Header, Mechanism, Research, Token } from './containers';
import { Navbar } from './components';

const useScrollReveal = () => {
  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) return undefined;

    document.documentElement.classList.add('reveal-enabled');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
};

const App = () => {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Header />
        <About />
        <Mechanism />
        <Research />
        <Token />
        <Docs />
        <Closing />
      </main>
      <Footer />
    </>
  );
};

export default App;
