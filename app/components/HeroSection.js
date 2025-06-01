"use client"
import React from 'react'
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className='2xl:mt-35 mt-20 md:mt-15 md:mx-auto mx-2 h-[74vh] relative'>
      <motion.div initial={{ opacity: 0, scale: 0.5}}
          animate={{ opacity: 1, scale: 1}}
          transition={{ duration: 0.8 }} className="container mx-auto flex flex-col place-items-center">
        <div  className=""><h1 className="mb-4 text-7xl sm:text-5xl md:text-8xl leading-normal 2xl:text-9xl font-bold text-center font-[oswald]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-red-900">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Faizan",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className='text-gray-700'
            />
          </h1></div>
          <div className='mt-2'>
          <Link
              href="#myWork"
              className="p-1 inline-block w-fit rounded-full bg-gradient-to-br from-gray-500 to-red-500  text-white mt-3 hover:brightness-95"
            >
              <span className="block bg-linear-to-r from-gray-300 to-gray-100 text-black hover:bg-slate-800 rounded-full px-5 py-3 lg:text-2xl">
                my work
              </span>
            </Link>
            
            <Link  href="#contact" className='ml-6 rounded-full p-4 lg:text-2xl cursor-pointer bg-gradient-to-r from-gray-500 to-red-900 p'><span className='inline-block rounded-full text-white '>contact me</span></Link>

            
          </div>
        
      </motion.div>
    </div>
  )
}

export default HeroSection
