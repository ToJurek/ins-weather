import React from 'react';
import './App.css';
import {Afternoon, Morning, Night} from '../../images/background/export';
import Weather from "../weather/WeatherComponent";


function getBackground(): string {
    let hour: number = new Date().getHours();
    if (hour >= 6 && hour < 11)
        return Morning;
    if (hour >= 11 && hour < 19)
        return Afternoon;
    return Night
}

function App() {
    let style = {backgroundImage: `url(${getBackground()})`};
    return (
        <div className="App" style={style}>
            <Weather/>
        </div>
    );
}

export default App;
