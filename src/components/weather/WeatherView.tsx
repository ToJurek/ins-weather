import React from 'react';
import './Weather.css';
import IWeather from "../interfaces/IWeather";
import Header from "../cardHeader/Header";
import Body from "../cardBody/Body";
import Button from "../button/Button";

interface Props {
    weather: IWeather,
    refetchData: any
}

function WeatherView(props: Props) {
    let weather: IWeather = props.weather;
    return (
        <div className={'content'}>
            <div className={"dashboard"}>
                <Header city={"Wrocław"}/>
                <Body weather={weather}/>
            </div>
            <Button handleClick={props.refetchData} name={"Update"}/>
        </div>
    )

}

export default WeatherView;
