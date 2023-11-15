import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Children from "../src/Children";
import '@testing-library/jest-dom'

test("renders child component with input field", () => {
  const handleChange = jest.fn();
  render(<Children handleChange={handleChange} data="test" />);
  const inputElement = screen.getByPlaceholderText("name");
  expect(inputElement).toBeInTheDocument();
});

test("triggers handleChange when input value changes", () => {
  const handleChange = jest.fn();  
  render(<Children handleChange={handleChange} data="test" />);
  const inputElement = screen.getByPlaceholderText("name");

  fireEvent.change(inputElement, { target: { value: "subhransu" } });

  expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
});
