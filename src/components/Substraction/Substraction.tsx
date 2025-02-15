import React from 'react';
import Calculation from '../Calculation/Calculation'

const Substraction = () => {
  return (
    <div className='operation-container'>
      <h2>Odejmowanie</h2>
      <Calculation operation={'substract'} />
    </div>
  )
}

export default Substraction;
