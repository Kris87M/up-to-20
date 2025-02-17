import React from 'react';
import './RandomNumber.scss';

const RandomNumber = ({value}) => {
  return (
    <div className='randomNumber'>
      {value}
    </div>
  )
}

export default RandomNumber;