import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

import imageWelcomeToBaysquare from '../assets/images/hero1.jpg';
import imageCollaboration from '../assets/images/hero2.jpg';
import imagePassion from '../assets/images/hero3.jpg';

const slides = [
    {
        image: imageWelcomeToBaysquare,
        title: 'Welcome to Baysquare',
    },
    {
        image: imageCollaboration,
        title: 'Innovate with us',
    },
    {
        image: imagePassion,
        title: '',
    },
];

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000); // Auto-play interval
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <section className="hero-section" id="home">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url('${slide.image}')` }}
                    aria-hidden={index !== currentSlide}
                >
                    <div className="hero-overlay">
                        <h1 className="hero-title">{slide.title}</h1>
                    </div>
                </div>
            ))}

            <button className="hero-nav-btn left" onClick={prevSlide} aria-label="Previous Slide">
                <ChevronLeftIcon />
            </button>
            <button className="hero-nav-btn right" onClick={nextSlide} aria-label="Next Slide">
                <ChevronRightIcon />
            </button>
        </section>
    );
};

export default Hero;