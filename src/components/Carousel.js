import React, { useState, useEffect } from 'react';
import PreviousArrow from '../assets/previous-arrow.svg'; 
import NextArrow from '../assets/next-arrow.svg';
import '../styles/styles-components/Carousel.scss';

const Carousel = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = pictures.length;
  const [translateValue, setTranslateValue] = useState(0);

  useEffect(() => {
    setTranslateValue(-currentImageIndex * 100); // 100% est la largeur de chaque image
  }, [currentImageIndex]);

  const goToPrevious = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(totalImages - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentImageIndex === totalImages - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };


  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div 
          className="carousel-images-container"
          style={{ transform: `translateX(${translateValue}%)` }}
        >
          {pictures.map((picture, index) => (
            <img key={index} src={picture} alt={`Property ${index}`} className="carousel-image" />
          ))}
        </div>
      </div>
      {totalImages > 1 && (
        <div className="carousel-arrows">
          <img src={PreviousArrow} className="left-arrow" onClick={goToPrevious} alt="Previous" />
          <img src={NextArrow} className="right-arrow" onClick={goToNext} alt="Next" />
        </div>
      )}
    </div>
  );
};

export default Carousel;
