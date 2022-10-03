import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Button from "./Button";

describe("Button", () => {

  let count
  const incrementCount = increment => {
    count += increment
}

  test("matches snapshot", () => {
    render(<Button />);
    expect(screen).toMatchSnapshot();
  });

  test('+1 Button works', () => {
    count = 0
    const { container } = render(
      <Button increment={1} onClickFunction={incrementCount} />
    )
    const button = container.firstChild
    expect(button.textContent).toBe('+1')
    expect(count).toBe(0)
    fireEvent.click(button)
    expect(count).toBe(1)
  })

  test('+100 Button works', () => {
    count = 0
    const { container } = render(
      <Button increment={100} onClickFunction={incrementCount} />
    )
    const button = container.firstChild
    expect(button.textContent).toBe('+100')
    expect(count).toBe(0)
    fireEvent.click(button)
    expect(count).toBe(100)
  })

});
