import React, { useState } from 'react'
import Navbar from './Navbar'
import ReferModal from './ReferModal';
import "./Hero.css"

function Hero() {

    const [open, setOpen] = useState(false);

    return (
        <div className='hero'>
            <Navbar />
            <div className='hero-contain'>
                <div className='tabs'>
                    <div>Refer</div>
                    <div>Benefits</div>
                    <div>FAQs</div>
                    <div>Support</div>
                </div>
                <div className='refer-section'>
                    <div className='money-one'><img src='../Assets/top-left.png' /></div>
                    <div className='money-two'><img src='../Assets/full-middle.png' /></div>
                    <div className='money-three'><img src='../Assets/right-top.png' /></div>
                    <div className='money-four'><img src='../Assets/full-middle.png' /></div>
                    <div className='money-five'><img src='../Assets/full-middle.png' /></div>
                    <div className='ref-details'>
                        <div className='ref-title'>Let's Learn & Earn</div>
                        <div className='ref-money'>Get a chance to win up-to <span>Rs. 15,000</span></div>
                        <div className='btn-ref' onClick={() => setOpen(true)}><button>Refer Now</button></div>
                    </div>
                    <div className='ref-img'>
                        <img src='../Assets/people.png' alt='' />
                    </div>
                </div>
            </div>
            <ReferModal open={open} onClose={() => setOpen(false)} />
        </div>
    )
}

export default Hero
