import React from 'react'
import Navbar from '../common/Header/Navbar'
import HeroSection from '../HeroSection/HeroSection'
import ProjectManagementTool from '../ProjectManagementTool/ProjectManagementTool'
import OurRecentActivities from '../OurRecentActivities/OurRecentActivities'
import HowItWorks from '../HowItWorks/HowItWorks'
export default function Home() {
  return (
    <>
        <Navbar />
        <HeroSection/>
        <ProjectManagementTool/>
        <OurRecentActivities />
        <HowItWorks />
        
    </>
  )
}
