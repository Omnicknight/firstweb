import React from 'react';
import './App.css';
import FirstScreen from './Components/FirstScreen';
import Head from './Components/Head'

function App() {
  return (
      <div className='mainDiv'>
        <header>
        <Head />
      </header>
      <section>
        <FirstScreen />
      </section>
      </div>
  );
}

export default App;
