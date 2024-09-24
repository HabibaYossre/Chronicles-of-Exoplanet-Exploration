import React from "react";
import "./Cards.css";
import Cards from "./Cards";
import Navbar from "../../Components/Navbar/Navbar";

fetch("http://localhost:3000/planets").then();
const baseUrl = "http://localhost:3000/uploads";
const srcee = `${baseUrl}/14_Her_b.jpg`;
const list = [
  { img: `${baseUrl}/14_Her_b.jpg` },
  { img: `${baseUrl}/70_Vir_b.jpg` },
  { img: `${baseUrl}/1.png` },
  { img: `${baseUrl}/14_Her_b.jpg` },
  { img: `${baseUrl}/70_Vir_b.jpg` },
  { img: `${baseUrl}/1.png` },
  { img: `${baseUrl}/14_Her_b.jpg` },
  { img: `${baseUrl}/70_Vir_b.jpg` },
  { img: `${baseUrl}/1.png` },
];
function CardsManger() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
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
      <div className="container">
        {list.map((item) => (
          <Cards key={item.img} cardsList={item} />
        ))}
        {/* <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards /> */}
      </div>
    </div>
    </>

  );
}

export default CardsManger;
