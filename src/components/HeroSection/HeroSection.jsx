import React from 'react'
import './HeroSection.css'
export default function HeroSection() {
    return (
        <>
            <div className='hero-container'>
                <div className="content-wrapper">
                    <img src="../icons/border-top-left.svg" alt="icon top right" className='icon-right' />
                    <h1 className="hero-title">
                        Digitalized Management <br /> For EPC Contractors
                    </h1>
                    <img src="../icons/border-bottom-right.svg" alt="icon bottom left" className='icon-left' />
                </div>
                <button className='hero-btn'>Learn more</button>
            </div>
            <div className="search-bar-container">
                <div className='search-bar'>
                    <img src="../icons/search-normal.svg" alt="Search icon" className='search-icon' />
                    <span className='input-content'>What type of contractor/vendor are you looking for?</span>
                    <span className='vertical-line'></span>
                    <span className='input-content-two'>
                        <img src="../icons/location.svg" alt="Location marker" className='location-marker' />
                        <span className='marker-text'>Location</span>
                    </span>
                    <button className='search-btn'>Search</button>
                </div>
            </div>
        </>
    )
}
