import React from "react";
import Enzyme from 'enzyme';
import {mapWeather} from "../WeatherMapUtlils";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({adapter: new Adapter()});

const response = {
    "coord": {
        "lon": 17.03,
        "lat": 51.1
    },
    "weather": [
        {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 14.79,
        "feels_like": 12.37,
        "temp_min": 14.44,
        "temp_max": 15,
        "pressure": 1009,
        "humidity": 93
    },
    "visibility": 6000,
    "wind": {
        "speed": 5.1,
        "deg": 340
    },
    "rain": {
        "1h": 1.91
    },
    "clouds": {
        "all": 75
    },
    "dt": 1596528124,
    "sys": {
        "type": 1,
        "id": 1715,
        "country": "PL",
        "sunrise": 1596511325,
        "sunset": 1596566026
    },
    "timezone": 7200,
    "id": 3081368,
    "name": "Wrocław",
    "cod": 200
}

describe('mapWeather', function () {
    test('should return Weather object', () => {
        let output = mapWeather(response)
        expect(output.clouds).toBe('75%')
        expect(output.feelsLike).toBe('12°')
        expect(output.humidity).toBe("93%")
        expect(output.pressure).toBe("1009hPa")
        expect(output.time).toBe("04/08/20 10:08 AM")
        expect(output.description).toBe("Moderate rain")
    })
});
