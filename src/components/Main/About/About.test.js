import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import About from './About';

describe("About", () => {
    test("matches snapshot", () => {
        render(<About />);
        expect(screen).toMatchSnapshot();
    });

    test('My counter works', () => {
        const { container } = render(<About />)
        console.log(container)
        const buttons = container.querySelectorAll('button')
      
        expect(buttons[0].textContent).toBe('+1')
        expect(buttons[1].textContent).toBe('+10')
        expect(buttons[2].textContent).toBe('+100')
        expect(buttons[3].textContent).toBe('+1000')
      
        const result = container.querySelector('span')
        expect(result.textContent).toBe('0')
        fireEvent.click(buttons[0])
        expect(result.textContent).toBe('1')
        fireEvent.click(buttons[1])
        expect(result.textContent).toBe('11')
        fireEvent.click(buttons[2])
        expect(result.textContent).toBe('111')
        fireEvent.click(buttons[3])
        expect(result.textContent).toBe('1111')
        fireEvent.click(buttons[2])
        expect(result.textContent).toBe('1211')
        fireEvent.click(buttons[1])
        expect(result.textContent).toBe('1221')
        fireEvent.click(buttons[0])
        expect(result.textContent).toBe('1222')
      })

});