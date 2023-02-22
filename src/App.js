import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Portafolio from './components/portafolio';
import Contacts from './components/contacts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Portafolio />
      <Contacts />
    </div>
  );
}

export default App;
