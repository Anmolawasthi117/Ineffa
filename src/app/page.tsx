
import React from 'react'
import {HeroParallaxDemo} from './components/HeroParallaxDemo'
import { WobbleCardDemo } from './components/WobbleCardDemo'
import { FloatingNavDemo } from './components/FloatingNavDemo'

import Footer from './components/Footer'
const page = () => {
  return (
    <div>

      <FloatingNavDemo/>
      <HeroParallaxDemo/>
      <WobbleCardDemo/>
     
      <Footer/>
      
    </div>
  )
}

export default page
