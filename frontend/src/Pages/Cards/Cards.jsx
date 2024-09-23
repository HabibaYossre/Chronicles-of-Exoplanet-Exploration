import React from 'react'
import './Cards.css'
const srcee = 'https://media.contentapi.ea.com/content/dam/eacom/images/2020/09/ea-featured-image-ea-desktop-beta.jpg.adapt.crop191x100.1200w.jpg'
function Cards() {
  return (
    <div className={"card"} style={{ backgroundImage: `url(${srcee})` }}>
      <div className="card-content">
        <h2 className="card-title">Something Awesome</h2>
        <p className="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
          culpa.
        </p>
        <a href="#" className="button">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Cards