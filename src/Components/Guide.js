import React, {useState} from 'react'
import Header from './Header'
import Method from './Method'
import SubHeader from './SubHeader'
import Cube from './Cube'

const Guide = () => {
    const [subHeaderText] = useState("Beginner's Method");
    const [beginner] = useState({
        stepOne: {
            stepHeaderText: "Step 1: Solving The Cross",
            stepBodyText: 
            `The first thing we want to do is choose a color out of the 6 colors on
             the cube. In this tutorial, we're going to choose the white color as it is the
             standard. Then, we'll need to find the right pieces to put our cross together.
             These are called 'Edge' pieces (not to be confused with 'Corner' pieces), with
             a white sticker on one of the two sides. Then, in order to solve the white cross,
             you'll need to get the cube to look something like the picture in figure 1. To
             do that, you need to rotate the cube using *mostly* Right, Left and Up moves.`,
            tip: <p className='tip-wrapper'>
                <span className="tip">Tip:</span> Starting out, we recommend trying to solve the
                 cross when it is facing up, as seeing what and how pieces are moving is essential
                 for a fast learning process. </p>,
            figureCaption: 'figure 1',
            figure: 
            <Cube 
                colorsOne={['red','white','green','white','white','white','red','white','orange']}
                colorsTwo={['blue','green','yellow','red','green','orange','blue','yellow','blue']}
                colorsThree={['green','red','red','green','red','blue','white','green','orange']}
            />
        },
        stepTwo: {
            stepHeaderText: "Step 2: Solving The Corners",
            stepBodyText: <span>Once we have our white cross, the next step is to solve the white
             corners. We can do that by bringing a corner piece directly bellow the slot where it
             is supposed to go, and then doing one of these two algorithms: <strong>(R' D' R)</strong>
             when the slot where the piece should go is on the right and the white sticker on the corner piece
             is facing right or <strong>(L D L')</strong> when the slot where the piece should go is on the left
             and the white sticker on the corner piece is facing.
             if a corner is directly bellow the slot where it is supposed to go, and its white
             sticker is facing down, we need to move it so the white sticker will face either
             left or right. We can do that with one of these two algorithms: <strong>(R' D2 R D)</strong>
             when the slot where the piece should go is on the right, or <strong>(L D2 L' D')</strong> when the slot
             where the piece should go is on the left.</span>,
            tip: <p className='tip-wrapper'><span className="tip">Tip:</span> Starting out, we recommend
            trying to solve the cross when it is facing up.</p>,
            figureCaption: 'figure 2',
            figure:
            <Cube 
                colorsOne={['white','white','white','white','white','white','white','white','white']}
                colorsTwo={['green','green','green','red','green','blue','blue','blue','orange']}
                colorsThree={['red','red','red','orange','red','blue','green','yellow','yellow']}
            />
        },
        stepThree: {
            stepHeaderText: "Step 3: F2L - Solving The Edges",
            stepBodyText: <span>Once we have our cross and our corners, the first thing we
                should do is to flip the cube so that the white face is facing down and
                the yellow face is facing up. We do that because it helps us focus on the
                important things in the next steps. Now, we're going to focus on the 4 
                pieces left unsolved in the second layer. These pieces can be in either one
                of three places: at the top layer, at the second layer and inserted correctly or
                at the second layer but not inserted correctly. If a piece is inserted correctly
                we will leave it there and move on to solve the other pieces. If a piece is at 
                the second layer but not inserted correctly, we need to get it to the top layer, 
                and we can do that by placing the cube so that the piece is at the front on
                the right side and do this algorithm: <strong>(U R U R' U' F' U' F)</strong> or when the piece
                is at the front on the left side and do this algorithm: <strong>(U' L' U' L U F U F')</strong>.
                These algorithms will switch between the top edge piece and either the left or
                right edge piece, depending on which algorithm you use.</span>,
            tip: <p className='tip-wrapper'><span className="tip">Tip:
            </span><span className='tip-text'> Starting out, we recommend trying to solve the cross when it is facing up.</span></p>,
            figureCaption: 'figure 3',
            figure:
            <Cube 
                colorsOne={['red','red','green','orange','yellow','blue','orange','green','yellow']}
                colorsTwo={['green','yellow','orange','red','red','red','red','red','red']}
                colorsThree={['blue','yellow','yellow','green','green','green','green','green','green']}
            />
        },
        stepFour: {
            stepHeaderText: "Step 4: Solving The Yellow Cross",
            stepBodyText: <span>Once the first two layers are solved, our next focus is the yellow face. 
                The current state of the yellow face could only be 1 of 4 states: a dot (figure 4), L shape (figure 5),
                a straight line (figure 6) or a cross (figure 7). If the current state is a cross, we move on to the
                next step. If the state is L shape, we do this algorithm: <strong>(F U R U' R' F')</strong>. If the state is a line, we do this algorithm:
                <strong> (F R U R' U' F')</strong>. If the state is a dot, we do both the L shape and the line algorithms, regardless of order.  
            </span>,
            tip: <p className='tip-wrapper'><span className="tip">Tip:</span><span className='tip-text'> Notice how the current
            state is not always exactly an L shape or a line and there might be a couple other pieces added to that shape.</span></p>,
            figureCaption: '',
            figure:
            <div className='step-cubes'>
                <div>
                    <Cube 
                        colorsOne={['red','red','green','orange','yellow','blue','orange','green','yellow']}
                        colorsTwo={['green','yellow','orange','red','red','red','red','red','red']}
                        colorsThree={['blue','yellow','yellow','green','green','green','green','green','green']}
                    />
                    <p className="img-caption">Figure 4</p>
                </div>
                <div>
                    <Cube 
                        colorsOne={['red','yellow','green','yellow','yellow','blue','orange','green','yellow']}
                        colorsTwo={['green','yellow','orange','red','red','red','red','red','red']}
                        colorsThree={['blue','yellow','yellow','green','green','green','green','green','green']}
                    />
                    <p className="img-caption">Figure 5</p>
                </div>
                <div>
                    <Cube 
                        colorsOne={['red','red','green','yellow','yellow','yellow','orange','green','yellow']}
                        colorsTwo={['green','yellow','orange','red','red','red','red','red','red']}
                        colorsThree={['blue','orange','yellow','green','green','green','green','green','green']}
                    />
                    <p className="img-caption">Figure 6</p>
                </div>
                <div>
                    <Cube 
                        colorsOne={['red','yellow','green','yellow','yellow','yellow','orange','yellow','yellow']}
                        colorsTwo={['green','blue','orange','red','red','red','red','red','red']}
                        colorsThree={['blue','green','yellow','green','green','green','green','green','green']}
                    />
                    <p className="img-caption">Figure 7</p>
                </div>
            </div>
        },
        stepFive: {
            stepHeaderText: "Step 5: Solving The Yellow Face",
            stepBodyText: <span>For this step, you only need one algorithm: <strong>
                (R U R' U R U2 R')</strong> but we're going to use it a few times, each
                time with the cube oriented differently. Doing this algorithm when the
                cube is oriented like figure 8, will solve the yellow face, so our goal
                is to get the yellow face to look like figure 8. If the yellow face looks
                like figure 9, execute the algorithm once, do a <strong>(y2)</strong> - 
                rotate the cube 180 degrees, and execute it again to solve the yellow face.
                If the yellow face looks like figure 10, execute the algorithm twice to solve
                the yellow face. If the yellow face looks like figure 11, execute
                the algorithm once, do a <strong>(y)</strong> - rotate the cube 90 degrees clockwise, then
                solve like figure 9. If the yellow face looks like figure 12, execute the
                algorithm once, then solve like figure 9. If the yellow face looks like
                figure 13, execute the algorithm once, do a <strong>(y')</strong> - rotate the cube 90 degrees
                counter-clockwise, then execute the algorithm again. If the yellow face looks
                like figure 14, do the algorithm once, do a <strong>(y')</strong> - rotate the cube 90 degrees
                counter-clockwise, then solve like figure 9.</span>,
            tip: <p className='tip-wrapper'><span className="tip">Tip:</span><span className='tip-text'> Notice how the current
            state is not always exactly an L shape or a line and there might be a couple other pieces added to that shape.</span></p>,
            figureCaption: '',
            figure:
            <div className='step-cubes step-5-cubes'>
                <div>
                    <Cube 
                        colorsOne={['red','yellow','green','yellow','yellow','yellow','yellow','yellow','red']}
                        colorsTwo={['green','blue','yellow','red','red','red','red','red','red']}
                        colorsThree={['blue','green','yellow','green','green','green','green','green','green']}
                    />
                    <p className="img-caption">Figure 8</p>
                </div>
                <div>
                    <Cube 
                        colorsOne={['orange','yellow','green','yellow','yellow','yellow','yellow','yellow','red']}
                        colorsTwo={['red','green','green','red','red','red','red','red','red']}
                        colorsThree={['yellow','orange','orange','green','green','green','green','green','green']}
                    />
                    <p className="img-caption">Figure 9</p>
                </div>
                <div>
                    <Cube 
                        colorsOne={['orange','yellow','orange','yellow','yellow','yellow','red','yellow','red']}
                        colorsTwo={['blue','red','green','red','red','red','red','red','red']}
                        colorsThree={['yellow','blue','yellow','green','green','green','green','green','green']}
                    />
                    <p className="img-caption">Figure 10</p>
                </div>
                <div>
                    <Cube 
                        colorsOne={['blue','yellow','yellow','yellow','yellow','yellow','red','yellow','yellow']}
                        colorsTwo={['yellow','orange','green','red','red','red','red','red','red']}
                        colorsThree={['orange','blue','blue','green','green','green','green','green','green']}
                    />
                    <p className="img-caption">Figure 11</p>
                </div>
                <div>
                    <Cube 
                        colorsOne={['yellow','yellow','blue','yellow','yellow','yellow','green','yellow','yellow']}
                        colorsTwo={['yellow','red','red','red','red','red','red','red','red']}
                        colorsThree={['green','green','yellow','green','green','green','green','green','green']}
                    />
                    <p className="img-caption">Figure 12</p>
                </div>
                <div>
                    <Cube 
                        colorsOne={['red','yellow','blue','yellow','yellow','yellow','orange','yellow','blue']}
                        colorsTwo={['green','blue','yellow','red','red','red','red','red','red']}
                        colorsThree={['orange','orange','red','green','green','green','green','green','green']}
                    />
                    <p className="img-caption">Figure 13</p>
                </div>
                <div>
                    <Cube 
                        colorsOne={['yellow','yellow','yellow','yellow','yellow','yellow','green','yellow','blue']}
                        colorsTwo={['yellow','orange','yellow','red','red','red','red','red','red']}
                        colorsThree={['orange','green','blue','green','green','green','green','green','green']}
                    />
                    <p className="img-caption">Figure 14</p>
                </div>
            </div>
        },
        stepSix: {
            stepHeaderText: "Step 6: Solving The Top Layer's Corners",
            stepBodyText: <span>Our goal in this step is to orient the top layer's corners.
                To do that, we are going to use one algorithm: <strong>(R' F R' B2 R F' R' B2 R2)</strong>.
                Executing this algorithm when the cube looks like figures 15 and 16 (showing both sides),
                will solve the said corners. If the cube does not look like figures 15 and 16, we are
                going to look for a set of 'headlights' (figure 17), position the cube so that the
                'headlights' are facing away from us (at the back) and execute the algorithm. That will
                get the cube to look like figures 15 and 16, and then we can solve it by using the
                algorithm once again. But what if I can't find a set of headlights? In that case, 
                we're going to execute the algorithm once - that will give us a set of headlights,
                then put them at the back, execute the algorithm, and then execute it again. 
            </span>,
            tip: <p className='tip-wrapper'><span className="tip">Tip:</span> Starting out, we recommend
            trying to solve the cross when it is facing up.</p>,
            figureCaption: '',
            figure:
            <div className='step-cubes'>
                <div>
                    <Cube 
                        colorsOne={['yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow']}
                        colorsTwo={['blue','red','red','red','red','red','red','red','red']}
                        colorsThree={['green','green','blue','green','green','green','green','green','green']}
                    />
                    <p className="img-caption">Figure 15</p>
                </div>
                <div>
                    <Cube 
                        colorsOne={['yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow']}
                        colorsTwo={['red','orange','green','orange','orange','orange','orange','orange','orange']}
                        colorsThree={['orange','blue','orange','blue','blue','blue','blue','blue','blue']}
                    />
                    <p className="img-caption">Figure 16</p>
                </div>
                <div>
                    <Cube 
                        colorsOne={['yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow']}
                        colorsTwo={['red','orange','green','orange','orange','orange','orange','orange','orange']}
                        colorsThree={['orange','blue','orange','blue','blue','blue','blue','blue','blue']}
                        border='5px solid red'
                    />
                    <p className="img-caption">Figure 17</p>
                </div>
                <div>
                    <Cube 
                        colorsOne={['red','yellow','green','yellow','yellow','yellow','orange','yellow','yellow']}
                        colorsTwo={['green','blue','orange','red','red','red','red','red','red']}
                        colorsThree={['blue','green','yellow','green','green','green','green','green','green']}
                    />
                    <p className="img-caption">Figure 18</p>
                </div>
            </div>
        },
        stepSeven: {
            stepHeaderText: "Step 7: Solving The Top Layer's Edges",
            stepBodyText: <span>In the final step, we are going to solve the remaining misoriented edges.
                To do this, we are going to look for a 3x3 block (figure 21), and but it at the back.
                We'll use two similar algorithms: <strong>(F2 U L R' F2 R L' U' F2)</strong> and <strong>(F2 U' R' L F2 L' R U F2)</strong>.
                If the top layer looks like figure 19, execute the first algorithm. If the top layer
                looks like figure 20, execute the second algorithm. If we can't find a 3x3 block, we'll
                execute either one of the algorithms for this step, and that will create the 3x3 block
                for us, then we can solve regularly.
            </span>,
            tip: <p className='tip-wrapper'><span className="tip">Tip:</span> Starting out, we recommend
            trying to solve the cross when it is facing up.</p>,
            figureCaption: '',
            figure:
            <div className='step-cubes'>
                <div>
                    <Cube 
                        colorsOne={['yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow']}
                        colorsTwo={['red','blue','red','red','red','red','red','red','red']}
                        colorsThree={['green','red','green','green','green','green','green','green','green']}
                    />
                    <p className="img-caption">Figure 19</p>
                </div>
                <div>
                    <Cube 
                        colorsOne={['yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow']}
                        colorsTwo={['red','green','red','red','red','red','red','red','red']}
                        colorsThree={['green','blue','green','green','green','green','green','green','green']}
                    />
                    <p className="img-caption">Figure 20</p>
                </div>
                <div>
                    <Cube 
                        colorsOne={['yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow','yellow']}
                        colorsTwo={['orange','red','orange','orange','orange','orange','orange','orange','orange']}
                        colorsThree={['blue','blue','blue','blue','blue','blue','blue','blue','blue']}
                        border='5px solid red'
                    />
                    <p className="img-caption">Figure 21</p>
                </div>
                <div>
                    <Cube 
                        colorsOne={['red','yellow','green','yellow','yellow','yellow','orange','yellow','yellow']}
                        colorsTwo={['green','blue','orange','red','red','red','red','red','red']}
                        colorsThree={['blue','green','yellow','green','green','green','green','green','green']}
                    />
                    <p className="img-caption">Figure 22</p>
                </div>
            </div>
        }
    })
    return (
        <div className='guide'>
            <Header headerText={'Solving Guide'} />
            <SubHeader subHeaderText={subHeaderText}/>
            <Method 
              methodId={beginner.stepOne.methodId}
              stepHeaderTextOne={beginner.stepOne.stepHeaderText}
              stepBodyTextOne={beginner.stepOne.stepBodyText} 
              tipOne={beginner.stepOne.tip} 
              figureOne={beginner.stepOne.figure} 
              figureCaptionOne={beginner.stepOne.figureCaption}
              stepHeaderTextTwo={beginner.stepTwo.stepHeaderText}
              stepBodyTextTwo={beginner.stepTwo.stepBodyText} 
              tipTwo={beginner.stepTwo.tip} 
              figureTwo={beginner.stepTwo.figure} 
              figureCaptionTwo={beginner.stepTwo.figureCaption}
              stepHeaderTextThree={beginner.stepThree.stepHeaderText}
              stepBodyTextThree={beginner.stepThree.stepBodyText} 
              tipThree={beginner.stepThree.tip} 
              figureThree={beginner.stepThree.figure} 
              figureCaptionThree={beginner.stepThree.figureCaption}
              stepHeaderTextFour={beginner.stepFour.stepHeaderText}
              stepBodyTextFour={beginner.stepFour.stepBodyText} 
              tipFour={beginner.stepFour.tip} 
              figureFour={beginner.stepFour.figure} 
              figureCaptionFour={beginner.stepFour.figureCaption}
              stepHeaderTextFive={beginner.stepFive.stepHeaderText}
              stepBodyTextFive={beginner.stepFive.stepBodyText} 
              tipFive={beginner.stepFive.tip} 
              figureFive={beginner.stepFive.figure} 
              figureCaptionFive={beginner.stepFive.figureCaption}
              stepHeaderTextSix={beginner.stepSix.stepHeaderText}
              stepBodyTextSix={beginner.stepSix.stepBodyText} 
              tipSix={beginner.stepSix.tip} 
              figureSix={beginner.stepSix.figure} 
              figureCaptionSix={beginner.stepSix.figureCaption}
              stepHeaderTextSeven={beginner.stepSeven.stepHeaderText}
              stepBodyTextSeven={beginner.stepSeven.stepBodyText} 
              tipSeven={beginner.stepSeven.tip} 
              figureSeven={beginner.stepSeven.figure} 
              figureCaptionSeven={beginner.stepSeven.figureCaption}
            />
        </div>
    )
}

export default Guide
