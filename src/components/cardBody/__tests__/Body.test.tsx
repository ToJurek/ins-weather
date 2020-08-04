import React from "react";
import Enzyme, {mount, shallow} from 'enzyme';

import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Body from "../Body";
import IWeather from "../../interfaces/IWeather";
import Button from "../../button/Button";

Enzyme.configure({adapter: new Adapter()});

describe('body', function () {
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
    test('should match to snapshot', () => {
        let wrapper = mount(<Body weather={weather}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    test('should render correctly', () => {
        let wrapper = mount(<Body weather={weather}/>)
        expect(wrapper.find('.last-update').text()).toBe('Last update: 12/02/1992 12:11')
        expect(wrapper.find('.temp').text()).toBe('13')
    })
});
