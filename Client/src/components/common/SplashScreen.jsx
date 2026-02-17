import React, { useEffect, useState } from 'react';
import './SplashScreen.css';
import { FaHandHoldingDollar } from 'react-icons/fa6';

const SplashScreen = ({ onComplete }) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Start exit animation after 2.8 seconds (just before the 3s mark)
        const exitTimer = setTimeout(() => {
            setIsExiting(true);
        }, 2800);

        // Completely unmount after 3.5 seconds (allowing for transition)
        const completionTimer = setTimeout(() => {
            if (onComplete) onComplete();
        }, 3500);

        return () => {
            clearTimeout(exitTimer);
            clearTimeout(completionTimer);
        };
    }, [onComplete]);

    return (
        <div className={`splash-container ${isExiting ? 'fade-out' : ''}`}>
            <div className="splash-bg"></div>
            <div className="splash-content">
                <div className="logo-reveal">
                    <div className="splash-logo-container">
                        <FaHandHoldingDollar className="splash-logo" />
                    </div>
                    <h1 className="welcome-title">
                        Finance <span>Tracker</span>
                    </h1>
                    <p className="welcome-subtitle">Smart Wealth Management</p>
                </div>
                <div className="loader-track">
                    <div className="loader-bar"></div>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
