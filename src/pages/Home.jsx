import React from 'react';
import Navbar from '../components/Navbar';
import Hero from './sections/Hero';
import Hero1 from './sections/Hero1';
import Footer from '../components/Footer';
import CountDate from './sections/CountDate';
import Pricing from './sections/Pricing';
import PaymentMethod from './sections/PaymentMethod';
const Home = () => {
    return (
        <>
            <Navbar/>
            <Hero1/>
            <Hero/>
            <CountDate/>
            <Pricing/>
            <PaymentMethod/>
            <Footer/>

            
        </>
    );
};

export default Home;