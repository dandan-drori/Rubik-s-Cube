import React from 'react'
// import CrossCube from './CrossCube'
import ImgCaption from './ImgCaption'

const Step = ({stepHeaderText, stepBodyText, tip, figure, figureCaption, noneOrBlock}) => {
    return (
        <div className='step' style={{display: noneOrBlock}}>
            <p className='step-header'>{stepHeaderText}</p>
            <div className="step-body-wrapper">
                <div className="step-body-text-wrapper">
                    <p className='step-body-text'>{stepBodyText}</p>
                    {tip}
                </div>
                <div className="cube-wrapper">
                    {figure}
                    <ImgCaption figureCaption={figureCaption} /> 
                </div>
            </div>
        </div>
    )
}

export default Step