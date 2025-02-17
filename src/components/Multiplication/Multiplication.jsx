import React, { useRef } from 'react';
import Calculation from '../Calculation/Calculation';

const Multiplication = () => {
  const inputsRef = useRef([]);

  return (
    <div className='operation-container'>
      <h2>Mnożenie</h2>
        {[...Array(3)].map((_, index) => (
          <Calculation key={index} operation={'multiply'} index={index} inputsRef={inputsRef} />
        ))}
    </div>
  )
}

export default Multiplication;
