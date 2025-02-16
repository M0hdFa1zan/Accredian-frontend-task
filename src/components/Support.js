import React from 'react'
import "./Support.css"

function Support() {
    return (
        <div className='support'>
            <div className='contain-support'>
                <div className='rainbow'><img src='../Assets/rainbow.png' /></div>
                <div className='support-img'><img src='../Assets/contact.png' /></div>
                <div className='support-text'>
                    <div className='text-one'>Want to delve deeper into the program?</div>
                    <div className='text-two'>Share your details to receive expert insights from our program team!</div>
                </div>
                <div className='btn-support'><button>Get in touch <img src='../Assets/blue-right.png' /></button></div>
            </div>
        </div>
    )
}

export default Support
