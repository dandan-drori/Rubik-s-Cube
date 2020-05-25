import React from 'react';

function Matrix(props) {
  return (
    <ul className='block-matrix' style={{top: props.top, left: props.left}}>
       <li key={1} className='block' style={{backgroundColor: props.colors[0]}}></li>
       <li key={2} className='block' style={{backgroundColor: props.colors[1]}}></li>
       <li key={3} className='block' style={{backgroundColor: props.colors[2]}}></li>
       <li key={4} className='block' style={{backgroundColor: props.colors[3]}}></li>
       <li key={5} className='block' style={{backgroundColor: props.colors[4]}}></li>
       <li key={6} className='block' style={{backgroundColor: props.colors[5]}}></li>
       <li key={7} className='block' style={{backgroundColor: props.colors[6]}}></li>
       <li key={8} className='block' style={{backgroundColor: props.colors[7]}}></li>
       <li key={9} className='block' style={{backgroundColor: props.colors[8]}}></li>
     </ul>
  )
}

export default Matrix;
