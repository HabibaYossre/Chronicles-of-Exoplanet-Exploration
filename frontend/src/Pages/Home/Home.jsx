import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Slides from "../../Components/Slides/Slides";
import { Button } from "@mui/material";
import Carousel from "../../Components/Slides/Slides";
import Information from "../../Components/Information/Information";
import { assets } from "../../Assets/assets";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Navbar />
      {/* <div className="flex w-full h-screen items-center justify-center absolute z-10">
        <p className="text-white font-bold text-3xl md:text-6xl">EXOPLANETS WORLD</p>
        </div> */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <BgAnimation />
        <video
          autoPlay
          loop
          muted
          style={{
            position: "fixed",
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
      <Information />
      <Slides />
      <Break>
        <GoToPersonalCheck />
      </Break>

      <Footer />
    </div>
  );
};

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
    <div className="parallax overflow-x-hidden h-screen">
      <img
        src={require("../../Assets/HomePlanets/1.png")}
        alt=""
        id="planet-1"
        className="w-[120px] left-12 top-28  planet-orbit3 hidden md:block"
      />
      <img
        src={require("../../Assets/HomePlanets/ast.png")}
        alt=""
        id="planet-1"
        className="w-[200px] end-12 top-28 ast"
      />
      <img
        src={require("../../Assets/HomePlanets/2.png")}
        alt=""
        id="planet-2"
        className="w-[350px] left-[30px] top-80 planet-orbit2 hidden md:block"
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
        className="w-[150px] end-[30px] top-1/2 planet-orbit1 hidden md:block"
      />
    </div>
  );
}

function Break({childern}) {
  const navigate=useNavigate();
  return (
    <div className="break-gif my-5">
      <div className="flex justify-center h-full bg-[rgba(0,0,0,0.6)] items-center gap-3">
        <p className="text-center text-white py-0 my-0 text-2xl">
          Find your most matched planet 🌍
        </p>
        <Button onClick={()=>{navigate('/Personality_test')}} variant="contained">Personal Check</Button>
      </div>
      
    </div>
  );
}

function GoToPersonalCheck() {
  const navigate=useNavigate();
  return (
    <div className="w-full h-1/4 bg-black mx-0 p-10 border-y-2 border-dotted border-black hover:border-white hover:border-opacity-60 transition-all duration-300 ease-in-out">
      <div className="flex justify-center items-center gap-5">
        <p className="text-center text-white py-0 my-0">
          Find your most matched planet 🌍
        </p>
        <Button onClick={()=>{navigate('/Personality_test')}} variant="contained">Personal Check</Button>
      </div>
    </div>
  );
}

export default Home;