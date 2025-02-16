import React, { useState } from 'react'
import ReferModal from './ReferModal';
import "./Howrefer.css"

function Howrefer() {

    const [open, setOpen] = useState(false);

    return (
        <div className='howrefer'>
            <div className='howe'>How do i <span>Refer?</span></div>
            <div className='circle-area'>
                <div className='three-images'><img id='three-circle' src='../Assets/circles.png' alt='' /></div>
                <div className='oncircle'>
                    <div className='in-circles'>
                        <div className='circle-img'><img src='../Assets/profile.png' alt='' /></div>
                        <div className='circle-detail'>Submit referrals easily via our websites referral section.</div>
                    </div>
                    <div className='in-circles'>
                        <div className='circle-img'><img src='../Assets/note.png' alt='' /></div>
                        <div className='circle-detail'>Earn rewards once your referral joins an Accredian program.</div>
                    </div>
                    <div className='in-circles'>
                        <div className='circle-img'><img src='../Assets/wallet.png' alt='' /></div>
                        <div className='circle-detail'>Referrer receives a bonus 30 days after program enrollment.</div>
                    </div>
                </div>
            </div>
            <div className='btn-reftwo'><button onClick={() => setOpen(true)}>Refer Now</button></div>
            <ReferModal open={open} onClose={() => setOpen(false)} />
        </div>
    )
}

export default Howrefer
