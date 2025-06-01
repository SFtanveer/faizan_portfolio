"use client";
import React from "react";
import NavLink from "./Navlink";

const MenuOverlay = ({ links, isOpen }) => {
  return (
    <div className={`
      overflow-hidden 
      transition-all duration-1500 ease-in-out 
      ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
      md:hidden
    `}>
      <ul className="flex flex-col py-4 items-center">
        {links.map((link, index) => (
          <li key={index} className="w-full text-center">
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
