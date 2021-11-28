import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Resume from './components/resume';
import Portafolio from './components/portafolio';
import Contacts from './components/contacts';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portafolio />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
