import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback.js';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });

    it('Renders the add button initially', () => {
        const wrapper = shallow(<Feedback />);
        expect(wrapper.exists('h2')).toEqual(true);
    });
});
