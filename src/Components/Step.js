import React from 'react'
// import CrossCube from './CrossCube'
import ImgCaption from './ImgCaption'

const Step = ({stepHeaderText, stepBodyText, tip, figure, figureCaption}) => {
    return (
        <div className='step'>
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