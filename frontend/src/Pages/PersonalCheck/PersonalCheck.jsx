import React, { useEffect, useState ,useRef} from "react";
import AnswerCard from "./Components/AnswerCard";
import axios from "axios";
import './styles/PersonalCheck.css';
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Swal from "sweetalert2";
import audio1 from '../../Assets/audio/audio1.mp3';
import { useNavigate } from "react-router-dom";
function PersonalCheck() {
    const [answer, setAnswer] = useState("");
    const [personality, setPersonality] = useState("");
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [questions,setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const audioRef = useRef(null);
    const baseUrl = "https://nasa-space-apps-2024.onrender.com/api/v1/";
    const navigate=useNavigate();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${baseUrl}questions/random`);
          setQuestions(response.data.body);
          console.log(response.data.body)
        } catch (error) {
          console.error('Error fetching planet data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleNextClick = () => {
      if (answer === '') {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You must choose an answer",
        });
        return; 
      }
    
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setSelectedAnswers([...selectedAnswers, answer]);
      } else {
      //   const fetchData = async () => {
      //     try {
      //       const response = await fetch(`${baseUrl}predict`, {
      //         method: 'POST',
      //         headers: {
      //           'Content-Type': 'application/json'
      //         },
      //         body: JSON.stringify({   "responses":
      //           selectedAnswers })
      //     });
  
      //     if (response.ok) {
      //       console.log('Data sent successfully');
      //       setPersonality(response.data.body);
      //       console.log(response.data.body)
      //     } else {
      //       console.error('Error fetching the personality test answer:');
      //     }
      //   } catch (error) {
      //     console.error('Error:', error);
      //   }
      // };
    
      //   fetchData();
      Swal.fire({
        title: "Good job!",
        text: "Your personality is similar to a Gas Giant like GJ 504 b. Discover more about it!",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Discover", 
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/cards/GJ_504_b"); // Navigate to results on OK click
        } else if (result.dismiss === Swal.DismissReason.cancel) { // Handle Discover click
          // Implement logic to display information about GJ 504 b
          // You can use another Swal.fire() or a separate modal window here
          audioRef.current.play();
          Swal.fire({
            title: "About GJ 504 b",
            html: `GJ 504 b is a gas giant exoplanet orbiting the red dwarf star GJ 504 in the constellation Libra. 
                    It is one of the densest exoplanets known, with a mass about four times that of Jupiter 
                    but a radius only slightly larger than Neptune. 
                    (You can add more information here)`,
            confirmButtonColor: "#3085d6",
          });
        }
      });
      }
      console.log(selectedAnswers, currentIndex, questions.length);
      setAnswer(''); 
    };
    const handleCardClick = (option) => {
      setAnswer(option);
    };
  return (
    <>
      <Navbar/>
    <div className="activity">
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
          zIndex: -1000,
        }}
      >
        <source
          src={require("../../Assets/videos/bgvideo.mp4")}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      
      <div className="m-auto">
      {questions.length > 0 ? (
          questions.map((question,index) => (
            <>
            <h2 style={{ display: index === currentIndex ? 'block' : 'none' }}>{question[1].text}</h2>
            <div className="py-8 text-3xl md:text-5xl card-container" style={{ display: index === currentIndex ? 'flex' : 'none' }}>
        {index === currentIndex && <AnswerCard options={question[1].options} key={index}   onCardClick={handleCardClick}  />}
      </div>
            </>
           
          ))
        ) : (
          <>...loading</>
        )}
      </div>
     <button className="activity-btn" onClick={handleNextClick} disabled={currentIndex === questions.length }>
        Next
      </button>
      <audio src={audio1} ref={audioRef} hidden />
    </div>
    <Footer />
    </>
  );
}

export default PersonalCheck;
