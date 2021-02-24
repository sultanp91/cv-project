import React from 'react';
import './App.css';
import Header from './components/Header';
import GeneralInfo from './components/GeneralInfo';
import Aboutme from './components/Aboutme';
import Career from './components/Career';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Header />
      <GeneralInfo />
      <Aboutme />
      <Career /> 
      <Education />
    </div>
  );
}

export default App;
