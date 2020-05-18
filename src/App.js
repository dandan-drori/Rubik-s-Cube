import React from 'react';
import './App.css';
import Cube from './Components/Cube';
import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome';
import Guide from './Components/Guide';
import Introduction from './Components/Introduction';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Welcome />
      <Introduction />
      <Guide />
    </div>
  );
}

export default App;
