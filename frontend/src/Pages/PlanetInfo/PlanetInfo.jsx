import React, { useEffect, useState } from 'react'
import './PlanetInfo.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import { CircularProgress } from '@mui/material';
import Footer from '../../Components/Footer/Footer';
const PlanetInfo = () => {
    const baseUrl = "https://nasa-space-apps-2024.onrender.com/api/v1/";
    const { planetName } = useParams();
    const [planetData,setPlanetData]=useState({
        name: "",
        URL: "",
        planet_mass: "",
        planet_radius: "",
        planet_discovery_method: "",
        discovery_date: null,
        planet_type: null
    }
    );
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${baseUrl}planets/name/${planetName}`);
            setPlanetData(response.data.body);
            console.log(planetData,planetName)
            console.log(response.data.body)
          } catch (error) {
            console.error('Error fetching planet data:', error);
          }
        };
    
        fetchData();
      }, [planetName]);

  return (
  //   <div>
  //   {planetData ? (
  //       <>
  //       <Navbar/>
  //       <div className="flex justify-center">
  //       <video
  //         autoPlay
  //         loop
  //         muted
  //         style={{
  //           position: "fixed",
  //           top: 0,
  //           left: 0,
  //           width: "100%",
  //           height: "100vh",
  //           objectFit: "cover",
  //           zIndex: -1,
  //         }}
  //       >
  //         <source
  //           src={require("../../Assets/videos/bgvideo.mp4")}
  //           type="video/mp4"
  //         />
  //         Your browser does not support the video tag.
  //       </video>
  //       <div className='planet-info'   style={{ backgroundImage: `url(${baseUrl}uploads/${planetName}.jpg)` }}>
  //               <div className="planet-info-overlay">
  //                   <div className="planet-info-left">
  //                   <h3>planet mass</h3>
  //                   <p>{planetData.planet_mass}</p>
  //                   <h3 className='planet-title'>planet radius</h3>
  //                   <p>{planetData.planet_radius}</p>
  //                   </div>
  //                   <div className="planet-info-center">
  //                       <h2>{planetData.name}</h2>
  //                       <p>Super Earth</p>
  //                   </div>
  //                   <div className="planet-info-right">
  //                   <h3>planet discovery method</h3>
  //                   <p>{planetData.planet_discovery_method}</p>
  //                   <h3 className='planet-title'>discovery date</h3>
  //                   <p>{planetData.discovery_date}</p>
  //                   </div>
  //               </div>
  //           </div> 
  //     </div>
  //     <iframe
  //       src={`https://eyes.nasa.gov/apps/exo/#/planet/${planetName}`}
  //       style={{ width: "100%", height: 600, border: "none" }}
  //     />
  //        <Footer />
  //       </>
  //   ) : (
  //       <div className="bg-black h-screen flex justify-center items-center">
  //       <CircularProgress />
  //     </div>
  //   )}
  // </div>
  <div>
  {planetData ? (
      <>
      <Navbar/>
      <div className="planet-info">
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
      <h2>{planetName}</h2>
      <div className="simulation">
      <iframe
      src={`https://eyes.nasa.gov/apps/exo/#/planet/${planetName}`}
      style={{ width: "100%",height:"100%", border: "none" }}
    />
      </div>
      <div className='planet-info-main'>
        <h3>Discoverd: </h3>
        <p>{planetData.discovery_date}</p>
        <br/>
        <h3>Planet Type: </h3>
        <p>{planetData.planet_type}</p>
      </div>
      <div className='planet-info-content'>
        <div>
          <h3>planet mass</h3>
          <p>{planetData.planet_mass}</p>
        </div>
        <div className="info-line"></div>
        <div>
          <h3 className='planet-title'>planet radius</h3>
          <p>{planetData.planet_radius}</p>
        </div>
        <div className="info-line"></div>
        <div>
          <h3>planet discovery method</h3>
          <p>{planetData.planet_discovery_method}</p>
        </div>
      </div>
      {/* <div className='planet-info'   style={{ backgroundImage: `url(${baseUrl}uploads/${planetName}.jpg)` }}>
              <div className="planet-info-overlay">
                  <div className="planet-info-left">
                  <h3>planet mass</h3>
                  <p>{planetData.planet_mass}</p>
                  <h3 className='planet-title'>planet radius</h3>
                  <p>{planetData.planet_radius}</p>
                  </div>
                  <div className="planet-info-center">
                      <h2>{planetData.name}</h2>
                      <p>Super Earth</p>
                  </div>
                  <div className="planet-info-right">
                  <h3>planet discovery method</h3>
                  <p>{planetData.planet_discovery_method}</p>
                  <h3 className='planet-title'>discovery date</h3>
                  <p>{planetData.discovery_date}</p>
                  </div>
              </div>
          </div>  */}
    </div>
   
       <Footer />
      </>
  ) : (
      <div className="bg-black h-screen flex justify-center items-center">
      <CircularProgress />
    </div>
  )}
</div>
  )
}

export default PlanetInfo