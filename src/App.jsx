import DigitalClock from './Components/DigitalClock/DigitalClock';
import AnalogClock from './Components/AnalogClock/AnalogClock';
import Weather from './Components/Weather/Weather';
import './App.css';
function App() {
    let styling = {
        width: '10rem',
        height: '10rem',
    }
    return (
        <div>
            <Weather
                height={styling.height}
                width={styling.width}
                location="schoharie"
                metric="humidity"
                metric_label="%"
            />
            <div style={{height:"1rem"}}></div>
            {/* <AnalogClock
                height={styling.height}
                width={styling.width}
                color="#F91D1D"
            /> */}
            <div style={{height:"1rem"}}></div>
            <DigitalClock
                height={styling.height}
                width={styling.width}
            />
        </div>
    )
}

export default App;