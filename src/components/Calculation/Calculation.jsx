import React, { useEffect, useState } from 'react'
import RandomNumber from '../RandomNumber/RandomNumber';
import { FaPlus, FaEquals, FaMinus, FaDivide, FaTimes } from "react-icons/fa";
import './Calculation.scss'
import Result from '../Result/Result';

const Calculation = ({ operation, index, inputsRef, range }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const generateNumbers = () => {
    setNum1(Math.floor(Math.random() * 11));
    setNum2(Math.floor(Math.random() * 11));
  };

  useEffect(() => {
    generateNumbers();
  }, [range]);


  let result;
  let operator;
  let num1Display = num1;
  let num2Display = num2;

  if (operation === 'add') {
    result = num1 + num2;
    operator = <FaPlus />;
  } else if (operation === 'substract') {
    const greater = Math.max(num1, num2);
    const lesser = Math.min(num1, num2);
    num1Display = greater;
    num2Display = lesser;
    result = greater - lesser;
    operator = <FaMinus />;
  } else if (operation === 'divide') {
    result = num1 / num2;
    operator = <FaDivide />
  } else if (operation === 'multiply') {
    result = num1 * num2;
    operator = <FaTimes />
  }

  return (
    <div className='calculation'>
      <RandomNumber value={num1Display} />
      {operator}
      <RandomNumber value={num2Display} />
      <FaEquals />
      <Result value={result} index={index} inputsRef={inputsRef} />
    </div>
  )
}

export default Calculation;
