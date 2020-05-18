import React, {useState} from 'react'
import Matrix from './Matrix'

const Cube = () => {
    const [colors, setCurrentColor] = 
    useState(['red', 'blue', 'green', 'orange', 'white', 'yellow'])

    const changeColors = () => {
        if ( colors[0] === 'red' ) {
            setCurrentColor(['yellow', 'red', 'blue', 'green', 'orange', 'white'])
        } else if ( colors[0] === 'yellow' ) {
            setCurrentColor(['white', 'yellow', 'red', 'blue', 'green', 'orange'])
        } else if ( colors[0] === 'white' ) {
            setCurrentColor(['orange', 'white', 'yellow', 'red', 'blue', 'green'])
        } else if ( colors[0] === 'orange' ) {
            setCurrentColor(['green', 'orange', 'white', 'yellow', 'red', 'blue'])
        } else if ( colors[0] === 'green' ) {
            setCurrentColor(['blue', 'green', 'orange', 'white', 'yellow', 'red'])
        } else {
            setCurrentColor(['red', 'blue', 'green', 'orange', 'white', 'yellow'])
        }
    }

    return (
        <div className='cube'>
            <Matrix color={colors[0]}/>
            <Matrix color={colors[1]}/>
            <Matrix color={colors[2]}/>
            <Matrix color={colors[3]}/>
            <Matrix color={colors[4]}/>
            <Matrix color={colors[5]}/>
            <button onClick={changeColors}>Change Color</button>
        </div>
    )
}

export default Cube;
