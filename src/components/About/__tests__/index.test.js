import React from 'react';
// render will render the component, cleanup with remove components to prevent memory leaking 
import { render, cleanup } from '@testing-library/react';
// custom matchers that are  used to test DOM elements 
import '@testing-library/jest-dom/extend-expect';
// importing the About component 
import About from '..';

// after each test clean up the memory to ensure accurate results - calling the cleanup function
afterEach(cleanup);

// declare the component were testing
describe('About component', () => {
    // test 1
    it('renders', () => {
        render(<About />);
    });

    // test 2
    it('matches snapshot DOM node structure', () => {
        // render about
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})