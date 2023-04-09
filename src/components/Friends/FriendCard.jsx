import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FriendCard.css';

const FriendCard = () => {
  const navigate = useNavigate();

  const handleStatistics = () => {
    navigate('/statistics');
  };

  return (
    <div className='show-stats-item'>
      <button onClick={handleStatistics}>
        Ver las estadísticas de mis amigos
      </button>
    </div>
  );
};

export default FriendCard;
