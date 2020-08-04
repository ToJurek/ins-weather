import React from "react";
import Enzyme, {mount} from 'enzyme';
import WeatherView from "../WeatherView";
import Button from "../../button/Button";
import Header from "../../cardHeader/Header";
import Body from "../../cardBody/Body";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import IWeather from "../../interfaces/IWeather";

Enzyme.configure({adapter: new Adapter()});

describe('WeatherView', function () {
    let wrapper: any
    let mockFunction: any
    const weather: IWeather = {
        icon: '04d',
        description: 'desc',
        temp: '13',
        feelsLike: '12',
        tempMin: '11',
        tempMax: '15',
        pressure: '1000 hPa',
        humidity: '12%',
        clouds: '10%',
        time: '12/02/1992 12:11'
    }
    beforeEach(() => {
        mockFunction = jest.fn()
        wrapper = mount(<WeatherView weather={weather} refetchData={mockFunction}/>)
    })

    test('should match to snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    test('should call children', () => {
        expect(wrapper.find(Header).exists()).toBeTruthy()
        expect(wrapper.find(Body).exists()).toBeTruthy()
        expect(wrapper.find(Button).exists()).toBeTruthy()
    })

    test('should render button name correctly', () => {
        expect(wrapper.find('button').text()).toBe('Update')
    })

    test('should mock function be called', () => {
        wrapper.find(Button).simulate('click');
        expect(mockFunction.mock.calls.length).toEqual(1)
    })
});
