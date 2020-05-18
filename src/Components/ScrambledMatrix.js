import React, {useState} from 'react';

const ScrambledMatrix = (props) => {
  return (
  <ul className='block-matrix' style={{left: props.left, top: props.top}}>
      <li key='1' className='block' style={{backgroundColor: props.colors[1]}}></li>
      <li key='2' className='block' style={{backgroundColor: props.colors[3]}}></li>
      <li key='3' className='block' style={{backgroundColor: props.colors[1]}}></li>
      <li key='4' className='block' style={{backgroundColor: props.colors[1]}}></li>
      <li key='5' className='block' style={{backgroundColor: props.colors[3]}}></li>
      <li key='6' className='block' style={{backgroundColor: props.colors[2]}}></li>
      <li key='7' className='block' style={{backgroundColor: props.colors[5]}}></li>
      <li key='8' className='block' style={{backgroundColor: props.colors[2]}}></li>
      <li key='9' className='block' style={{backgroundColor: props.colors[3]}}></li>
  </ul>
  )
}

export default ScrambledMatrix;