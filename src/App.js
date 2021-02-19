import React from 'react';
import './App.css';
import Header from './components/Header';
import GeneralInfo from './components/GeneralInfo';
import Aboutme from './components/Aboutme';

function App() {
  return (
    <div className="App">
      <Header/>
      <GeneralInfo/>
      <Aboutme/>
    </div>
  );
}

export default App;
