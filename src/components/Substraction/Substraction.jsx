import React, { useRef } from 'react';
import Calculation from '../Calculation/Calculation'

const Substraction = () => {
  const inputsRef = useRef([]);

  return (
    <div className='operation-container'>
      <h2>Odejmowanie</h2>
        {[...Array(3)].map((_, index) => (
          <Calculation key={index} operation={'substract'} index={index} inputsRef={inputsRef} />
        ))}
    </div>
  )
}

export default Substraction;
