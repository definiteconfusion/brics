import DigitalClock from './Components/DigitalClock/DigitalClock';
import AnalogClock from './Components/AnalogClock/AnalogClock';
import Weather from './Components/Weather/Weather';
import './App.css';
function App() {
    let styling = {
        width: '20rem',
        height: '10rem',
    }
    return (
        <div>
            {/* <Weather
                height={styling.height}
                width={styling.width}
                location="schoharie"
                metric="temp_f"
                metric_label="f"
            /> */}
            <AnalogClock
                height={styling.height}
                width={styling.width}
                color="#F91D1D"
            />
        </div>
    )
}

export default App;