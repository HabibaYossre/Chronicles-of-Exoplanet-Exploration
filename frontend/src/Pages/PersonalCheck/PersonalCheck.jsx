import React, { useState } from "react";
import AnswerCard from "./Components/AnswerCard";

function PersonalCheck() {
    const [answers,setAnswers] = useState([]);
    const [questions,setQuestions] = useState([]);
  return (
    <div className="h-screen items-center ">
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
      <div className="py-8 text-3xl md:text-5xl flex items-center justify-center">
        <h1 className="text-white bg-[rgba(0,0,0,0.7)]">what is your name</h1>
      </div>
      <div className="flex w-[80%] m-auto justify-around flex-wrap gap-4 md:gap-0">
        {questions}?
        {questions.map((question) => (
          <AnswerCard {...questions}/>
        ))}
        :<>...loading</>
      </div>
    </div>
  );
}

export default PersonalCheck;
