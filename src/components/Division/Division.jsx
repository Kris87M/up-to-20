import React, { useRef } from 'react';
import Calculation from '../Calculation/Calculation'

const Division = () => {
  const inputsRef = useRef([]);

  return (
    <div className='operation-container'>
      <h2>Dzielenie</h2>
        {[...Array(3)].map((_, index) => (
          <Calculation key={index} operation={'divide'} index={index} inputsRef={inputsRef} />
        ))}
    </div>
  )
}

export default Division;
