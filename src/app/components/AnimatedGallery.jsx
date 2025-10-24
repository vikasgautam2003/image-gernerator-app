



// "use client";

// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const images = [
//   { id: 1, src: "/12.png", title: "Utopian Cityscape", gridStyle: "lg:col-span-1" },
//   { id: 2, src: "/3.png", title: "Celestial Dragon", gridStyle: "lg:col-span-1" },
//   { id: 3, src: "/5.png", title: "Crystal Phoenix", gridStyle: "lg:col-span-1" },
//   { id: 4, src: "/2.png", title: "Enchanted Forest", gridStyle: "lg:col-span-1" },
//   { id: 5, src: "/4.png", title: "Cyberpunk Hero", gridStyle: "lg:col-span-1" },
//   { id: 6, src: "/6.png", title: "Ancient Temple", gridStyle: "lg:col-span-2" },
//   { id: 7, src: "/7.png", title: "Cosmic Whale", gridStyle: "lg:col-span-1" },
//   { id: 8, src: "/8.png", title: "Robot Monk", gridStyle: "lg:col-span-1" },
//   { id: 9, src: "/9.png", title: "Fantasy Character", gridStyle: "lg:col-span-1" },
//   { id: 10, src: "/10.png", title: "Space Opera", gridStyle: "lg:col-span-1" },
//   { id: 11, src: "/11.png", title: "Mythical Beast", gridStyle: "lg:col-span-1" },
// ];

// const TOTAL_IMAGES = images.length;

// export default function ScrollGallery() {
//   const scrollRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start start", "end end"],
//   });

//   const blurOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.05, 0.95, 1],
//     [0, 1, 1, 0]
//   );

//   return (
//     <section ref={scrollRef} className="relative z-10 h-[1650vh] bg-black">
      
//       <div className="sticky top-0 h-screen w-full overflow-hidden">
        
//         <motion.div 
//           className="absolute inset-0 z-20 bg-black/50 backdrop-blur-md"
//           style={{ opacity: blurOpacity }}
//         />

//         <div className="absolute inset-0 z-10 flex items-center justify-center">
//           <div className="grid h-auto max-h-[90vh] w-full max-w-8xl aspect-[4/3] grid-cols-4 grid-rows-3 gap-4 md:gap-6 p-4 md:p-6">
//             {images.map((image, i) => (
//               <GridImage
//                 key={`grid-${image.id}`}
//                 scrollYProgress={scrollYProgress}
//                 index={i}
//                 totalImages={TOTAL_IMAGES}
//                 src={image.src}
//                 gridStyle={image.gridStyle}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="absolute inset-0 z-30 flex items-center justify-center">
//           {images.map((image, i) => (
//             <FocalImage
//               key={`focal-${image.id}`}
//               scrollYProgress={scrollYProgress}
//               index={i}
//               totalImages={TOTAL_IMAGES}
//               src={image.src}
//               title={image.title}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// function FocalImage({ scrollYProgress, index, totalImages, src, title }) {
//   const start = index / totalImages;
//   const end = (index + 1) / totalImages;
//   const handoffPoint = end - 0.05;

//   const opacity = useTransform(
//     scrollYProgress,
//     [start, start + 0.05, handoffPoint, end],
//     [0, 1, 1, 0]
//   );

//   const scale = useTransform(
//     scrollYProgress,
//     [start, start + 0.05, handoffPoint, end],
//     [0.7, 1, 0.7, 0]
//   );
  
//   const titleOpacity = useTransform(
//     scrollYProgress,
//     [start + 0.05, start + 0.1, handoffPoint - 0.05, handoffPoint],
//     [0, 1, 1, 0]
//   );

//   return (
//     <motion.div
//       className="absolute inset-0 flex flex-col items-center justify-center"
//       style={{ 
//         opacity, 
//         zIndex: TOTAL_IMAGES - index 
//       }}
//     >
//       <motion.div
//         className="w-full max-w-5xl overflow-hidden"
//         style={{ scale }}
//       >
//         <img
//           src={src}
//           alt={title}
//           className="w-full h-full object-contain rounded-xl shadow-2xl"
//         />
//       </motion.div>
//       <motion.h3
//         className="mt-4 text-white text-xl md:text-2xl font-bold p-2 whitespace-nowrap"
//         style={{ opacity: titleOpacity }}
//       >
//         {title}
//       </motion.h3>
//     </motion.div>
//   );
// }

// function GridImage({ scrollYProgress, index, totalImages, src, gridStyle }) {
//   const startTime = (index + 1 - 0.05) / totalImages;
//   const endTime = (index + 1) / totalImages;

//   const opacity = useTransform(
//     scrollYProgress,
//     [startTime, endTime],
//     [0, 1]
//   );

//   const scale = useTransform(
//     scrollYProgress,
//     [startTime, endTime],
//     [0.8, 1]
//   );

//   return (
//     <motion.div
//       className={`rounded-xl bg-gray-900 border border-blue-900/50 overflow-hidden ${gridStyle}`}
//       style={{ opacity, scale }}
//     >
//       <img
//         src={src}
//         alt=""
//         className="w-full h-full object-cover"
//       />
//     </motion.div>
//   );
// }








