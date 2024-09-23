import React, { useEffect, useState } from "react";
import "./Cards.css";
const baseUrl = "http://localhost:3000/uploads";
const srcee = `${baseUrl}/14_Her_b.jpg`;
function Cards({ cardsList }) {
  return (
    <div
      className={"card"}
      style={{ backgroundImage: `url(${cardsList.img})` }}
    >
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

export default Cards;
