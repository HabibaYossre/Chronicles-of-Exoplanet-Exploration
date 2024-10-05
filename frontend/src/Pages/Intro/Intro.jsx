import React, { useRef, useState } from 'react'
import './Intro.css'
import Home from '../Home/Home';
import { useNavigate } from 'react-router-dom';
const Intro = () => {
    const [videoEnded, setVideoEnded] = useState(false);
    const [videoStarted, setVideoStarted] = useState(false);
    const videoRef = useRef(null);
    const navigate = useNavigate();
  
    // This function will start the video when the button is pressed
    const handlePlayVideo = () => {
      setVideoStarted(true);
      videoRef.current.play();
    };
  
    // This function will trigger when the video finishes playing
    const handleVideoEnd = () => {
      setVideoEnded(true);
    };
  
  return (
    <div className='intro'>
        {!videoEnded ? (
        <div>
          {!videoStarted && (
            <div className='intro-page'>
                <div className="intro-overlay">
                    <div className="intro-content">
                    <h1>Welcome to Cosmic Twin</h1>
                    <p className='intro-p1'>Prepare to embark on an unforgettable journey beyond our solar system, where new wonders await. As we venture into the vast expanse of space, you'll uncover the mysteries of planets that orbit distant stars—planets where the possibilities are as endless as the universe itself. This is your gateway to adventure, where the unknown becomes thrilling and the future of space exploration takes center stage.</p>
                    <p className='intro-p2'>Are you ready to witness the marvels of these alien worlds?</p>
                    <button onClick={handlePlayVideo}>Start the Journey</button>
                    </div>
                </div>

            </div>
            
          )}
          <video 
            ref={videoRef} // Ref to control the video
            width="100%"
            height="100%" 
            onEnded={handleVideoEnd}
            style={{ display: videoStarted ? 'block' : 'none',
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                objectFit: "cover",
                zIndex: -1000,
               }}
          >
            <source src={require("../../Assets/videos/intro.mp4")}  type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        navigate('/home')
      )}
    </div>
  )
}

export default Intro