import React from 'react'
import './Information.css'
import { assets } from '../../Assets/assets'
const Information = () => {
  return (
    <div className='information'>
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
            minHeight: "100vh",
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
      <h2>What is an exoplanet?</h2>
      <div className='info-content1'>
        <div className='info-left'>
            <img src={assets.home1} draggable='false'/>
        </div>
        <div className="info-right">
            <p>Exoplanets, planets beyond our solar system, have captivated the imaginations of astronomers and the public alike. These celestial bodies offer a glimpse into the vast diversity of planetary systems in the universe. With thousands discovered to date, exoplanets come in a staggering array of sizes, compositions, and orbital configurations.</p>

        </div>
        
      </div>
      <div className='info-content2'>
        <div className="info-left">
            <p>From scorching hot lava worlds to icy water planets, these distant worlds challenge our understanding of planetary formation and evolution. As our exploration of exoplanets continues, we are poised to uncover new mysteries and potentially discover habitable worlds beyond our own.</p>

        </div>
        <div className='info-right'>
        <img src={assets.home2} draggable='false'/>
        </div>
      </div>
    </div>
  )
}

export default Information