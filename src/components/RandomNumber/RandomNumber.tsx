import React from 'react';
import './RandomNumber.scss';

const RandomNumber = () => {
  let randomNumber = Math.floor(Math.random()*21);
  return (
    <div className='randomNumber'>
      {randomNumber}
    </div>
  )
}

export default RandomNumber
