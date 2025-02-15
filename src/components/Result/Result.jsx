import React, { useEffect, useRef, useState } from 'react';
import { FaSmile, FaFrown } from "react-icons/fa";
import './Result.scss';

const Result = ({ value }) => {
  const [inputValue, setInputValue] = useState('');
  const hasInput = inputValue !== '';
  const isCorrect = value === parseInt(inputValue);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
        ref={inputRef}
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={`result ${hasInput ? (isCorrect ? 'right' : 'wrong') : ''}`}>
      </input>
      {hasInput && isCorrect && <FaSmile size={60} color='greenyellow' />}
      {hasInput && !isCorrect && <FaFrown size={60} color='red' />}
  </>
  )
}

export default Result
