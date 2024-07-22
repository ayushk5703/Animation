// // import React from "react";

// // function Featured() {

// //   const handleHover = ()=>{
// //     alert("Hover")
// //   }
// //   return (
// //     <div className="w-full py-20">
// //       <div className="w-full px-20 border-b-[1px] boreder-zinc-700 pb-20">
// //         <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">
// //           Featured projects
// //         </h1>
// //       </div>
// //       <div className="px-20">
// //         <div className="cards w-full flex gap-10">
// //           <div onMouseEnter={()=>handleHover()} className="cardcontainer relative w-1/2 h-[80vh]">
// //             <h1 className="absolute flex text-[#CDEA68] overflow-hidden right-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl">
// //               FYDE
// //               {"FYDE".split("").map((item, index) => (
// //                 <motion.span initial={{y:"100%"}} className="inline-block trans-y-full">{item}</motion.span>
// //               ))}
// //             </h1>
// //             <div className="card w-full h-full rounded-xl overflow-hidden pt-20">
// //               <img
// //                 className="w-full h-full bg-cover"
// //                 src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
// //               ></img>
// //             </div>
// //           </div>
// //           <div className="cardcontainer relative w-1/2 h-[80vh] ">
// //             <h1 className="absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl">
// //               VISE
// //               {"VISE".split("").map((item, index) => (
// //                 <span>{item}</span>
// //               ))}
// //             </h1>
// //             <div className="card w-full h-full rounded-xl overflow-hidden ">
// //               <img
// //                 className="w-full h-full bg-cover"
// //                 src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
// //               ></img>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
import React, { useState } from "react";
import { motion } from "framer-motion";
import {gsap} from 'gsap'

function Featured() {
  
const HoverEffect = () => {
  const ayushLettersRef = useRef([]);
  const kumarLettersRef = useRef([]);

  const handleMouseEnter = (lettersRef) => {
    lettersRef.current.forEach((letter, index) => {
      gsap.to(letter, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: index * 0.1,
        ease: 'power2.out',
      });
    });
  };
}
  const handleMouseLeave = (lettersRef) => {
    lettersRef.current.forEach((letter, index) => {
      gsap.to(letter, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        delay: index * 0.05,
        ease: 'power2.out',
      });
    });
  };

  const ayush = "FYDE";
  const kumar = "HIVE";
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        {" "}
        <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10">
          <div
            onMouseEnter={() => handleMouseEnter(ayushLettersRef)}
            onMouseLeave={() => handleMouseLeave(ayushLettersRef)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex text-[#CDEA68] overflow-hidden right-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={a ?({y:"0"}) : ({y:"100%"})}
                  transition={{ease: Power4.easeInOut, delay: index*.01}}
                  className="inline-block trans-y-full"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden pt-20">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt="FYDE"
              />
            </div>
          </div>
          {/* <div onMouseEnter={handleHover} className="cardcontainer relative w-1/2 h-[80vh] ">
            <h1 className="absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl">
              {"VISE".split("").map((item, index) => (
                <motion.span 
                  key={index} 
                  initial={{ y: "100%" }} 
                  animate={{ y: "0%" }} 
                  transition={{ duration: 0.5, delay: index * 0.1 }} 
                  className="inline-block trans-x-full">
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt="VISE"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Featured;


