import React from 'react'
import './ThankYou.css'
import { assets } from '../../Assets/assets'
const ThankYou = () => {
  return (
    <div className='thankyou'>
        <div style={{ position: "relative", overflow: "hidden" }}>
            <video
            autoPlay
            loop
            muted
            style={{
                top: 0,
                left: 0,
                width: "100%",
                minHeight:"100vh",
                objectFit: "cover",
                zIndex: -2,
            }}
            >
            <source
                src={require("../../Assets/videos/thankyou.mp4")}
                type="video/mp4"
            />
            Your browser does not support the video tag.
            </video>
        
        </div>
        <div className="return">
            <div className="earth-img1"></div>
            <h3>It's time to return home to Earth</h3>
            <div className="earth-img2"></div>
        </div>
        <div className="thankyou-content">
            <p className='thankyou-title'>You've reached the end of our galactic journey! 🌌 🚀</p>
            <p className='thankyou-description'>Thanks for joining us on this incredible exploration of exoplanets. We hope you've enjoyed discovering new worlds.</p>
            <p className='thankyou-comment'>Leave a comment below and let us know what you thought of our journey. Did you discover any favorite exoplanets? What surprised you the most? We'd love to hear your thoughts!</p>
            <textarea placeholder='leave us a comment'/>
            <button>Send</button>
        </div>
        <img className='thankyou-img' src={assets.thankyou} draggable='false' />
        <img className='thankyou-footer' src={assets.thankyou_footer} draggable='false' alt='Footer' />
    </div>
  )
}

export default ThankYou