import React from 'react';
import BlueCircle from '../../images/blue-circle.png';
import './Circle.css';

const Circle = () => {
  return (
    <div className='circle-container'>
      <div>
        <img
          className='blue-circle'
          src={BlueCircle}
          alt='blue-circle'
        />
      </div>
    </div>
  );
};

export default Circle;
