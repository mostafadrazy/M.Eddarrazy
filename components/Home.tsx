
import React, { useEffect } from 'react';
import Hero from './Hero';
import Marquee from './Marquee';
import Work from './Work';
import Services from './Services';
import Testimonials from './Testimonials';
import About from './About';

interface HomeProps {
    startAnimation: boolean;
    onModalStateChange?: (isOpen: boolean) => void;
}

const Home: React.FC<HomeProps> = ({ startAnimation, onModalStateChange }) => {
    useEffect(() => {
        document.title = "MUSTAPHA EDDARRAZY | DIGITAL CREATOR";
    }, []);

    return (
        <>
            <Hero startAnimation={startAnimation} />
            <Marquee />
            <Work onModalStateChange={onModalStateChange} />
            <Services />
            <Testimonials />
            <About />
        </>
    );
};

export default Home;
