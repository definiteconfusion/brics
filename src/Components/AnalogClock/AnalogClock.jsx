import React, { useEffect } from 'react';
import './AnalogClock.css';

const AnalogClock = ({ 
    width, 
    height, 
    color,
    style = {} 
}) => {
    useEffect(() => {
        const updateClock = () => {
            const curr_time = new Date();
            const seconds = curr_time.getSeconds();
            const minutes = curr_time.getMinutes();
            const hours = curr_time.getHours();

            const second_deg = (seconds * 6) + 90;  
            const minute_deg = (minutes * 6 + (seconds / 10)) + 90;
            const hour_deg = ((hours % 12) * 30 + (minutes / 2)) + 90;

            const second_hand = document.querySelector('.second-hand');
            const minute_hand = document.querySelector('.minute-hand');
            const hour_hand = document.querySelector('.hour-hand');

            if (second_hand && minute_hand && hour_hand) {
                // Update the hands rotation
                second_hand.style.transform = `rotate(${second_deg}deg)`;
                minute_hand.style.transform = `rotate(${minute_deg}deg)`;
                hour_hand.style.transform = `rotate(${hour_deg}deg)`;
            }
        };

        // Update the clock every second
        const intervalId = setInterval(updateClock, 1000);

        // Set the initial time immediately without waiting for the interval
        updateClock();

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const parseSize = (size) => {
        if (typeof size === 'string' && size.endsWith('rem')) {
            const numericValue = parseFloat(size);
            return `${numericValue - 2}rem`;
        }
        return size;
    };

    return (
        <div className="clock-wrapper">
            <div
                className="analog-clock-main"
                style={{
                    width: parseSize(width),
                    height: parseSize(height),
                    ...style
                }}
            >
                <div 
                    className="clock-face"
                    style={{
                        backgroundColor: color
                    }}
                >
                    <div className="hand hour-hand"></div>
                    <div className="hand minute-hand"></div>
                    <div className="hand second-hand"></div>
                    <div className="center-circle"></div>
                </div>
            </div>
        </div>
    );
};

export default AnalogClock;
