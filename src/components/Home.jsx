import React, { useState } from 'react';
import './Home.css';
import axios from 'axios';
import Output from './Output';

const Home = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = import.meta.env.VITE_HUGGING_FACE_TOKEN;
const countChar = (text) => {
  if (!text) return 0;
  return text.length;
}
const countWords = (text)=>{
  if(!text) return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
}
  const handleChange = (e) => {
    setInput(e.target.value);
   
  };

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/sshleifer/distilbart-cnn-12-6',
        {
          inputs: input
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data && response.data[0]) {
        console.log(response.data);
        setData(response.data[0].summary_text);
        
      } else {
        setData("No summary generated.");
      }
    } catch (error) {
      console.error('Error generating text:', error);
      setData("Failed to generate text.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleClear = () => {
    setInput('');
    setData('');
  };

  return (
    <div>
      <div className="container">
        <h1 className="title">KREKRIZER</h1>
        <div className="text-container">
          <textarea value={input} onChange={handleChange}></textarea>
          <div className="button-container">
            <button className="btn" onClick={handleGenerate}>Generate</button>
            <button className="btn" onClick={handleClear}>Clear</button>
          </div>
          <div className="words-char">Total Character: {countChar(input)}</div>
          <div className="words-char">Total Words: {countWords(input)}</div>
        </div>
      </div>
      <div className="output"><h2>The Summarized Text is below</h2>
        {isLoading ? <p>Loading... takes 2 to 3 min</p> : <Output output={data} />}
      </div>
    </div>
  );
};

export default Home;
