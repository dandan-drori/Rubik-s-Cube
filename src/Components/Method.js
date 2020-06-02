import React, {useState, useEffect, useRef} from 'react'
import Step from './Step'

const Method = (props) => {

    const next = useRef(null);
    const prev = useRef(null);
    const indicatorOne = useRef(null);
    const indicatorTwo = useRef(null);
    const indicatorThree = useRef(null);
    const indicatorFour = useRef(null);
    const indicatorFive = useRef(null);
    const indicatorSix = useRef(null);
    const indicatorSeven = useRef(null);
    let [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        if (currentStep === 1) {
            prev.current.style.display = 'none';
        }
        if (currentStep !== 1) {
            prev.current.style.display = 'block';
        }
        if (currentStep === 7) {
            next.current.style.display = 'none';
        }
        if (currentStep !== 7) {
            next.current.style.display = 'block';
        }
    })

    const moveToNextStep = () => {
        setCurrentStep(currentStep += 1)
    }

    const moveToPrevStep = () => {
        setCurrentStep(currentStep -= 1)
    }

    const moveToStep = (e) => {
        if (e.currentTarget === indicatorOne.current) {
            setCurrentStep(1)
        }
        if (e.currentTarget === indicatorTwo.current) {
            setCurrentStep(2)
        }
        if (e.currentTarget === indicatorThree.current) {
            setCurrentStep(3)
        }
        if (e.currentTarget === indicatorFour.current) {
            setCurrentStep(4)
        }
        if (e.currentTarget === indicatorFive.current) {
            setCurrentStep(5)
        }
        if (e.currentTarget === indicatorSix.current) {
            setCurrentStep(6)
        }
        if (e.currentTarget === indicatorSeven.current) {
            setCurrentStep(7)
        }
    }

    return (
        <div>
            {
                currentStep === 1 && 
                    <>
                        <Step
                            stepHeaderText={props.stepHeaderTextOne} 
                            stepBodyText={props.stepBodyTextOne} 
                            tip={props.tipOne} 
                            figureCaption={props.figureCaptionOne} 
                            figure={props.figureOne} 
                        />
                    </>                
            }
            {
                currentStep === 2 && 
                    <>
                        <Step 
                            stepHeaderText={props.stepHeaderTextTwo} 
                            stepBodyText={props.stepBodyTextTwo} 
                            tip={props.tipTwo} 
                            figureCaption={props.figureCaptionTwo} 
                            figure={props.figureTwo}
                        />
                    </>
            }
            {
                currentStep === 3 &&
                    <>
                        <Step 
                            stepHeaderText={props.stepHeaderTextThree} 
                            stepBodyText={props.stepBodyTextThree} 
                            tip={props.tipThree} 
                            figureCaption={props.figureCaptionThree} 
                            figure={props.figureThree}
                        />
                    </>
            }
            {
                currentStep === 4 && 
                    <> 
                        <Step 
                            stepHeaderText={props.stepHeaderTextFour} 
                            stepBodyText={props.stepBodyTextFour} 
                            tip={props.tipFour} 
                            figureCaption={props.figureCaptionFour} 
                            figure={props.figureFour}
                        />
                    </>
            }
            {
                currentStep === 5 &&
                <>
                    <Step 
                        stepHeaderText={props.stepHeaderTextFive} 
                        stepBodyText={props.stepBodyTextFive} 
                        tip={props.tipFive} 
                        figureCaption={props.figureCaptionFive} 
                        figure={props.figureFive}
                    />
                </>
            }
            {
                currentStep === 6 &&
                <>
                    <Step 
                        stepHeaderText={props.stepHeaderTextSix} 
                        stepBodyText={props.stepBodyTextSix} 
                        tip={props.tipSix} 
                        figureCaption={props.figureCaptionSix} 
                        figure={props.figureSix}
                    />
                </>
            }
            {
                currentStep === 7 &&
                <>
                    <Step 
                        stepHeaderText={props.stepHeaderTextSeven} 
                        stepBodyText={props.stepBodyTextSeven} 
                        tip={props.tipSeven} 
                        figureCaption={props.figureCaptionSeven} 
                        figure={props.figureSeven}
                    />
                </>
            }
            <div className='steps-navigation'>
                <div className="prev-step">
                    <p className="nav-step-header">Previous Step</p>
                    <a className="nav-step-body prev-body" ref={prev} href="#top"
                    onClick={moveToPrevStep}>
                        {
                            currentStep === 2 &&
                                props.stepHeaderTextOne
                        }
                        {
                            currentStep === 3 &&
                                props.stepHeaderTextTwo
                        }
                        {
                            currentStep === 4 &&
                                props.stepHeaderTextThree
                        }
                        {
                            currentStep === 5 &&
                                props.stepHeaderTextFour
                        }
                        {
                            currentStep === 6 &&
                                props.stepHeaderTextFive
                        }
                        {
                            currentStep === 7 &&
                                props.stepHeaderTextSix
                        }
                    </a>
                </div>
                <div className="nav-indicators">
                        <ul className="nav-indicators-list">
                            <li className="nav-indicators-item">
                                <a href="#top" className="nav-indicators-links"
                                onClick={moveToStep} ref={indicatorOne}>1</a>
                            </li>
                            <li className="nav-indicators-item">
                                <a href="#top" className="nav-indicators-links"
                                onClick={moveToStep} ref={indicatorTwo}>2</a>
                            </li>
                            <li className="nav-indicators-item">
                                <a href="#top" className="nav-indicators-links"
                                onClick={moveToStep} ref={indicatorThree}>3</a>
                            </li>
                            <li className="nav-indicators-item">
                                <a href="#top" className="nav-indicators-links"
                                onClick={moveToStep} ref={indicatorFour}>4</a>
                            </li>
                            <li className="nav-indicators-item">
                                <a href="#top" className="nav-indicators-links"
                                onClick={moveToStep} ref={indicatorFive}>5</a>
                            </li>
                            <li className="nav-indicators-item">
                                <a href="#top" className="nav-indicators-links"
                                onClick={moveToStep} ref={indicatorSix}>6</a>
                            </li>
                            <li className="nav-indicators-item">
                                <a href="#top" className="nav-indicators-links"
                                onClick={moveToStep} ref={indicatorSeven}>7</a>
                            </li>
                        </ul>
                        <progress value={currentStep} max='7'
                        className={'progress'}></progress>
                </div>
                <div className="next-step">
                    <p className="nav-step-header">Next Step</p>
                    <a className="nav-step-body next-body" ref={next} href="#top"
                    onClick={moveToNextStep}>
                        {
                            currentStep === 1 &&
                                props.stepHeaderTextTwo
                        }
                        {
                            currentStep === 2 &&
                                props.stepHeaderTextThree
                        }
                        {
                            currentStep === 3 &&
                                props.stepHeaderTextFour
                        }
                        {
                            currentStep === 4 &&
                                props.stepHeaderTextFive
                        }
                        {
                            currentStep === 5 &&
                                props.stepHeaderTextSix
                        }
                        {
                            currentStep === 6 &&
                                props.stepHeaderTextSeven
                        }
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Method