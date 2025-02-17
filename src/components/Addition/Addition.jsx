import React, { useRef, useState } from 'react';
import "../../styles/OperationStyles.scss";
import Calculation from '../Calculation/Calculation';

const Addition = () => {
  const inputsRef = useRef([]);
  // const [range, setRange] = useState(11);

  // const handleChange = (e) => {
  //   setRange(e.target.value)
  // }

  return (
   <div className='operation-container'>
      <h2>Dodawanie</h2>
      {/* <h3>Wybierz zakres</h3>
      <input type="number" onChange={handleChange}></input> */}
      {[...Array(3)].map((_, index) => (
        <Calculation key={index} operation={'add'} index={index} inputsRef={inputsRef} /*range={range} *//>
      ))}
    </div>
  )
}

export default Addition;
