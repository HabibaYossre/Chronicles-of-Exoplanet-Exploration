import React, { useEffect, useState } from "react";
import "./Cards.css";
const baseUrl = "https://nasa-space-apps-2024.onrender.com/api/v1/uploads";
const srcee = `${baseUrl}/14_Her_b.jpg`;
function Cards({ cardItem }) {
  return (
    <div
      className={"card"}
      style={{ backgroundImage: `url(${baseUrl}/${cardItem.name}.jpg)` }}
    >
      <div className="card-content">
        <h2 className="card-title">{cardItem.name}</h2>
        <div className="flex-col py-3">
          <p className="card-body">Mass: {cardItem.planet_mass}</p>
          <p className="card-body">Radius: {cardItem.planet_radius}</p>
        </div>
        <a href="#" className="button">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Cards;
