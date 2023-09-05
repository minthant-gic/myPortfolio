'use client';
import React, {useState, useEffect} from 'react';

const MyCarousel = ({interval = 2000}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'java.svg',
        'kotlin.svg',
        'html.svg',
        'js.svg',
        'react.svg',
        'nextjs.svg',
        'tailwindcss.svg'
    ];

    const goToNextSlide = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, interval);

        return () => clearInterval(intervalId);
    }, [currentIndex, interval]);

    const renderImages = () => {
        const renderedImages = [];
        for (let i = 0; i < 3; i++) {
            const imageIndex = (currentIndex + i) % images.length;
            const image = images[imageIndex];
            renderedImages.push(
                <img
                    key={imageIndex}
                    src={image}
                    alt={`Slide ${imageIndex + 1}`}
                    style={{width: '50%', height: '10%'}}
                    className="ml-2 px-2 mr-2 w-1/3"
                />
            );
        }
        return renderedImages;
    };

    return (
        <>
            <div className="mt-16 font-mono text-2xl text-center">Experience with</div>
            <div className="mt-6 mb-16">
                <div className="image-carousel flex flex-row justify-center items-center ml-24 py-4"
                     style={{width: '50%', height: '10%'}}>
                    {renderImages()}
                </div>
            </div>
        </>
    );
};

export default MyCarousel;
