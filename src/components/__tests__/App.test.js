import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTest';
import App from "../../App";
import Main from "../Main";
import toJson from 'enzyme-to-json';

describe('rendering components', () => {
    //shallow only renders a single components. does NOT render its child components
    it('renders App without crashing', () => {
        shallow(<App />);
    });

    it('renders Main without crashing', () => {
        shallow(<Main />);
    });

    it('renders page header: Book Search Tool', () => {
        const wrapper = shallow(<Main />);
        const h2 = <h1>Book Search Tool</h1>;
        expect(wrapper.contains(h2)).toEqual(true);
    });

    it('renders search button', () => {
        const wrapper = shallow(<Main />);
        const button = <button type='submit'>Search</button>;
        expect(wrapper.contains(button)).toEqual(true);
    })
})

describe('snapshots', () => {
    it ('App snapshots', () => {
        const appTree = shallow(<App/>);
        expect(toJson(appTree)).toMatchSnapshot();
    })
    it ('Main snapshots', () => {
        const mainTree = shallow(<Main/>);
        expect(toJson(mainTree)).toMatchSnapshot();
    })
})



