"use client";
import React, { useState } from "react";
// import language from "../../public/language"
import { LanguageIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

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

  const [submitMsg, setSubmitMsg] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7466faa3-5e8e-415f-aeff-f3be7903b811");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      // Check if the HTTP response itself was successful (status code 2xx)
      if (!response.ok) {
        const errorText = await response.text(); // Get raw text for more detail
        console.error(
          "HTTP error! Status:",
          response.status,
          "Response:",
          errorText
        );
        // You might want to throw an error here or handle it differently
        return; // Stop execution if the HTTP response was not OK
      }

      const result = await response.json();

      // Check the 'success' property from the Web3Forms API response
      if (result.success) {
        console.log("Form submission successful:", result);
        setSubmitMsg(true);
        // You might want to display a success message to the user here
      } else {
        // Log the error message provided by Web3Forms
        console.error(
          "Form submission failed:",
          result.message || "Unknown error from Web3Forms"
        );
        // You might want to display an error message to the user here
      }
    } catch (error) {
      // Catch network errors (e.g., no internet, API server down)
      // or errors during JSON parsing
      console.error("An error occurred during form submission:", error);
      // You might want to display a generic error message to the user here
    }
  }

  return (
    <div className="my-20 md:mx-auto mx-2" id="contact">
      <div className="container mx-auto flex justify-center md:gap-2 gap-6 flex-wrap ">
        <div className="container flex justify-center mb-6">
          <h1 className="text-5xl md:text-8xl text-center font-[oswald]">
            Contact me
          </h1>
        </div>
        <div className=" basis-128 flex justify-start flex-col mx-2">
          <div className="text-2xl font-bold mb-4 text-center md:text-start">
            Let's connect
          </div>
          <div className="flex">
            <div className="md:basis-2/3 mb-4">
              I'm currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, I'll try
              my best to get back to you!
            </div>
          </div>
          <div className="flex gap-3 justify-center md:justify-start">
            {" "}
            <Link className="" href="https://github.com/SFtanveer" target="_blank"
                rel="noopener noreferrer">
              <Image
                src="/github.png"
                width={40}
                height={40}
                alt="Github Profile"
              />
            </Link>{" "}
            <Link className="" href="https://www.fiverr.com/faizan2394" target="_blank"
                rel="noopener noreferrer">
              <Image
                src="/fiverr.png"
                width={40}
                height={40}
                alt="Fiverr Profile"
              />
            </Link>
            <Link className="" href="https://www.upwork.com/freelancers/~015a3bbbab39bfd413" target="_blank"
                rel="noopener noreferrer">
              <Image
                src="/upwork.png"
                width={40}
                height={40}
                alt="Upwork Profile"
              />
            </Link>
          </div>
        </div>

        <div className=" basis-128">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 mx-2 pt-2">
              <label className="block">Your Name</label>{" "}
              <input
                required
                placeholder="name"
                className="block border  w-full p-2 rounded-lg focus:outline-none focus:ring-1 "
                name="name"
              />
            </div>
            <div className="mb-4 mx-2">
              <label className="block">Your Email</label>{" "}
              <input
                required
                placeholder="email"
                className="block border  w-full p-2 rounded-lg focus:outline-none focus:ring-1 "
                name="email"
              />
            </div>
            <div className="mb-4 mx-2">
              <label className="block">Message</label>{" "}
              <textarea
                required
                placeholder="message..."
                className="block border w-full placeholder:text-gray-400 rounded-lg p-2 focus:outline-none  focus:ring-1"
                rows={3}
                name="message"
              />
            </div>
            <div className="mx-2">
              <button
                type="submit"
                className="text-center border block w-full p-1 rounded-lg transition-all duration-700 delay-100  ease-in-out cursor-pointer hover:border-gray-400 hover:bg-gray-500 hover:text-white active:border-gray-400 active:bg-gray-500 active:text-white"
              >
                Submit
              </button>
              {submitMsg && (
                <div className="my-2 text-green-600 flex content-center items-start">
                  {" "}
                  <Image
                    src="/success.png"
                    width={20}
                    height={20}
                    alt="SUCCESS"
                    className="mr-1 mt-1"
                  />
                  <span>Form submitted successfully! We'll contact you soon. </span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
