import React, { useEffect, useRef } from 'react'
import './Home.css'
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Slides from '../../Components/Slides/Slides';

const Home = () => {
  return (
    <>
    <Navbar/>
      {/* <div className="flex w-full h-screen items-center justify-center absolute z-10">
        <p className="text-white font-bold text-3xl md:text-6xl">EXOPLANETS WORLD</p>
        </div> */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <BgAnimation/>
        <video
          autoPlay
          loop
          muted
          style={{
            // position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            zIndex: -1000,
          }}
        >
          <source
            src={require("../../Assets/videos/bgvideo.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <Slides/>
      <Footer/>
    </>
  );
}

function BgAnimation() {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.pageYOffset;

  //     // Adjust the speed and direction of each element based on scroll position
  //     const planet1 = document.getElementById("planet-1");
  //     const planet2 = document.getElementById("planet-2");
  //     const planet3 = document.getElementById("planet-3");

  //     if (planet1) {
  //       planet1.style.transform = `translateX(${scrollPosition * -0.5}px)`; // Adjust speed as needed
  //     }
  //     if (planet2) {
  //       planet2.style.transform = `translateX(${scrollPosition * -1.6}px)`; // Adjust speed as needed
  //     }
  //     if (planet3) {
  //       planet3.style.transform = `translateX(${scrollPosition * 0.9}px)`; // Adjust speed as needed
  //     }
  //   };

  //   // Attach scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="parallax overflow-x-hidden">
      <img
        src={require("../../Assets/HomePlanets/1.png")}
        alt=""
        id="planet-1"
        className="w-[120px] left-12 top-28 -z-30 planet-orbit3"
      />
      <img
        src={require("../../Assets/HomePlanets/ast.png")}
        alt=""
        id="planet-1"
        className="w-[200px] end-12 top-28 -z-30 ast"
      />
      <img
        src={require("../../Assets/HomePlanets/2.png")}
        alt=""
        id="planet-2"
        className="w-[350px] left-[30px] top-80 planet-orbit2"
      />
      <div className="flex w-full h-screen items-center justify-center absolute z-[2000]">
        <p className="text-white font-bold text-3xl md:text-6xl ">
          EXOPLANETS WORLD
        </p>
      </div>
      <img
        src={require("../../Assets/HomePlanets/3.png")}
        alt=""
        id="planet-3"
        className="w-[150px] end-[30px] top-1/2 planet-orbit1"
      />
    </div>
  );
}

export default Home