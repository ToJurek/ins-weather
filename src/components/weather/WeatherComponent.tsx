import React, {useEffect, useState} from 'react';
import './Weather.css';
import moment from "moment";
import IWeather from "../interfaces/IWeather";
import axios from "axios";
import State from "../state/State";
import WeatherView from "./WeatherView";

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
    }, []);


    return (
        <div className={'shadow-background'}>
            <div className={'card'}>
                {isLoaded ? <WeatherView weather={weather} refetchData={() => fetchData()}/> :
                    <State error={error} isLoaded={isLoaded}/>
                }</div>
        </div>)

}

function capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function getFormattedDatetime(datetime: number): string {
    return moment.unix(datetime).format("DD/MM/YY hh:MM A");
}

function asTemperature(value: number): string {
    return Math.round(value) + "°";
}

function ashPa(value: number): string {
    return value + "hPa"
}

function asPercent(value: number): string {
    return value + "%"
}

function mapWeather(response: any): IWeather {
    return {
        icon: response.weather[0].icon,
        description: capitalizeFirstLetter(response.weather[0].description),
        temp: asTemperature(response.main.temp),
        feelsLike: asTemperature(response.main.feels_like),
        tempMin: asTemperature(response.main.temp_min),
        tempMax: asTemperature(response.main.temp_max),
        pressure: ashPa(response.main.pressure),
        humidity: asPercent(response.main.humidity),
        clouds: asPercent(response.clouds.all),
        time: getFormattedDatetime(response.dt)
    }
}

export default Weather;
