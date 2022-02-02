import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import Landing from '../pages/Landing'

const navigate = () => {
    return (
        <div>

            <Router>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/signIn' element={<SignIn />} />
                </Routes>
            </Router>

        </div>
    );
};

export default navigate;
