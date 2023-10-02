import React from 'react'
import Navbar from '../common/Header/Navbar'
import HeroSection from '../HeroSection/HeroSection'
import ProjectManagementTool from '../ProjectManagementTool/ProjectManagementTool'
import OurRecentActivities from '../OurRecentActivities/OurRecentActivities'
export default function Home() {
  return (
    <>
        <Navbar />
        <HeroSection/>
        <ProjectManagementTool/>
        <OurRecentActivities />
        
    </>
  )
}
