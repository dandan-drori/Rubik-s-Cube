import React from 'react'
import Step from './Step'

const Method = (props) => {
    return (
        <div id={props.methodId}>
            <Step
                stepHeaderText={props.stepHeaderTextOne} 
                stepBodyText={props.stepBodyTextOne} 
                tip={props.tipOne} 
                figureCaption={props.figureCaptionOne} 
                figure={props.figureOne}
            />
            <Step 
                stepHeaderText={props.stepHeaderTextTwo} 
                stepBodyText={props.stepBodyTextTwo} 
                tip={props.tipTwo} 
                figureCaption={props.figureCaptionTwo} 
                figure={props.figureTwo}
            />
            <Step 
                stepHeaderText={props.stepHeaderTextThree} 
                stepBodyText={props.stepBodyTextThree} 
                tip={props.tipThree} 
                figureCaption={props.figureCaptionThree} 
                figure={props.figureThree}
            />
            <Step 
                stepHeaderText={props.stepHeaderTextFour} 
                stepBodyText={props.stepBodyTextFour} 
                tip={props.tipFour} 
                figureCaption={props.figureCaptionFour} 
                figure={props.figureFour}
            />
            <Step 
                stepHeaderText={props.stepHeaderTextFive} 
                stepBodyText={props.stepBodyTextFive} 
                tip={props.tipFive} 
                figureCaption={props.figureCaptionFive} 
                figure={props.figureFive}
            />
        </div>
    )
}

export default Method