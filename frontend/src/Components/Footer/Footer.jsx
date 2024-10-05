import React, { useEffect, useRef } from 'react'
import '../Footer/Footer.css'
import { assets } from '../../Assets/assets'
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const circleRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const footerRect = circleRef.current.parentElement.getBoundingClientRect();
      const x = event.clientX - footerRect.left;
      const y = event.clientY - footerRect.top;
      circleRef.current.style.left = `${x}px`;
      circleRef.current.style.top = `${y}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <div className='footer'>
      <div className="absolute z-10">
        <div onClick={() => navigate("/thank_you")} className='footer-btn'  >
      <span className='first'>E</span><span className='second'>n</span><span className='third'>d</span>
      <span className='middle fourth'>t</span><span className='fifth'>h</span><span className='sixth'>e</span>
      <span className='middle seventh'>j</span><span className='eighth'>o</span><span className='ninth'>u</span><span className='tenth'>r</span><span className='eleventh'>n</span><span className='twelfth'>e</span><span className='last'>y</span>
      </div>
      </div>
      <p>Ready to return to Earth?</p>
      <div className='cursor'ref={circleRef} ></div>
    </div>
  )
}

export default Footer