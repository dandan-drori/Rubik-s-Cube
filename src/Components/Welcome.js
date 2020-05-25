import React from 'react';
import Header from './Header'
import Intro from './Intro';
import WelcomeWrapper from './WelcomeWrapper'


const Welcome = () => {
    return (
        <div className='welcome'>
            <Header headerText={'Welcome to EasyRubik!'}/>
            <Intro />
            <WelcomeWrapper />
        </div>
    )
}

export default Welcome