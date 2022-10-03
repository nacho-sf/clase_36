import React from "react";
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe("Home", () => {
    test("matches snapshot", () => {
        render(<Home />);
        expect(screen).toMatchSnapshot();
    });
});