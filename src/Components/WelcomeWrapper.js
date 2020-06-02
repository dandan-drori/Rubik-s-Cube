import React from 'react'
import Cube from './Cube';
import StartButton from './StartButton'

const WelcomeWrapper = () => {
    return (
        <div className="welcome-wrapper">
            <StartButton />
            <Cube 
                colorsOne={['yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow']}
                colorsTwo={['red','red','red','red','red','red','red','red','red']}
                colorsThree={['green','green','green','green','green','green','green','green','green']}
            />
        </div>
    )
}

export default WelcomeWrapper