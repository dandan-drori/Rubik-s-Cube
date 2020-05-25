import React from 'react'
import Header from './Header'
import SubHeader from './SubHeader'

const Introduction = () => {
    return (
        <div className='introduction-section'>
            <Header headerText={'Introduction'}/>
            <SubHeader subHeaderText={'Basic Rules'}/>
            <p className='intro-aspire'>We should aspire to rotate the cube as fewer times as possible in order to save time and prevent confusion and misorientation.
            <br/>
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
            <span className="tip">Tip:</span> the first 4 moves (i.e. R, L, U and F) are the most important.
            <br/>  
            <br/>
            Each one of these moves is performed clockwise.
            The same moves can be performed counter-clockwise and that would be indicated with this sign ' (e.g. R' or F')
            The same moves can also be performed as a double, meaning you need to rotate a given layer twice in a row. That would be indicated with the number 2 (e.g. R2 or F2). 
            A predefined set of 3 or more moves is called an Algorithm. An algorithm can look something like: (R U R' U'). This algorithm is called the 'Sexy Move'.
            Algorithms carry a big advantage - they are easy to memorize. Once they are memorized they can be executed very quickly without the need to think of the individual moves. 
            </p>
        </div>
    )
}

export default Introduction