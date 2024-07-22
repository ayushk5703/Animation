import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-[Neue_Montreal text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full flex gap-5 border-t-[2px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
        <h1 className="text-6xl">Our approach:</h1>
        <button className="flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 text-white rounded-full">Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full">               
            </div>
        </button>
        </div>
        <div className="w-1/2 h-[80vh] rounded-3xl bg-zinc-900">
        <img
            className="w-32 items-center justify-center"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img></div>
      </div>
    </div>
  );
}

export default About;
