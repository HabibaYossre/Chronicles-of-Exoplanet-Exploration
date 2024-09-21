// import React, { useEffect, useRef } from 'react'
// import '../Slides/Slides.css'
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);
// const Slides = () => {
//     const slidesRef = useRef([]);
//   const scrollerRef = useRef(null);
//   const scrollTriggerRef = useRef(null);

//   useEffect(() => {
//     const slides = slidesRef.current;
//     const isMobile = window.innerWidth <= 768;

//     slides.forEach((slide, i) => {
//       const angle = isMobile ? i * 10 : (i * 10) - 10;
//       gsap.to(slide, { rotation: angle, transformOrigin: "0% 2300px" });
//     });

//     const speed = isMobile ? 30 : 30; // Faster speed on mobile

//     const scrollTrigger = ScrollTrigger.create({
//       trigger: scrollerRef.current,
//       start: "top top",
//       end: "bottom bottom",
//       onUpdate: (self) => {
//         gsap.to(slides, {
//           rotation: (i) => {
//             const baseAngle = isMobile ? i * 10 : (i * 10) - 10;
//             return baseAngle - self.progress * speed;
//           },
//         });
//       },
//     });
//     scrollTriggerRef.current = scrollTrigger;
//    // Cleanup function to remove ScrollTrigger on unmount
//    return () => {
//     if (scrollTriggerRef.current) {
//       scrollTriggerRef.current.kill();
//     }
//   };
//   }, []);

//   return (
//     <div ref={scrollerRef} className="scroller">
//     {Array(10) // Adjust this to the number of slides
//       .fill(null)
//       .map((_, i) => (
//         <div ref={(el) => (slidesRef.current[i] = el)} key={i} className="slide">
//           <h2>Slide {i + 1}</h2>
//           <p>This is the content for slide {i + 1}.</p>
//           <img src={`planet${i + 1}.jpg`} alt={`Slide ${i + 1}`} />
//         </div>
//       ))}
//   </div>
//   )
// }

// export default Slides
import React from 'react'

const Slides = () => {
  return (
    <div></div>
  )
}

export default Slides