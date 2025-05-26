"use client";
import React, { useState, useRef } from "react";
import Modal from "./Modal";
import Card from "./Card";
import { motion, useInView } from "framer-motion";

const Mywork = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Track clicked itemal

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const workItems = [
    {
      background: "/stablesail.com_.png",
      title:
        "Crafted a Pixel-Perfect, Responsive React Website from 22-Page Figma Design",
      description:
        "Transformed a comprehensive Figma prototype into a dynamic, fully functional web application. Implemented robust login/signup with form validation and error handling. Connected frontend to backend services using Axios for smooth data flow. Developed intuitive interfaces for Main Settings, BOT Functions, and Coin Active features. Ensured flawless cross-device compatibility and styled with Bootstrap 5, Material UI and custom CSS for maintainable, scalable UI.",
      video: "/stablesailVideo.mp4",
    },
    {
      background: "/elysees_dashboard.png",
      title: "Designed & Developed a Modern Wealth Management Dashboard",
      description:
        "I designed and developed an intuitive frontend for a wealth management platform, transforming complex financial data into actionable insights. Starting from UI/UX wireframes, I built interactive dashboards with real-time data visualization, responsive layouts for all devices, and secure form validation for sensitive data. Using Bootstrap 5, I created custom data tables and streamlined workflows to enhance user productivity. The platform delivers seamless performance across desktop and mobile, with robust error handling and clean, maintainable code for future scalability.",
      video: "/elyseesVideo.mp4",
    },
  ];

  const handleCardClick = (item) => {
    setSelectedItem(item); // Store the clicked item
    setIsModalOpen(true); // Open modal
  };

  return (
    <div className="mt-20 md:mx-auto mx-2" id="myWork">
      <div className="container mx-auto flex flex-row justify-center items-center">
        <div>
          <div className="container flex justify-center mb-6">
            <h1 className="text-5xl md:text-8xl text-center font-[oswald]">
              My Latest Work
            </h1>
          </div>

          <div ref={ref} className="flex gap-16 flex-wrap justify-center">
            {workItems.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.5, delay: index * 1 + 0.5 }}
                className="mt-4 rounded-2xl shadow-lg shadow-red-900/50 hover:scale-[1.05] transition-transform duration-500 cursor-pointer"
                onClick={() => handleCardClick(item)}
              >
                <Card
                  title={item.title}
                  description={item.description}
                  background={item.background}
                  briefing={item.briefing}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={selectedItem}
      />
    </div>
  );
};

export default Mywork;
