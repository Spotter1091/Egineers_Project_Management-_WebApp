import React from 'react'
import './ProjectManagementTool.css'

export default function ProjectManagementTool() {
    return (
        <div className='pmt-container'>
            <div className='pmt-text-wrapper'>
                <h2>Project Management Tool</h2>
                <p className='pmt-para-text'>Manage pre-site, site and post site activities seamlessly.
                    Create tenders, contracts and client communications all
                    in one place.</p>
                <button className='pmt-btn'>Learn more</button> </div>
            <div className='border-box-container'>
                <div className='border-box'><img src="../images/factory1.png" alt="factory" className='fact-img' /></div>
                
            </div>
        </div>
    )
}
