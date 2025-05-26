"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
      title: "Privacy Policy",
      path: "/",
    },
    {
      title: "Terms of Services",
      path: "/",
    },
    {
      title: "Connect with me",
      path: "#contact",
    },
  ];

function Footer() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        
      <nav className="mx-auto ">
        <div className="flex container py-4 flex-wrap items-center justify-center  mx-auto px-4 mt-3 border-t">
          <Link
            href={"/"}
            className="text-xs italic text-gray-600 font-[playwrite]"
          >
            &copy; 2025 Faizan Tanveer. All rights reserved.
          </Link>
          {/* <div className="menu block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row space-x-8 mt-0 text-start">
              {navLinks.map((link, index) => (
                <li key={index} className="text-sm">
                  <Link href={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </nav>
    )
}

export default Footer

