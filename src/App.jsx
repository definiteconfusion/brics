import DigitalClock from './Components/DigitalClock/DigitalClock';
import AnalogClock from './Components/AnalogClock/AnalogClock';
import Weather from './Components/Weather/Weather';
import './App.css';
function App() {
    let styling = {
        width: '8rem',
        height: '8rem',
    }
    return (
        <div>
            <Weather
                height={styling.height}
                width={styling.width}
                location="schoharie"
                metric="temp_f"
                metric_label="f"
            />
        </div>
    )
}

export default App;