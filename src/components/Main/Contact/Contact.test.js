import React from "react";
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe("Contact", () => {
    test("matches snapshot", () => {
        render(<Contact />);
        expect(screen).toMatchSnapshot();
    });
});