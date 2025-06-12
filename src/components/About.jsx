import React from 'react';
import './Home.css';

const About = () => {
  return (
    <div className="container">
      <h1 className="title">About This Project</h1>
      
      <div className="output">
        <h2>📌 Project</h2>
        <p>
          Krekrizer is a text summarization app powered by Hugging Face's transformer models. 
          It allows users to input lengthy content and get a concise summary instantly. Ideal for students, researchers, and anyone who wants to save time.
        </p>

        <h2>👤 About</h2>
        <p>
          This project is built using React.js, Axios for HTTP requests, and the Hugging Face API for natural language processing. The styling is handled using pure CSS.
        </p>

        <h2>🧠 Me</h2>
        <p>
          I’m a passionate self-learner. Me llamo Dikshanta Shrestha de Nepal.
        </p>
      </div>
    </div>
  );
};

export default About;
