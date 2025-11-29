import React from 'react';
import Hero from '../components/Hero';
import WorkSection from '../components/WorkSection';
import Services from '../components/Services';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
    return (
        <div className="space-y-4">
            <Hero />
            <AboutSection />
            <WorkSection />
            <Services />
            <Process />
            <Testimonials />
            <ContactSection />
        </div>
    );
};

export default Home;
