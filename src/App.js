import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Resume from './components/resume';
import Portafolio from './components/portafolio';
import Contacts from './components/contacts';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portafolio />
      <Contacts />
    </div>
  );
}

export default App;
