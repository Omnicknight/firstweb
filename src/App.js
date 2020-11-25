import React from 'react';
import './App.css';
import AboutUs from './Components/AboutUs';
import Blog from './Components/Blog';
import Clients from './Components/Clients';
import FirstScreen from './Components/FirstScreen';
import Footer from './Components/Footer';
import Head from './Components/Head'
import Map from './Components/Map';
import Prices from './Components/Prices';
import Purchase from './Components/Purchase';
import Services from './Components/Services';

function App() {
  return (
      <div className='mainDiv'>
        <header>
          <Head />
        </header>
        <section>
          <FirstScreen />
        </section>
        <section>
          <AboutUs />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <Prices />
        </section>
        <section>
          <Purchase />
        </section>
        <section>
          <Blog />
        </section>
        <section>
          <Clients />
        </section>
        <section>
          <Map />
        </section>
        <section>
          <Footer />
        </section>
      </div>
  );
}

export default App;
