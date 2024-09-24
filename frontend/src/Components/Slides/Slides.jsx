import React, { useState, useEffect, useRef } from "react";
import "./Slides.css";
import GifIcon from "../GifIcon";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
const baseUrl = "https://nasa-space-apps-2024.onrender.com/api/v1";

// SliderItem Component
function SliderItem({
  name,
  planet_mass,
  planet_radius,
  planet_discovery_method,
  discovery_date,
  onSeeMore,
}) {
  return (
    <div className="item">
      <img
        src={`${baseUrl}/uploads/${name}.jpg`}
        alt={name}
        className="rounded-full shadow-lg fade-effect"
      />
      <div className="introduce">
        <div className="title text-white py-3 pb-7 text-4xl md:text-6xl">
          {name}
        </div>
        <div className="des">
          <p>Mass: {planet_mass}</p>
          <p>Radius: {planet_radius}</p>
          <p>Discovery Date: {discovery_date}</p>
        </div>
      </div>
      <button className="seeMore" onClick={onSeeMore}>
        See More
      </button>
    </div>
  );
}

// Carousel Component
function Slides() {
  const navigate = useNavigate()
  const [items, setItems] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [sliderClass, setSliderClass] = useState(""); // to manage next/prev animations
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const carouselRef = useRef(null);
  const listRef = useRef(null); // Reference for the list of items
  let unAcceptClick;

  useEffect(() => {
    const pageNumber = Math.floor(Math.random() * 6) + 1;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://nasa-space-apps-2024.onrender.com/api/v1/planets?limit=6&page=${pageNumber}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setItems(data.body.planets); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const showSlider = (type) => {
    if (nextButtonRef.current && prevButtonRef.current) {
      nextButtonRef.current.style.pointerEvents = "none";
      prevButtonRef.current.style.pointerEvents = "none";

      setSliderClass(type); // Add animation class

      setItems((prevItems) => {
        if (type === "next") {
          const [firstItem, ...rest] = prevItems;
          return [...rest, firstItem];
        } else {
          const lastItem = prevItems[prevItems.length - 1];
          const rest = prevItems.slice(0, -1);
          return [lastItem, ...rest];
        }
      });

      clearTimeout(unAcceptClick);
      unAcceptClick = setTimeout(() => {
        nextButtonRef.current.style.pointerEvents = "auto";
        prevButtonRef.current.style.pointerEvents = "auto";
        setSliderClass(""); // Reset animation class after timeout
      }, 600);
    }
  };

  const handleSeeMore = () => {
    setShowDetail(true);
    setSliderClass("showDetail"); 
  };

  const handleBack = () => {
    setShowDetail(false);
    setSliderClass(""); 
  };

  return items ? (
    <div className={`carousel ${sliderClass}`} ref={carouselRef}>
      <div className="list" ref={listRef}>
        {items.map((item, index) => (
          <SliderItem key={index} {...item} onSeeMore={handleSeeMore} />
        ))}
      </div>
      <div className="arrows text-white">
        <div
          ref={prevButtonRef}
          className="-scale-100"
          onClick={() => showSlider("prev")}
        >
          <GifIcon
            src={require("../../Assets/GIF/fast-forward.gif")}
            alt="My GIF icon"
            size="64px"
          />
        </div>
        <div id="back" className="" onClick={() => navigate("/cards")}>
          <GifIcon
            src={require("../../Assets/GIF/wired-flat-49-plus-circle-hover-rotation.gif")}
            alt="My GIF icon"
            size="64px"
          />
        </div>

        <div ref={nextButtonRef} onClick={() => showSlider("next")}>
          <GifIcon
            src={require("../../Assets/GIF/fast-forward.gif")}
            alt="My GIF icon"
            size="64px"
          />
        </div>

      </div>

      {showDetail && (
        <div className="showDetail">
          {/* Additional details can be displayed here */}
        </div>
      )}
    </div>
  ) : (
    <div className="bg-black h-screen flex justify-center items-center z-[10000] ">
      <CircularProgress />
    </div>
  );
}

export default Slides;
