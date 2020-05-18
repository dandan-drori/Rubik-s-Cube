import React from 'react'
import Header from './Header'
import SubHeader from './SubHeader'

const Introduction = () => {
    return (
        <div className='introduction-section'>
            <Header headerText={'Introduction'}/>
            <SubHeader subHeaderText={'Basic Rules'}/>
            <p style={{fontSize:'1.1em'}}>First things first, we need to set up some ground rules.</p>
        </div>
    )
}

export default Introduction