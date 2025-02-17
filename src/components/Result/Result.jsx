import React, { useEffect, useRef, useState } from 'react';
import { FaSmile, FaFrown } from "react-icons/fa";
import './Result.scss';

const Result = ({ value, index, inputsRef }) => {
  const [inputValue, setInputValue] = useState('');
  const hasInput = inputValue !== '';
  const isCorrect = value === parseInt(inputValue);

  // const inputRef = useRef(null);

  useEffect(() => {
    if (index === 0 && inputsRef.current[0]) {
      inputsRef.current[0].focus();
    }
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (parseInt(e.target.value) === value) {
      const nextInput = inputsRef.current[index + 1];
      if (nextInput) {
        setTimeout(() => nextInput.focus(), 300)
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      window.location.reload();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <input
        ref={(el) => (inputsRef.current[index] = el)}
        type="number"
        value={inputValue}
        onChange={handleChange}
        className={`result ${hasInput ? (isCorrect ? 'right' : 'wrong') : ''}`}>
      </input>
      {hasInput && isCorrect && <FaSmile size={60} color='greenyellow' />}
      {hasInput && !isCorrect && <FaFrown size={60} color='red' />}
  </>
  )
}

export default Result
