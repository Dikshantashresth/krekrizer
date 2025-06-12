import React from 'react';

const Output = ({ output }) => {
  const countChar = (text) => {
    if (!text) return 0;
    return text.length;
  };

  const countWords = (text) => {
    if (!text) return 0;
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const clip = (text) => {
    navigator.clipboard.writeText(text);
  };

  if (!output) {
    return <p>Generate the text here</p>;
  }

  return (
    <div>
      <p>{output}</p>
      <div className="counter-container">
        <div className="words-char">Total Character: {countChar(output)}</div>
      <div className="words-char">Total Words: {countWords(output)}</div>
      </div>
      
      <div className="button-container">
        <button className='btn' onClick={() => clip(output)}>Copy to clipboard</button>
      </div>
    </div>
  );
};

export default Output;
