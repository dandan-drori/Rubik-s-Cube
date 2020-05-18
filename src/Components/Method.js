import React from 'react'
import SubHeader from './SubHeader'
import Step from './Step'

const Method = () => {
    return (
        <div>
            <SubHeader subHeaderText={"Beginner's Method"}/>
            <Step stepHeaderText={'Step 1: Solving The Cross'} stepBodyText={"The first thing we want to do is to choose a color out of the 6 colors on the cube. In this tutorial, We're going to choose the white color as it is the standard. In order to solve the white cross, you'll need to get the cube to look something like the picture in figure 1. To do that, you need to rotate the cube using *mostly* Right, Left and Up moves."}/>
        </div>
    )
}

export default Method