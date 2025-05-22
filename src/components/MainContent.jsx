
import React from 'react';
import './MainContent.css';
import Spiral from '../assets/images/Spiral.png';

const MainContent = ({ children }) => {
  return (
    <div className="main-content">
     
      <div
        className="spiral-bg"
        style={{
          backgroundImage: `url(${Spiral})`,
        }}
      />
      
      {/* This portion is for  Foreground content */}
      <div className="main-content-inner">
        {children}
      </div>
    </div>
  );
};

export default MainContent;
