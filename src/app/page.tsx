"use client";
import React from 'react'
import {HeroParallaxDemo} from './components/HeroParallaxDemo'
import { BrowserRouter as Router } from 'react-router-dom';
const page = () => {
  return (
    <div>

      <Router>
      <HeroParallaxDemo/>
      </Router>
    </div>
  )
}

export default page
