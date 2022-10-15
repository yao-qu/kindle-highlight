import React from 'react'
import Home from "./Home";
import Testing from '../components/Testing';
import Searched from './Searched';

import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from 'framer-motion';

function Pages() {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>

            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/searched/:search" element={<Searched />} />
            </Routes>
        </AnimatePresence>

    )
}

export default Pages