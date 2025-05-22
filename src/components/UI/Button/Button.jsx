import React from 'react';
import './Button.css';

const Button = ({ children, className, icon, onClick }) => {
  return (
    <button 
      className={`button ${className || ''} ${icon ? 'button-with-icon' : ''}`} 
      onClick={onClick}
    >
      {icon === 'play' && <span className="button-icon">▶</span>}
      {children}
    </button>
  );
};

export default Button;