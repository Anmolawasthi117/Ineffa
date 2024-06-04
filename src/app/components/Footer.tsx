"use client";
import { Vortex } from "./ui/vortex";
import React from "react";
import {RemoveScrollBar} from 'react-remove-scroll-bar';
function Footer() {
  return (

    <Vortex
    backgroundColor="black"
    className="flex md:mt-40 md:overflow-hidden items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
  >
    
    <footer className=" text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            We are Ineffa a web agency we cover all brand requirements with our Digital marketing,Design Consultancy,Software & App Development and IT & Technical Solutions.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>

          <div className="  space-x-4">
            <ul>
            <li>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Behance
            </a>
            </li>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Dribbble
            </a>
            <li>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
            </li>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <li>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Pune, India</p>
          <p>Pune - 411028</p>
          <p>Office No. 1102, Kumar Prospera Park Near Magarpatta, </p>
          <p>Phone: (+91) 869-802-2569</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Ineffa. All rights reserved.
      </p>
    </footer>
      </Vortex>
  );
}

export default Footer;
