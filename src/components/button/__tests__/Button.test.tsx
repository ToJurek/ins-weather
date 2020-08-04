import React from "react";
import Enzyme, {mount, shallow} from 'enzyme';
import Button from "../Button";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

Enzyme.configure({adapter: new Adapter()});

describe('button', function () {
    let wrapper: any
    let mockFunction: any
    beforeEach(() => {
        mockFunction = jest.fn()
        wrapper = mount(<Button name={'Button-name'} handleClick={mockFunction}/>)
    })
    test('should match to snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    test('should mock function be called', () => {
        wrapper.simulate('click');
        expect(mockFunction.mock.calls.length).toEqual(1)
    })

    test('should render button name correctly', () => {
        wrapper.update()
        expect(wrapper.find('button').text()).toBe('Button-name')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});
