import React, {useState} from 'react';

function Matrix(props) {
  const blocks = [0,1,2,3,4,5,6,7,8];
  const listItems = blocks.map((block) => {
    return <li key={block} className='block' style={{backgroundColor: props.color}}></li>;
  });

  return <ul className='block-matrix'>{listItems}</ul>;
}

export default Matrix;
