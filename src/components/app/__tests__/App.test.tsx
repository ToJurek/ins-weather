import React from "react";
import Enzyme, {mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import App from "../App";
Enzyme.configure({adapter: new Adapter()});

describe('App', function () {
    test('should match to snapshot', () => {
        let wrapper = mount(<App/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});
