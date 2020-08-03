import React from 'react';
import './Body.css';
import IWeather from "../interfaces/IWeather";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown, faCloudSun, faTint} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface Parameter {
    icon: IconProp,
    value: string
}

interface Props {
    weather: IWeather
}

function Body(props: Props) {
    let weather = props.weather;
    let parameters: Parameter[] = [{icon: faCloudSun, value: weather.clouds}, {
        icon: faTint,
        value: weather.humidity
    }, {icon: faAngleDoubleDown, value: weather.pressure}];
    return (
        <>
            <div className={'last-update'}>Last update: {weather.time}</div>
            <div className={'row'}>
                <div className={'column'}><img
                    src={'http://openweathermap.org/img/wn/' + weather.icon + '@2x.png'}/></div>
                <div className={'column'}><span className={'temp'}>{weather.temp}</span></div>
            </div>
            <div>{weather.tempMax + '/' + weather.tempMin + ' RealFeel ' + weather.feelsLike}</div>
            <div>{weather.description}</div>
            {renderParameters(parameters)}
        </>
    )

}

function renderParameters(parameters: Parameter[]): React.ReactNode | null {
    return parameters.map(parameter => {
        return (<div>
            <FontAwesomeIcon icon={parameter.icon} className={'parameter-icon'}/>
            <span>{parameter.value}</span>
        </div>)
    })
}

export default Body;
