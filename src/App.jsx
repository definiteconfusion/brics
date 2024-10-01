import DigitalClock from './Components/DigitalClock/DigitalClock';
import AnalogClock from './Components/AnalogClock/AnalogClock';
import './App.css';
function App() {
    let styling = {
        width: '20rem',
        height: '8rem',
    }
    return (
        <div>
            {/* <AnalogClock
                height={styling.height}
                width={styling.width}
                color="#F91D1D"
            /> */}
            {/* Too lazy for margin :P */}
            <div style={{height: '1rem'}}></div>
            <DigitalClock
                height={styling.height}
                width={styling.width}
            />
        </div>
    )
}

export default App;