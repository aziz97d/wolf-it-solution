import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <header>
            <Navbar></Navbar>
            <div className='main-header'>
                <div class="overlay"></div>
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-308-large.mp4" type="video/mp4" />
                </video>
                <div class="container h-100">
                    <div class="d-flex h-100 text-center align-items-center">
                        <div class="w-100 text-white">
                            <h1 class="display-3">10 Years of Experience</h1>
                            <p class="lead mb-0">We Working Hard to Build Our Reputation of Customer</p>
                            <p class="lead mb-0">Satisfaction through technical excellence and friendly staff</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;