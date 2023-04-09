import React from 'react';
import Header from '../../components/Header/Header';
import GirlImage from '../../components/Login/GirlImage';
import Login from '../../components/Login/Login';
import './MainPage.css';

const MainPage = () => {
  return (
    <div>
      <Header
        className='header-container'
        image='/src/images/headerImage.png'
      />
      <div className='container'>
        <div className='login-container'>
          <Login />
        </div>
        <div className='girl-container'>
          <GirlImage />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
