import React from 'react'
import confirmation from '../../images/confirmation.png'
import './styles.css'
const Confirmation = () => {


    return (
        <div>
            <div className='confirmation-text'>
                <div className='image'>
                    <img src={confirmation}></img>
                </div>

                <p className='text' >Thank you for taking an interest, we’ll be in touch shortly!</p>
            </div>
        </div>
    )


}

export default Confirmation