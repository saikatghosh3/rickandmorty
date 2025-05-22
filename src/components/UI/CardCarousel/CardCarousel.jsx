import React, { useRef, useState, useEffect } from 'react';
import './CardCarousel.css';

const CardCarousel = ({ children }) => {
  const carouselRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('resize', checkScrollPosition);
    return () => window.removeEventListener('resize', checkScrollPosition);
  }, []);

  const checkScrollPosition = () => {
    if (!carouselRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    
    const scrollAmount = direction === 'left' ? -300 : 300;
    carouselRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
    
    setTimeout(checkScrollPosition, 300);
  };

  return (
    <div className="carousel-container">
      {showLeftArrow && (
        <button className="carousel-arrow carousel-arrow-left" onClick={() => scroll('left')}>
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7'/%3E%3C/svg%3E"
            alt="Previous"
            className="carousel-arrow-icon"
          />
        </button>
      )}
      
      <div 
        className="carousel" 
        ref={carouselRef}
        onScroll={checkScrollPosition}
      >
        {children}
      </div>
      
      {showRightArrow && (
        <button className="carousel-arrow carousel-arrow-right" onClick={() => scroll('right')}>
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5l7 7-7 7'/%3E%3C/svg%3E"
            alt="Next"
            className="carousel-arrow-icon"
          />
        </button>
      )}
    </div>
  );
};

export default CardCarousel;