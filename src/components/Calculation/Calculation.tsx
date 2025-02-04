import React from 'react'
import RandomNumber from '../RandomNumber/RandomNumber';
import { FaPlus } from "react-icons/fa";
import { FaEquals } from "react-icons/fa";
import './Calculation.scss'
import Result from '../Result/Result';

const Calculation = () => {
  return (
    <div className='calculation'>
      <RandomNumber />
      <FaPlus />
      <RandomNumber />
      <FaEquals />
      <Result />
    </div>
  )
}

export default Calculation
