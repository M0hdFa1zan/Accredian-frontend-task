import React from 'react'
import { useState } from 'react';
import "./Navbar.css"

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className='navbar'>
            <div className='offer'><div className='contain-offer'>Navigate your ideal career path with tailored expert advice <div className='contact'>Contact Expert</div></div></div>
            <div className='nav-contain'>
                <div className='navleft'>
                    <div className='logo'><img src='../Assets/logo.png' alt='' /></div>
                    <div className='btn-course'><button>Courses <img src='../Assets/arrow-down.png' alt='' /></button></div>
                </div>
                <div className='explore'>
                    <button>Explore <img src='../Assets/arrow-down.png' alt='' /></button>
                </div>
                <div className={`navright ${menuOpen ? 'open' : ''}`}>
                    <div>Refer & Earn</div>
                    <div>Resources</div>
                    <div>About Us</div>
                    <div className="btn-couple">
                        <div className="btn-login">
                            <button>Login</button>
                        </div>
                        <div className="btn-try">
                            <button>Try for Free</button>
                        </div>
                    </div>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
