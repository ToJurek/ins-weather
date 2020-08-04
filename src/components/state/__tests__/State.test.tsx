import React from "react";
import Enzyme, {mount} from 'enzyme';
import State from "../State";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";


Enzyme.configure({adapter: new Adapter()});

describe('state', function () {
    test('should match to snapshot', () => {
        let wrapper = mount(<State error={''} isLoaded={false}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    test('should render loader', () => {
        let wrapper = mount(<State error={''} isLoaded={false}/>)
        expect(wrapper.find('.spinner').exists()).toBeTruthy()
    })

    test('should render error message', () => {
        let wrapper = mount(<State error={'Some error'} isLoaded={true}/>)
        expect(wrapper.find('.error-img').exists()).toBeTruthy()
        expect(wrapper.find('.error-message').text()).toBe('Some error')
    })

    test('should render nothings', () => {
        let wrapper = mount(<State error={''} isLoaded={true}/>)
        expect(wrapper.find('.spinner').exists()).toBeFalsy()
        expect(wrapper.find('.error-img').exists()).toBeFalsy()
    })

    test('should render loader', () => {
        let wrapper = mount(<State error={'Some error'} isLoaded={false}/>)
        expect(wrapper.find('.error-img').exists()).toBeTruthy()
        expect(wrapper.find('.error-message').text()).toBe('Some error')
    })
});
