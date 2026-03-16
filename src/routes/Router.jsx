import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import Hero from '../pages/sections/Hero';
import Home from '../pages/Home';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
            </Routes>
            
        </BrowserRouter>
    );
};

export default Router;