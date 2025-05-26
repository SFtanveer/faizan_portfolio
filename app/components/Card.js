"use client";
import React, { useEffect, useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const Card = ({ title, description, background}) => {
  const [openModal, setopenModal] = useState(false);
  useEffect(() => {
    console.log(openModal);
  }, [openModal]);

  const cardStyle = {
    background: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  if (background === "/elysees_dashboard.png") {
    cardStyle.backgroundPosition = "center";
  }

  return (
    <>
      <div
        className="h-52 md:h-72 md:w-104 rounded-t-xl relative group"
        style={cardStyle}
      >
        {/* <Image
      src="/stablesail.com_.png"
      width={500}
      height={100}
      alt="Picture of the author"
      className="overflow-y-clip rounded-t-xl"
      />  */}
      </div>

      <div className="px-4 py-6 max-w-104">
        <h5 className="  text-xl font-semibold mb-2">{title}</h5>
        <p className="">{description.split(' ').slice(0, 41).join(' ') + (description.split(' ').length > 50 ? '...' : '')}</p>
      </div>
    </>
  );
};

export default Card;
