import React from 'react';
import Header from './Header'
import Intro from './Intro';

const Welcome = () => {
    return (
        <div className='welcome'>
            <Header headerText={'Welcome to EasyRubik!'}/>
            <Intro />
        </div>
    )
}

export default Welcome