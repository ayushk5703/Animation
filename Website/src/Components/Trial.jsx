// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';

// const HoverEffect = () => {
//   const ayushLettersRef = useRef([]);
//   const kumarLettersRef = useRef([]);

//   const handleMouseEnter = (lettersRef) => {
//     lettersRef.current.forEach((letter, index) => {
//       gsap.to(letter, {
//         opacity: 1,
//         y: 0,
//         duration: 0.5,
//         delay: index * 0.1,
//         ease: 'power2.out',
//       });
//     });
//   };

//   const handleMouseLeave = (lettersRef) => {
//     lettersRef.current.forEach((letter, index) => {
//       gsap.to(letter, {
//         opacity: 0,
//         y: -20,
//         duration: 0.5,
//         delay: index * 0.05,
//         ease: 'power2.out',
//       });
//     });
//   };

//   const ayush = "Ayush";
//   const kumar = "Kumar";

//   return (
//     <div className='px-20'>
//       <div className="cards w-full flex gap-10">
//         <motion.div
//           onMouseEnter={() => handleMouseEnter(ayushLettersRef)}
//           onMouseLeave={() => handleMouseLeave(ayushLettersRef)}
//           style={{
//             width: '200px',
//             height: '200px',
//             backgroundColor: '#3498db',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             cursor: 'pointer',
//           }}
//         >
//           Hover me
//         </motion.div>
//       </div>

//       <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <motion.div
//           onMouseEnter={() => handleMouseEnter(kumarLettersRef)}
//           onMouseLeave={() => handleMouseLeave(kumarLettersRef)}
//           style={{
//             width: '200px',
//             height: '200px',
//             backgroundColor: '#2ecc71',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             cursor: 'pointer',
//           }}
//         >
//           Hover me
//         </motion.div>
//       </div>

//       <div
//         style={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           display: 'flex',
//           alignItems: 'center',
//           pointerEvents: 'none', // Prevents mouse events from affecting the central text
//         }}
//       >
//         <div style={{ position: 'absolute', display: 'flex' }}>
//           {ayush.split("").map((char, index) => (
//             <motion.span
//               key={index}
//               ref={el => ayushLettersRef.current[index] = el}
//               initial={{ opacity: 0, y: -20 }}
//               style={{
//                 fontSize: '24px',
//                 color: '#fff',
//                 margin: '0 2px',
//               }}
//             >
//               {char}
//             </motion.span>
//           ))}
//         </div>

//         <div style={{ position: 'absolute', display: 'flex' }}>
//           {kumar.split("").map((char, index) => (
//             <motion.span
//               key={index}
//               ref={el => kumarLettersRef.current[index] = el}
//               initial={{ opacity: 0, y: -20 }}
//               style={{
//                 fontSize: '24px',
//                 color: '#fff',
//                 margin: '0 2px',
//               }}
//             >
//               {char}
//             </motion.span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HoverEffect;
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

function Featured() {
  const fydeLettersRef = useRef([]);
  const viseLettersRef = useRef([]);

  const handleMouseEnter = (lettersRef) => {
    lettersRef.current.forEach((letter, index) => {
      gsap.to(letter, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        delay: index * 0.1,
        ease: 'power2.out',
      });
    });
  };

  const handleMouseLeave = (lettersRef) => {
    lettersRef.current.forEach((letter, index) => {
      gsap.to(letter, {
        opacity: 0,
        x: -20,
        duration: 0.5,
        delay: index * 0.05,
        ease: 'power2.out',
      });
    });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10">
          {/* FYDE Card */}
          <div
            onMouseEnter={() => handleMouseEnter(fydeLettersRef)}
            onMouseLeave={() => handleMouseLeave(fydeLettersRef)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  ref={el => fydeLettersRef.current[index] = el}
                  initial={{ x: "100%", opacity: 0 }}
                  className="inline-block"
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

          {/* VISE Card */}
          <div
            onMouseEnter={() => handleMouseEnter(viseLettersRef)}
            onMouseLeave={() => handleMouseLeave(viseLettersRef)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <h1 className="absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  ref={el => viseLettersRef.current[index] = el}
                  initial={{ x: "100%", opacity: 0 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt="VISE"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
