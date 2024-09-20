import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="flex w-screen h-screen items-center justify-center absolute z-10">
        <p className="text-white font-bold text-3xl md:text-6xl">EXOPLANETS WORLD</p>
      </div>
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
            zIndex: -1,
          }}
        >
          <source
            src={require("../../Assets/videos/bgvideo.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default Home