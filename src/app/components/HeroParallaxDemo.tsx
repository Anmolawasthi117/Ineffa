"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { BrowserRouter as Router } from 'react-router-dom';
export function HeroParallaxDemo() {
  return(
    <div>
      <Router>
      <HeroParallax products={products} />
      </Router>

    </div> 
  );
}
export const products = [
  {
    title: "img1",
    link: "#",
    thumbnail:
      "https://www.ineffa.in/_next/static/media/Image_1.cf8e2137.svg",
  },
  {
    title: "img 2",
    link: "#",
    thumbnail:
    "https://www.ineffa.in/_next/static/media/Image_2.22fef848.svg",
  },
  {
    title: "img3",
    link: "#",
    thumbnail:
      "https://www.ineffa.in/_next/static/media/Image_2.22fef848.svg",
  },

  {
    title: "img 4",
    link: "#",
    thumbnail:
      "https://www.ineffa.in/_next/static/media/Image_4.0c023c77.svg",
  },
  {
    title: "img1",
    link: "#",
    thumbnail:
      "https://www.ineffa.in/_next/static/media/Image_1.cf8e2137.svg",
  },
  {
    title: "img 2",
    link: "#",
    thumbnail:
    "https://www.ineffa.in/_next/static/media/Image_2.22fef848.svg",
  },
  {
    title: "img3",
    link: "#",
    thumbnail:
      "https://www.ineffa.in/_next/static/media/Image_2.22fef848.svg",
  },

  {
    title: "img 4",
    link: "#",
    thumbnail:
      "https://www.ineffa.in/_next/static/media/Image_4.0c023c77.svg",
  },];
  
