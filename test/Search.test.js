import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductList from "../src/ProductList";
import MOCK_DATA from "./mockdata.json";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import "isomorphic-fetch";

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

test("search all component", async () => {
  await act(async () => render(<ProductList />));

  const totalCards = screen.getAllByTestId("product-div");
  expect(totalCards.length).toBe(20);

  const searchInput = screen.getByPlaceholderText("Search by title");
  const searchButton = screen.getByRole("button", { name: "Search" });

  fireEvent.change(searchInput, { target: { value: "ba" } });
  fireEvent.click(searchButton);

  // Ensure that the filtered result contains only items with "ba" in the title
  const filteredCards = screen.getAllByTestId("product-div");
  expect(filteredCards.length).toBeGreaterThan(0);

  // Example: Check that each filtered card contains "ba" in its title
  filteredCards.forEach((card) => {
    const title = card.querySelector("h3").textContent;
    expect(title.toLowerCase()).toContain("ba");
  });
});
