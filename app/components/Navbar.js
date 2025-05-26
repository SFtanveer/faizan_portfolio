"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
      title: "About me",
      path: "#about",
    },
    {
      title: "Services",
      path: "#services",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        
      <nav className="mx-auto">
        
        <div className=" relative flex container py-4 flex-wrap items-center justify-between mx-auto px-4 pt-8">
        <div className="absolute container bottom-0 left-1 w-full mx-auto h-[2px] bg-gradient-to-r from-gray-500 to-red-900"></div>
          <Link
            href={"/"}
            className="text-2xl md:text-4xl font-semibold font-[oswald] italic"
          >
            Faizan Tanveer
          </Link>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 text-slate-200 hover:text-white"
              >
                <Bars3Icon className="h-5 w-5 text-black" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5 border-black" />
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        

      </nav>
    );
}

export default Navbar
