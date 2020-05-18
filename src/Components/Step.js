import React from 'react'
import ScrambledCube from './ScrambledCube'
import ImgCaption from './ImgCaption'

const Step = (props) => {
    return (
        <div className='step'>
            <p style={{fontSize: 'calc(6px + 2vmin)', textDecoration: 'underline'}}>{props.stepHeaderText}</p>
            <div className="step-body-wrapper">  
                <p style={{fontSize: 'calc(4px + 2vmin)', textAlign: 'left', maxWidth: '60%'}}>{props.stepBodyText}</p>
                <div className="cube-wrapper" style={{width:'10rem', height: '10rem', position: 'relative', top: '-4rem'}}>
                    <ScrambledCube />
                    <ImgCaption caption={'Figure 1'} /> 
                </div>
            </div>
        </div>
    )
}

export default Step