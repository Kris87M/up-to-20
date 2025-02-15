import React, { useState } from 'react'
import RandomNumber from '../RandomNumber/RandomNumber';
import { FaPlus, FaEquals, FaMinus } from "react-icons/fa";
import './Calculation.scss'
import Result from '../Result/Result';

const Calculation = ({operation}) => {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 11));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 11));

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
  }

  return (
    <div className='calculation'>
      <RandomNumber value={num1Display} />
      {operator}
      <RandomNumber value={num2Display} />
      <FaEquals />
      <Result value={result} />
    </div>
  )
}

export default Calculation
