import React from 'react';
import './DigitalClock.css';
import { useEffect, useState } from 'react';

const DigitalClock = ({ 
    width,
    height,
    style = {}
 }) => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    let curr_time = time.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})\s?(AM|PM)/, "$1");
    let curr_am_pm = time.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})\s?(AM|PM)/, "$3").toLowerCase();
    let time_zone = new Date().toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2]

    const font_size = (clockHeight) => {
        let size = parseInt(clockHeight.replace('rem', ''));
        return size / 2.5 + 'rem';
    }
    return (
        <div
            className="digital-clock-main"
            style={{
                width: width,
                height: height,
                ...style
            }}
        >
            <div 
                className="vstack"
            >
                <h6
                    className="digital-clock-timezone"
                    style={{
                        fontSize: (parseInt(height.replace('rem', '')) / 10 + 'rem')
                    }}
                >
                    {time_zone}
                </h6>
                <div className="hstack algn-end">
                    <h1
                        className="digital-clock-time"
                        style={{
                            fontSize: (parseInt(height.replace('rem', '')) / 3.5 + 'rem')
                        }}
                    >
                        {curr_time}
                    </h1>
                    <h6
                        className="digital-clock-am-pm"
                        style={{
                            fontSize: (parseInt(height.replace('rem', '')) / 13 + 'rem')
                        }}
                    >
                        {curr_am_pm}
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default DigitalClock;