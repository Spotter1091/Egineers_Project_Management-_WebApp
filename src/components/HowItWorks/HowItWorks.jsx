import React from 'react'
import SwitchButtons from './SwitchButtons'
import './HowItWorks.css'

export default function HowItWorks() {
    return (
        <div className="h-works-container">
            <h2 className='h-works-title'>How it Works</h2>
            <p>Manage your EPC process from start to finish either as a contractor or a client</p>
            <div className="button-box">
                <SwitchButtons />
            </div>
            <h3 >Streamline your EPC with COG </h3>

            <div className='layout'>
                <div className='rounded-container'>
                    <h2 className="heading-one">1</h2>
                </div>
                <h4 className='sub-heading'>Sign Up and onboarding</h4>
                <div className="acct-para-text">
                <p>Create an account on the platform by providing necessary details about your firm. Complete the onboarding process, including verifying your <br />credentials and expertise.</p>
                </div>
                <img className='document-icon' src="../icons/doc.svg" alt="Document" />
            </div>
            
                <div className='rounded-container'>
                    <h2 className="heading-one">1</h2>
                </div>
                <h4 className='sub-heading'>Sign Up and onboarding</h4>
                <div className="acct-para-text">
                    <p>Create an account on the platform by providing necessary details about your firm. Complete the onboarding process, including verifying your <br />credentials and expertise.</p>
                </div>
            

            

        </div>
    )
}
