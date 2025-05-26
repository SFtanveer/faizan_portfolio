"use client";
import React from "react";
// import language from "../../public/language"
import { LanguageIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

const About = () => {
  const aboutItems = [
    {
      symbol: "/language.png",
      title: "Languages",
      description: "Javascript, React Js, Next Js, HTML and CSS",
    },
    {
      symbol: "/briefing.png",
      title: "Projects",
      description: "Built more than 3 web development projects",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1},
  };

  return (
    <div className="mt:20 md:mx-auto mx-2" id="about">
      <div className="  container mx-auto flex flex-row justify-center">
        <div>
          <div className="container flex justify-center mb-6">
            <h1 className="text-5xl md:text-8xl text-center font-[oswald]">
              About me
            </h1>
          </div>
          <div className="container grid grid-cols-1 text-center justify-center gap-2">
            <div className="text-center max-w-[900px] mx-auto text-xl/9">
              I am a frontend developer specializing in React, NextJS, UI/UX,
              and API integration. Experience converting complex Figma designs
              to responsive websites and building real-time data from external
              APIs. Passionate about creating seamless, pixel-perfect user
              experiences.
            </div>
            <div ref={ref} className="flex justify-center gap-8 flex-wrap">
              {aboutItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.5, delay: ((index * 1)+0.5) }}
                  className="my-4 p-4 max-w-[220px] text-start rounded-2xl shadow-lg shadow-red-900/50 hover:scale-[1.1] active:scale-[1.1] transition-transform duration-500"
                >
                  <div className="my-4">
                    <Image
                      src={item.symbol}
                      width={30}
                      height={30}
                      alt="Picture"
                    />
                  </div>
                  <div className=" font-bold text-xl mb-2">{item.title}</div>
                  <div className="mb-2">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
