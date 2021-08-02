import { PreviousMap } from 'postcss';
import React from 'react'; 


const Card = props => {
  return (
    <div className={`hover:shadow-2xl p-6 bg-yellow-200 rounded items-center align-middle ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card; 