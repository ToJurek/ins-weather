import React from "react";
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Weather from "../WeatherComponent";
import WeatherView from "../WeatherView";
import IWeather from "../../interfaces/IWeather";
Enzyme.configure({adapter: new Adapter()});

describe('WeatherComponent', function () {
    test('should match to snapshot', () => {
        let wrapper = mount(<Weather/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    test('should render child', () => {
        let wrapper = shallow(<Weather/>)
        expect(wrapper.find(WeatherView)).toBeTruthy()
    })
});
