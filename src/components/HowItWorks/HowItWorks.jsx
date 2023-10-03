import React from 'react'
import SwitchButtons from './SwitchButtons'
import './HowItWorks.css'

export default function HowItWorks() {
  return (
      <div className="h-works-container">
          <h2 >How it Works</h2>
          <p>Manage your EPC process from start to finish either as a contractor or a client</p>
          <div className="button-box">
              <SwitchButtons />
          </div>
          <h3>Streamline your EPC with COG </h3>
      </div>
  )
}
