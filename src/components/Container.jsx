import React, { useState } from 'react';
 // Import the CSS file

const images = [
  '/pink.jpg',
  '/white.jpg',
  './shop.jpg'
  
];

function Container() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      className="banner-container"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      {/* Left arrow */}
      <div className="left-arrow" onClick={handlePrevSlide}>
        &#10094;
      </div>

      {/* Text Content */}
      <div className="content">
        <p className="season">SUMMER 2020</p>
        <h1 className="headline">NEW COLLECTION</h1>
        <p className="description">
          We know how large objects will act,<br/> but things on a small scale.
        </p>
        <a href="#" className="shop-now-btn">
          Shop Now
        </a>
      </div>

      {/* Right arrow */}
      <div className="right-arrow" onClick={handleNextSlide}>
        &#10095;
      </div>
    </div>
  );
};

export default Container;
