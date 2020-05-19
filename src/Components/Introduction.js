import React from 'react'
import Header from './Header'
import SubHeader from './SubHeader'

const Introduction = () => {
    return (
        <div className='introduction-section'>
            <Header headerText={'Introduction'}/>
            <SubHeader subHeaderText={'Basic Rules'}/>
            <p style={{fontSize:'1.1em'}}>We should aspire to rotate the cube as fewer times as possible in order to save time and prevent confusion and misorientation.
            <br/>
            Moving one (or more) of the cube's layer is called a move.
            There are a few moves that you're gonna need to memorize:
            <br/>
            <br />
            R - Rotating the Right face of the cube 90 degrees clockwise
            <br />
            L - Rotating the Left face of the cube 90 degrees clockwise
            <br /> 
            U - Rotating the Up face of the cube 90 degrees clockwise
            <br /> 
            F - Rotating the Front face of the cube 90 degrees clockwise
            <br />
            D - Rotating the Down face of the cube 90 degrees clockwise
            <br />
            B - Rotating the Back face of the cube 90 degrees clockwise
            <br />
            <br/>
            <span className="tip">Tip:</span> the first 4 moves are the most important.
            <br/>  
            Each one of these moves is performed clockwise.
            The exact same moves can be performed counter-clockwise and that would be indicated with this sign ' (e.g. R' or F')
            </p>
        </div>
    )
}

export default Introduction