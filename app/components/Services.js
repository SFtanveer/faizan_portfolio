"use client"
import React from 'react'
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

const Services = () => {

    const aboutItems = [
        {
          symbol: "/ui-ux.png",
          title: "UI/UX Design",
          description: "I will design intuitive, visually appealing interfaces for websites and web apps. I ensure seamless user experiences with a focus on clarity, accessibility, and modern aesthetics. This includes:",
          bullets: [  // Array instead of object
            "Custom UI Design – Modern, aesthetic layouts",
            "Interactive Prototypes – Figma-based workflows",
            "Mobile & Desktop – Fully responsive experiences",
          ]
        },
        {
            symbol: "/figma.png",
            title: "Figma to Web Conversion",
            description: "I will transform your Figma designs into responsive websites using HTML, CSS, and JavaScript (React/Next.js).This includes:",
            bullets: [  // Array instead of object
              " Semantic HTML5/CSS3 – Clean, accessible code",
              "Mobile-First Design – Flawless on all devices",
              "Optimized Performance – Fast-loading pages",
              "React/Next.js – Dynamic, modern web apps"
            ]
          },
          {
            symbol: "/api-integration.png",
            title: "API Integration and Web Dashboard",
            description: "I will integrate APIs (Fetch/Axios) to connect third-party services like trading bots, or analytics tools into a responsive dashboard. This includes:",
            bullets: [  // Array instead of object
              "Backend Integration – Secure sign-in/signup & data fetching.",
              "Error Handling – Smooth API failure recovery & user-friendly alerts",
              "Form Validation – Real-time input checks for seamless UX",
            ]
          },
      ];

const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1},
  };


  return (
    <div className="pt-20 md:mx-auto mx-2" id='services'>
      <div className='container mx-auto flex flex-row justify-center'>
<div>
          <div className="container flex justify-center mb-6">
            <h1 className="text-5xl md:text-8xl text-center font-[oswald]">Services Offered</h1>
          </div>
          <div className="container grid grid-cols-1 text-center justify-center gap-2">
            
            <div ref={ref} className="flex justify-center gap-8 flex-wrap overflow-x-hidden">
              {aboutItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.5, delay: ((index*1)+0.5) }}
                  className="my-4 p-4 max-w-[400px] text-justify rounded-2xl shadow-lg shadow-red-900/50 hover:scale-[1.05] active:scale-[1.05] transition-transform duration-500"
                >
                  <div className="my-4">
                    <Image
                      src={item.symbol}
                      width={30}
                      height={30}
                      alt="symbol"
                    />
                  </div>
                  <div className=" font-bold text-xl mb-2">{item.title}</div>
                  <div className="mb-2">{item.description}</div>
                  <ul>
                    {item.bullets.map((bullet,index) => (
                      <li key={index} className=' leading-[1.75] flex gap-2'>
                      <div><CheckCircleIcon className="h-5 w-5 inline" /></div><div className=''>{bullet}</div>
                       
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
