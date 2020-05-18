import React from 'react'


const ImgCaption = (props) => {
    return (
        <p className='img-caption' style={{fontSize: '1.1em', fontWeight: '400', marginTop: '10rem', marginLeft: '1rem', color: '#fff'}}>
            {props.caption}
        </p>
    )
}

export default ImgCaption