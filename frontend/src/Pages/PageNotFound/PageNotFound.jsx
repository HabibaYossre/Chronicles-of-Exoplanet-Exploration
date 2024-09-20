import React from 'react'
import './PageNotFound.css'
import { useNavigate } from 'react-router-dom';
const PageNotFound = () => {
    const navigate=useNavigate();
  return (
    <div className='page-not-found'>
        <div className="notfound-content">
            <p className='not-found-title'>Lost in Space</p>
            <div className='line'></div>
            <p className='not-found-description'>Uh-oh! Looks like you've drifted off course and got lost in the vastness of space! 🚀
                <br/>
                Don't worry, space is big, but we've got your back. Hit the button below to return to our exoplanetary journey and explore the wonders of the universe again!</p>
            <button onClick={()=>navigate('/')}>Back to Universe</button>
        </div>
        <div className="notfound-img"></div>
    </div>
  )
}

export default PageNotFound