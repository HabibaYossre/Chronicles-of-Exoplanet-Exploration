import React from 'react'
import './Home.css'
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Slides from '../../Components/Slides/Slides';

const Home = () => {
  return (
    <>
    <Navbar/>
    <BgAnimation/>
      {/* <div className="flex w-full h-screen items-center justify-center absolute z-10">
        <p className="text-white font-bold text-3xl md:text-6xl">EXOPLANETS WORLD</p>
      </div> */}
      <div style={{ position: "relative", overflow: "hidden" }}>
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

function BgAnimation(){
  return (
    <section className="parallax overflow-hidden">
      <img
        src={require("../../Assets/HomePlanets/1.png")}
        alt=""
        id="planet-1"
        className="w-[150px] end-[30px] top-28 planet-orbit3 "
      />
      <img
        src={require("../../Assets/HomePlanets/2.png")}
        alt=""
        id="planet-2"
        className="w-[150px] left-[-30px] top-1/2 planet-orbit2"
      />
      <div className="flex w-full h-screen items-center justify-center absolute z-10">
        <p className="text-white font-bold text-3xl md:text-6xl">
          EXOPLANETS WORLD
        </p>
      </div>
      <img
        src={require("../../Assets/HomePlanets/3.png")}
        alt=""
        id="planet-3"
        className="w-[150px] left-[-30px] top-1/2 planet-orbit1"
      />
    </section>
  );
}


export default Home