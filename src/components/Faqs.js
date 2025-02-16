import React from 'react'
import "./Faqs.css"

function Faqs() {
    return (
        <div className='faqs'>
            <div className='contain-faqs'>
                <div className='faq-title'>Frequently Asked <span>Questions</span></div>
                <div className='faq-detail'>
                    <div className='btns-faq'>
                        <div className='btn-elig'><button>Eligibility</button></div>
                        <div className='btn-rest'><button>How To Use?</button></div>
                        <div className='btn-rest'><button>Terms & Conditions</button></div>
                    </div>
                    <div className='points'>
                        <div className='p-one'>Do I need to have prior Product Management and Project Management experience to enroll in the program?</div>
                        <div className='p-two'>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
                            suitable for individuals from any field of work.</div>
                        <div className='p-three'>What is the minimum system configuration required?</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs
