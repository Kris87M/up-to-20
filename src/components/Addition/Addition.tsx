import React from 'react';
import "../../styles/OperationStyles.scss";
import Calculation from '../Calculation/Calculation';

const Addition = () => {
  return (
    <div className='operation-container'>
      <h2>Dodawanie</h2>
      <Calculation operation={'add'} />
    </div>
  )
}

export default Addition;
