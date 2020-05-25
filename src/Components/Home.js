import React from 'react'
import Welcome from './Welcome'
import Introduction from './Introduction'
import Guide from './Guide'

const Home = () => {
    return (
      <div className='home'>
        <Welcome />
        <Introduction />
        <Guide />
      </div>
    );
  }
  
  export default Home;
  