import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import StatisticsPage from './pages/statisticsPage/StatisticsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<MainPage />}
        />
        <Route
          path='/register'
          element={<RegisterPage />}
        />
        <Route
          path='/my-profile'
          element={<ProfilePage />}
        />
        <Route
          path='/statistics'
          element={<StatisticsPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
