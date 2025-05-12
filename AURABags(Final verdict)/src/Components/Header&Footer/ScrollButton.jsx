import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        const handleResize = () => {
            handleScroll();
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        isVisible && (
            <button id="scrollToTopBtn" className="flex justify-center items-center" onClick={scrollToTop}>
                <FaArrowUp />
            </button>
        )
    );
};

export default ScrollButton;
