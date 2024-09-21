import React, { useEffect, useRef } from 'react'
import '../Footer/Footer.css'
import { assets } from '../../Assets/assets'
const Footer = () => {
  const circleRef = useRef(null);
  const ballsRef1 = useRef(null);
  const ballsRef2 = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const footerRect = circleRef.current.parentElement.getBoundingClientRect();
      const x = event.clientX - footerRect.left;
      const y = event.clientY - footerRect.top;
      const a = (event.clientX * 100) / window.innerWidth - 50 + '%';
      const b = (event.clientY * 100) / window.innerHeight - 50 + '%';

      ballsRef1.current.style.transform = `translate(${a}, ${b})`;
      ballsRef2.current.style.transform = `translate(${a}, ${b})`;
      circleRef.current.style.left = `${x}px`;
      circleRef.current.style.top = `${y}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <div className='footer'>
      <div className="absolute z-10">
        <div className='footer-btn'>
      <span className='first'>E</span><span className='second'>n</span><span className='third'>d</span>
      <span className='middle fourth'>t</span><span className='fifth'>h</span><span className='sixth'>e</span>
      <span className='middle seventh'>j</span><span className='eighth'>o</span><span className='ninth'>u</span><span className='tenth'>r</span><span className='eleventh'>n</span><span className='twelfth'>e</span><span className='last'>y</span>
      </div>

      </div>
        <img src={assets.footer} draggable='false'/>
        <div className="eyes">
          <div className="eye">
              <div className="balls" ref={ballsRef1}></div>
          </div>
          <div className="eye">
              <div className="balls" ref={ballsRef2}></div>
          </div>
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
            height: "40vh",
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
      <div className='cursor'ref={circleRef} ></div>
    </div>
  )
}

export default Footer