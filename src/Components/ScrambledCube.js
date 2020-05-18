import React, {useState} from 'react'
import ScrambledMatrix from './ScrambledMatrix'
import CrossMatrix from './CrossMatrix'

const ScrambledCube = () => {
    const [colors, setCurrentColor] = 
    useState(['red', 'blue', 'green', 'orange', 'white', 'yellow'])

    return (
        <div className='cube' style={{width: '3rem', height:'3rem', padding: '0', transform: 'scale(0.9)', position: 'relative'}}>
            <CrossMatrix colors={colors}/>
            <ScrambledMatrix colors={['green', 'orange', 'red', 'green', 'white', 'yellow']} left={'-2.7rem'} top={'-3.5rem'}/>
            <ScrambledMatrix colors={['orange', 'blue', 'green', 'orange', 'white', 'yellow']} left={'2.65rem'} top={'-11rem'}/>
        </div>
    )
}

export default ScrambledCube;

// top: '-17rem', left: '32rem', 