import React, {useState} from 'react'

const StartButton = () => {

    const [active, setActive] = useState('active');

    return <button className={'start-button ' + active}
    onClick={() => {
        if (active === '') {
            setActive('active')
        } else {
            setActive('')
        }
    }}
    >Start Learning</button>
}

export default StartButton