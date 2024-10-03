import './Weather.css';
import { useEffect, useState } from 'react';

const Weather = ({
     width, 
     height,
     location = 'San Francisco', 
     metric = 'temp_f', 
     metric_label = 'f',
     style={}
    }) => {
        const [weatherData, setWeatherData] = useState(null);

        useEffect(() => {
            const fetchWeatherData = async () => {
                try {
                    const response = await fetch(`https://vercel.jakerase.dev/weather/${location}`);
                    const data = await response.json();
                    setWeatherData(data);
                } catch (error) {
                    console.error('Error fetching weather data:', error);
                }
            };

            fetchWeatherData();
        }, [location]);
        let location_name = weatherData && weatherData.location ? weatherData.location.name : 'Unknown';
        let current_weather = weatherData && weatherData.current ? weatherData.current : {};
    return (
        <div 
            className="weather-main"
            style={{
                width: width,
                height: height,
                ...style
            }}
        >
            <div className="vstack">
                <h6 
                    className="weather-data-label"
                    style={{
                        fontSize: (parseInt(height.replace('rem', '')) / 10 + 'rem')
                    }}
                >
                    {location_name ? location_name : 'Nowhere'}
                </h6>
                <div className="hstack algn-end">
                    <h1 
                        className="weather-data"
                        style={{
                            fontSize: (parseInt(height.replace('rem', '')) / 2 + 'rem'),
                            lineHeight: (parseInt(height.replace('rem', '')) / 2.85 + 'rem')
                        }}
                    >
                        {Math.round(current_weather ? current_weather[metric] : '0°')}°
                    </h1>
                    <h6 
                        className="weather-data-metric"
                        style={{
                            fontSize: (parseInt(height.replace('rem', '')) / 7 + 'rem')
                        }}
                    >
                        {metric_label}
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default Weather;