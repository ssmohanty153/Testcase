import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Parent from "../src/Parent";
import "@testing-library/jest-dom";

describe("tgis is parent test case", () => {
  test("renders parent component with initial data", () => {
    render(<Parent />);
    const dataElement = screen.getByText("ssss"); //getByRole("button")==>role can be heading button,textbox
    expect(dataElement).toBeInTheDocument();
  });

  test(" Should updates data when child component changes", () => {
    render(<Parent />);
    const inputElement = screen.getByPlaceholderText("name");

    fireEvent.change(inputElement, { target: { value: "subhransu" } });

    const updatedDataElement = screen.getByText("subhransu");
    expect(updatedDataElement).toBeInTheDocument();
  });

  test("all the input", () => {
    render(<Parent />);

    const inputBoxes = screen.getByRole("heading");
    expect(inputBoxes).toBeInTheDocument();
  });

  test("should render button", () => {
    render(<Parent />);

    const inputBoxes = screen.getByRole("button", { name: "login" });
    expect(inputBoxes).toBeInTheDocument();
  });
});

//note it and test are same things;

/**
 * 
 * 
 *this is basicall when you are using LInk in compoent and store BrowserRouter and Provider.
 test("all the input", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
           <Parent />
         </Provider>
        </BrowserRouter>
       );

    const inputBoxes = screen.getByRole("heading");
    expect(inputBoxes).toBeInTheDocument();
  });

 */
