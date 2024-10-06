import React, { useRef, useState } from 'react'
import './Chatbot.css'
import Navbar from '../../Components/Navbar/Navbar';
const Chatbot = () => {
    const botRef = useRef(null);
    const sendRef = useRef(null);
    const typingSound = new Audio(require('../../Assets/audio/light-switch-81967.mp3'));
    const [messages, setMessages] = useState([
        { text: "🌌 Welcome to the SpaceBot! How can I assist you on your cosmic journey?", sender: "bot" }
      ]);
      const [userInput, setUserInput] = useState('');
      const [botAnswer,setBotAnswer]=useState('Exoplanets can be found orbiting other stars in various galaxies beyond our own Milky Way. However, most of the discovered exoplanets are located within the Milky Way galaxy.Source:https://www.nasa.gov/exoplanets Note: The majority of exoplanet discoveries have been made using telescopes and space missions like Kepler, which primarily focused on stars within our own galaxy. ')
     
    const formatMessageWithLinksAndNewLines = (text) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const parts = text.split(urlRegex);
    
        return parts.map((part, index) => {
        if (urlRegex.test(part)) {
            return (
            <React.Fragment key={index}>
                <a
                href={part}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'blue', cursor: 'pointer' }}
                >
                {part}
                </a>
                <br /> 
            </React.Fragment>
            );
        } else {
            return part.split('.').map((sentence, sentenceIndex) => (
            <React.Fragment key={`${index}-${sentenceIndex}`}>
                {sentence.trim()}
                {sentenceIndex < part.split('.').length - 1 && '.'} 
                {sentenceIndex < part.split('.').length - 1 && <br />} 
            </React.Fragment>
            ));
        }
        });
    };
    
 

      const handleSend = () => {
        if (userInput.trim() !== '') {
          if (sendRef.current) { 
            sendRef.current.play(); 
          }
          const newMessages = [...messages, { text: userInput, sender: "user" }];
          setMessages(newMessages);
          setUserInput('');
          setTimeout(() => {
            const botReply = { text:botAnswer, sender: "bot" };
            setMessages(prevMessages => [...prevMessages, botReply]);
            if (botRef.current) { 
              botRef.current.play(); 
            }
          }, 1000);
        }
      };
    
      const handleInputChange = (e) => {
        setUserInput(e.target.value);
        typingSound.play(); // Play the typing sound
    };

  return (
    <>
     <Navbar/>
    <div className='chatbot-page'>
        <div style={{ position: "relative", overflow: "hidden" }}>
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
      </div>
         <div className="chat-container">
            <div className="chat-header">
                <h2>🚀 SpaceBot</h2>
            </div>
            <div className="chat-box">
                {messages.map((message, index) => (
                <div key={index} className={message.sender === 'bot' ? 'bot-message' : 'user-message'}>
                        <p>
                        {message.sender === 'bot'
                        ? formatMessageWithLinksAndNewLines(message.text)
                        : message.text}
                    </p>
                </div>
                ))}
            </div>
            <div className="chat-input">
                <input 
                type="text" 
                value={userInput} 
                onChange={handleInputChange}
                placeholder="Type your message..." 
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <button onClick={handleSend}>Send</button>
            </div>
            <audio ref={botRef}>
                <source src={require("../../Assets/audio/ding-sound-246413.mp3")} type="audio/mp3"/>
            </audio>
            <audio ref={sendRef}>
                <source src={require("../../Assets/audio/happy-pop-2-185287.mp3")} type="audio/mp3"/>
            </audio>
        </div>
    </div>
    </>
  )
}

export default Chatbot