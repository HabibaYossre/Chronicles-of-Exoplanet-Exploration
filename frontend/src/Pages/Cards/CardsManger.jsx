import React, { useEffect, useState } from "react";
import "./Cards.css";
import Cards from "./Cards";
import Pagination from "@mui/material/Pagination";
import { CircularProgress, Stack } from "@mui/material";
import GifIcon from "../../Components/GifIcon";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
const pageLimit = 12;
function CardsManger() {
  const [list, setList] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  const handleChangePage = (event, newPage) => {
    setPageNumber(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://nasa-space-apps-2024.onrender.com/api/v1/planets?limit=${pageLimit}&page=${pageNumber}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPagesCount(Math.ceil(data.body.totalPlanets / pageLimit));
        // console.log(pagesCount);

        setList(data.body.planets); // Update list state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors appropriately, e.g., display an error message to the user
      }
    };

    fetchData();
  }, [pageNumber]);
  return list ? (
    <Stack spacing={2}>
      <Navbar />
      <div className="flex items-center justify-center gap-3 pt-24">
        <GifIcon
          src={require("../../Assets/GIF/output-onlinegiftools.gif")}
          alt="My GIF icon"
          size="64px"
        />
        <h1 className="text-white text-4xl md:text-6xl">Exoplanets</h1>
        <GifIcon
          src={require("../../Assets/GIF/output-onlinegiftools.gif")}
          alt="My GIF icon"
          size="64px"
        />
      </div>
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
            <Cards key={item.name} cardItem={item} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Pagination
          count={pagesCount}
          color="primary"
          className="bg-[rgba(0,0,0,0.7)] rounded-2xl py-1 px-6 mb-4 page-white"
          onChange={handleChangePage}
        />
      </div>
      {/* <iframe
        src="https://eyes.nasa.gov/apps/exo/#/planet/BD+20_2457_c"
        style={{ width: "100%", height: 600, border: "none" }}
      /> */}
         <Footer />
    </Stack>
  ) : (
    <div className="bg-black h-screen flex justify-center items-center">
      <CircularProgress />
    </div>
  );
}

export default CardsManger;
