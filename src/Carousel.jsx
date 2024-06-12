import React, { useEffect, useRef, useState } from 'react';
import './carousel.css'

// Composant pour chaque élément du carrousel
const CarouselItem = ({ item, isActive, onVideoEnd }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isActive && item.type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(error => {
        console.error("Error trying to play video automatically:", error);
      });
    }
  }, [isActive, item.type]);

  return (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
      {item.type === 'image' ? (
        <img src={item.src} alt="" />
      ) : (
        <video 
          ref={videoRef} 
          onEnded={onVideoEnd}
          muted 
          autoPlay
          controls>
            <source src={item.src} type="video/mp4"/>
        </video>
      )}
    </div>
  );
};

// Composant principal du carrousel
const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, items[activeIndex].type === 'video' ? 0 : 3000);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [activeIndex, isPaused, items]);

  const handleVideoEnd = () => {
    setIsPaused(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  useEffect(() => {
    if (items[activeIndex].type === 'video') {
      setIsPaused(true);
    }
  }, [activeIndex, items]);

  return (
    <div className="carousel">
      {items.map((item, index) => (
        <CarouselItem
          key={index}
          item={item}
          isActive={index === activeIndex}
          onVideoEnd={handleVideoEnd}
        />
      ))}
    </div>
  );
};

export default Carousel