import React, { useEffect, useState ,useRef} from "react";
import AnswerCard from "./Components/AnswerCard";
import axios from "axios";
import './styles/PersonalCheck.css';
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Swal from "sweetalert2";
import audio1 from '../../Assets/audio/audio1.mp3';
import { useNavigate } from "react-router-dom";
import { assets } from "../../Assets/assets";
function PersonalCheck() {
    const [answer, setAnswer] = useState("");
    const [personality, setPersonality] = useState({});
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [questions,setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const baseUrl = "https://nasa-space-apps-2024.onrender.com/api/v1/";
    const audioRef = useRef(null);
    const audio2Ref = useRef(null);
    const audio3Ref = useRef(null);
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

    const speakMessage = (message) => {
      const speech = new SpeechSynthesisUtterance(message);
      speech.lang = 'en-US'; 
      window.speechSynthesis.speak(speech);
  };


    const handleNextClick = () => {
      if (answer === '') {
        if (audio3Ref.current) { 
          audio3Ref.current.play(); 
        }
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
        const updatedAnswers = [...selectedAnswers, answer]; 
        setSelectedAnswers([...selectedAnswers, answer]);
        const fetchData = async () => {
          console.log('Final selected answers:', updatedAnswers);
          console.log(JSON.stringify({"responses":
            updatedAnswers }));
          console.log('Final selected', selectedAnswers);
          try {
            const response = await fetch(`${baseUrl}questions/answers`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({"responses":
                updatedAnswers })
          });
          if (response.ok) {
            const responseData = await response.json();
            console.log('Data sent successfully');
            console.log('Response body:', responseData.body); 
            setPersonality(responseData.body);
          } else {
            console.error('Error fetching the personality test answer');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
        fetchData();
    }
      console.log(selectedAnswers, currentIndex, questions.length);
      setAnswer(''); 
    };

      useEffect(() => {
        if (personality.predicted_planet_type && personality.predicted_planet_name) {
          if (audioRef.current) { 
            audioRef.current.play(); 
          }
          speakMessage(`Your personality is similar to a ${personality.predicted_planet_type} like ${personality.predicted_planet_name}. Discover more about it!`);      
          Swal.fire({
            title: "Good job!",
            text: `Your personality is similar to a ${personality.predicted_planet_type} like ${personality.predicted_planet_name}. Discover more about it!`,
            icon: "success",
            confirmButtonColor: "#5e189a",
            confirmButtonText: "Discover",
            allowOutsideClick: false,
            allowEscapeKey: false,    
            allowEnterKey: false     
          }).then((result) => {
            if (result.isConfirmed) {
              navigate(`/cards/${personality.predicted_planet_name}`);
              setSelectedAnswers([]);
              setCurrentIndex(0);
            }
          });
        }
  }, [personality]); 
    const handleCardClick = (option) => {
      if (audio2Ref.current) { 
        audio2Ref.current.play(); 
      }
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
            <div  className="py-8 text-3xl md:text-5xl card-container" style={{ display: index === currentIndex ? 'flex' : 'none' }}>
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
      <audio ref={audioRef}>
        <source src={require("../../Assets/audio/audio1.mp3")} type="audio/mp3"/>
      </audio>
      <audio ref={audio2Ref}>
        <source src={require("../../Assets/audio/card-sounds-35956.mp3")} type="audio/mp3"/>
      </audio>
      <audio ref={audio3Ref}>
        <source src={require("../../Assets/audio/error-126627.mp3")} type="audio/mp3"/>
      </audio>
    </div>
    
    <Footer />
    </>
  );
}

export default PersonalCheck;
