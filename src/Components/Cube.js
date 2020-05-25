import React from 'react'
import Matrix from './Matrix'

const Cube = (props) => {
    return (
        <div className='cube'>
            <Matrix colors={props.colorsOne}/>
            <Matrix colors={props.colorsTwo} top='-3.45rem' left='-2.63rem'/>
            <Matrix colors={props.colorsThree} top='-10.93rem' left='2.62rem'/>
        </div>
    )
}

export default Cube;
