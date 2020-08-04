import React from "react";
import Enzyme, {mount} from 'enzyme';
import Header from "../Header";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";


Enzyme.configure({adapter: new Adapter()});

describe('header', function () {
    let wrapper: any
    beforeEach(() => {
        wrapper = mount(<Header city={'city-name'}/>)
    })
    test('should match to snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    test('should render city name correctly', () => {
        expect(wrapper.find('.city').text()).toBe('city-name')
    })

});
