import React from 'react';
import girlImage from '../../images/girlImage.png';
import './GirlImage.css';

const GirlImage = () => {
  return (
    <div className="girl-item">
        <img src={girlImage} alt="girl-img" />
    </div>
  )
}

export default GirlImage;