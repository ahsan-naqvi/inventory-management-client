import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'sanitize.css/sanitize.css';
import 'react-material-layout/dist/react-material-layout.min.css';
import GlobalStyles from './Theme/globalStyles';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

const App = () => {
  // debugger;
  const token = localStorage.getItem('token');
  const isLoggedin = token ? true : false;
  let path = token ? '/home' : '/';
  return (
    <Router>
      <Routes>
        {/* <Route path={path} element={isLoggedin ? <HomePage /> : <LoginPage />} /> */}
        if(!isLoggedin){
          <Route path='/' element={<LoginPage />} />
        }else{          
          <Route path='/home' element={<HomePage />} /> 
        }
      </Routes>
      <GlobalStyles />
    </Router>
  );
};

export default App;
