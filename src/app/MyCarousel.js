'use client';
import React, { useState, useEffect } from 'react';

const MyCarousel = ({ interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'js.svg',
        'nextjs.svg',
        'java.svg',
        'kotlin.svg',
        'react.svg',
        'html.svg', // Move index 0 to the end
    ];

    // Function to go to the next slide
    const goToNextSlide = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        // Automatically advance to the next slide at the specified interval
        const intervalId = setInterval(goToNextSlide, interval);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [currentIndex, interval]);

    return (
        <div className="image-carousel flex flex-row mt-6" style={{ width: `${images.length * 10}%` }}>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={{ width: '50%', height: '10%' }} className="ml-2 px-2 mr-2 w-1/3"/>
            <img src={images[currentIndex + 1]} alt={`Slide ${currentIndex + 1}`} style={{ width: '50%', height: '10%' }}  className="ml-2 px-2 mr-2 w-1/3"/>
            <img src={images[currentIndex + 2]} alt={`Slide ${currentIndex + 1}`} style={{ width: '50%', height: '10%' }}  className="ml-2 px-2 mr-2 w-1/3"/>
        </div>
    );
};

export default MyCarousel;