"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- IMAGE DATA (from your code) ---
const images = [
  { id: 1, src: "/1.png", title: "Utopian Cityscape", gridStyle: "lg:col-span-1" },
  { id: 2, src: "/3.png", title: "Celestial Dragon", gridStyle: "lg:col-span-1" },
  { id: 3, src: "/5.png", title: "Crystal Phoenix", gridStyle: "lg:col-span-1" },
  { id: 4, src: "/2.png", title: "Enchanted Forest", gridStyle: "lg:col-span-1" },
  { id: 5, src: "/4.png", title: "Cyberpunk Hero", gridStyle: "lg:col-span-1" },
  { id: 6, src: "/6.png", title: "Ancient Temple", gridStyle: "lg:col-span-2" },
  { id: 7, src: "/7.png", title: "Cosmic Whale", gridStyle: "lg:col-span-1" },
  { id: 8, src: "/8.png", title: "Robot Monk", gridStyle: "lg:col-span-1" },
  { id: 9, src: "/9.png", title: "Fantasy Character", gridStyle: "lg:col-span-1" },
  { id: 10, src: "/10.png", title: "Space Opera", gridStyle: "lg:col-span-1" },
  { id: 11, src: "/11.png", title: "Mythical Beast", gridStyle: "lg:col-span-1" },
];

const TOTAL_IMAGES = images.length;
// --- NEW ---
// We add 1 "step" for the title, so 11 images + 1 title = 12 steps
const TOTAL_STEPS = TOTAL_IMAGES + 1;

export default function ScrollGallery() {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // --- NEW ---
  // We use the 150vh-per-step logic from your code (1650vh / 11)
  // New total height = 12 steps * 150vh = 1800vh
  const SCROLL_TRACK_HEIGHT = "h-[1800vh]";
  
  // This is the progress for the *image* animations (steps 1 to 12)
  const imageScrollYProgress = useTransform(
    scrollYProgress,
    [1 / TOTAL_STEPS, 1], // Remap 1/12th of the way through to the end
    [0, 1]                // to be 0 -> 1 for the image components
  );

  // --- NEW ---
  // Animation for the Title (step 0 to 1)
  const titleOpacity = useTransform(
    scrollYProgress,
    // [start, fade-in, fade-out-start, fade-out-end]
    [0, 0.01, (1 / TOTAL_STEPS) * 0.8, 1 / TOTAL_STEPS],
    [0, 1, 1, 0]
  );
  const titleScale = useTransform(
    scrollYProgress,
    [0, 0.01, (1 / TOTAL_STEPS) * 0.8],
    [0.8, 1, 0.8]
  );

  // Blur for the image section
  const blurOpacity = useTransform(
    imageScrollYProgress, // Use the *image* progress
    [0, 0.05, 0.95, 1],
    [0, 1, 1, 0]
  );

  return (
    <section ref={scrollRef} className={`relative z-10 ${SCROLL_TRACK_HEIGHT} bg-black`}>
      
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        <motion.div 
          className="absolute inset-0 z-20 bg-black/50 backdrop-blur-md"
          style={{ opacity: blurOpacity }}
        />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="grid h-auto max-h-[90vh] w-full max-w-8xl aspect-[4/3] grid-cols-4 grid-rows-3 gap-4 md:gap-6 p-4 md:p-6">
            {images.map((image, i) => (
              <GridImage
                key={`grid-${image.id}`}
                // --- MODIFIED ---
                scrollYProgress={imageScrollYProgress} // Pass remapped progress
                index={i}
                totalImages={TOTAL_IMAGES}
                src={image.src}
                gridStyle={image.gridStyle}
              />
            ))}
          </div>
        </div>

        <div className="absolute inset-0 z-30 flex items-center justify-center">
          {images.map((image, i) => (
            <FocalImage
              key={`focal-${image.id}`}
              // --- MODIFIED ---
              scrollYProgress={imageScrollYProgress} // Pass remapped progress
              index={i}
              totalImages={TOTAL_IMAGES}
              src={image.src}
              title={image.title}
            />
          ))}
        </div>

        {/* --- NEW TITLE ELEMENT --- */}
        <motion.div
          className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none"
          style={{ opacity: titleOpacity, scale: titleScale }}
        >
          <h2 className="text-white text-6xl md:text-8xl font-extrabold tracking-tighter">
            Our Generated Images
          </h2>
        </motion.div>

      </div>
    </section>
  );
}



function FocalImage({ scrollYProgress, index, totalImages, src, title }) {
  const start = index / totalImages;
  const end = (index + 1) / totalImages;
  const handoffPoint = end - 0.05;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, handoffPoint, end],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [start, start + 0.05, handoffPoint, end],
    [0.7, 1, 0.7, 0]
  );
  
  const titleOpacity = useTransform(
    scrollYProgress,
    [start + 0.05, start + 0.1, handoffPoint - 0.05, handoffPoint],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center"
      style={{ 
        opacity, 
        zIndex: TOTAL_IMAGES - index 
      }}
    >
      <motion.div
        className="w-full max-w-5xl overflow-hidden" // Your max-w-5xl
        style={{ scale }}
      >
        <img
          src={src}
          alt={title}
          className="w-full h-full object-contain rounded-xl shadow-2xl"
        />
      </motion.div>
      <motion.h3
        className="mt-4 text-white text-xl md:text-2xl font-bold p-2 whitespace-nowrap"
        style={{ opacity: titleOpacity }}
      >
        {title}
      </motion.h3>
    </motion.div>
  );
}

function GridImage({ scrollYProgress, index, totalImages, src, gridStyle }) {
  const startTime = (index + 1 - 0.05) / totalImages;
  const endTime = (index + 1) / totalImages;

  const opacity = useTransform(
    scrollYProgress,
    [startTime, endTime],
    [0, 1]
  );

  const scale = useTransform(
    scrollYProgress,
    [startTime, endTime],
    [0.8, 1]
  );

  return (
    <motion.div
      className={`rounded-xl bg-gray-900 border border-blue-900/50 overflow-hidden ${gridStyle}`}
      style={{ opacity, scale }}
    >
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}