import React, { useEffect } from 'react';
import Hero from './Hero';
import Marquee from './Marquee';
import Work from './Work';
import Services from './Services';
import AIEngineering from './AIEngineering';
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
        <div className="relative min-h-screen bg-transparent">
            <Hero startAnimation={startAnimation} />
            <Marquee />
            <Work onModalStateChange={onModalStateChange} />
            <Services />
            <AIEngineering />
            <Testimonials />
            <About />
        </div>
    );
};

export default Home;
