import React from 'react';

function Matrix({border, colors, top, left}) {
  return (
    <ul className='block-matrix' style={{top: top, left: left}}>
       <li key={1} className='block' style={{backgroundColor: colors[0], borderTop: border, borderLeft: border, borderBottom: border}}></li>
       <li key={2} className='block' style={{backgroundColor: colors[1], borderTop: border, borderBottom: border}}></li>
       <li key={3} className='block' style={{backgroundColor: colors[2], borderTop: border, borderRight: border, borderBottom: border}}></li>
       <li key={4} className='block' style={{backgroundColor: colors[3]}}></li>
       <li key={5} className='block' style={{backgroundColor: colors[4]}}></li>
       <li key={6} className='block' style={{backgroundColor: colors[5]}}></li>
       <li key={7} className='block' style={{backgroundColor: colors[6]}}></li>
       <li key={8} className='block' style={{backgroundColor: colors[7]}}></li>
       <li key={9} className='block' style={{backgroundColor: colors[8]}}></li>
     </ul>
  )
}

export default Matrix;
