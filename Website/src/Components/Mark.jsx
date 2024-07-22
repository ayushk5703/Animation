import React from "react";
import { motion } from "framer-motion";
function Mark() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.3" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-1 overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{x: 0}}
          animate={{x:"-100%"}}
          transition={{ease: "linear",repeat: Infinity,duration: 10}}
          className='text-[18vw] leading-none font-["Founders_Grotesk"] uppercase -pt-7 -mb-[3vw] font-semibold'
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{x: 0}}
          animate={{x: "-100%"}}
          transition={{ease: "linear",repeat: Infinity, duration: 10}}
          className='text-[18vw] leading-none font-["Founders_Grotesk"] uppercase -pt-7 -mb-[3vw] font-semibold'
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Mark;
