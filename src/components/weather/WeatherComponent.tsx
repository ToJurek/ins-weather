import React, {useEffect, useState} from 'react';
import './Weather.css';

import axios from "axios";
import State from "../state/State";
import WeatherView from "./WeatherView";
import {mapWeather} from "../../utlils/mapUtils/WeatherMapUtlils";

function Weather() {
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [weather, setWeather] = useState();

    function fetchData(): void {
        setIsLoaded(false);
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=wroclaw&appid=' + process.env.REACT_APP_WEATHER_API_KEY + '&units=metric')
            .then(response => {
                setWeather(mapWeather(response.data));
                setIsLoaded(true)
            })
            .catch(error => {
                setError("Bląd podczas wczytywania pliku");
                setIsLoaded(true)
            });
    }

    useEffect(() => {
        if (!weather) {
            fetchData();
        }
        const interval = setInterval(() => {
            fetchData();
        }, 300000);
        return () => clearInterval(interval);
    }, [weather]);


    return (
        <div className={'shadow-background'}>
            <div className={'card'}>
                {isLoaded ? <WeatherView weather={weather} refetchData={() => fetchData()}/> :
                    <State error={error} isLoaded={isLoaded}/>
                }</div>
        </div>)

}

export default Weather;
