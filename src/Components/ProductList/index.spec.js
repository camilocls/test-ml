import { render, screen } from "@testing-library/react";
import ProductList from ".";
import { BrowserRouter } from "react-router-dom";

const MOCK_ITEMS = [
  { id: "ID1", title: "Item 1", price: { currency: "ARS", amount: 123 } },
  { id: "ID2", title: "Item 2", price: { currency: "COP", amount: 234 } },
  { id: "ID3", title: "Item 3", price: { currency: "COP", amount: 234 } },
];

test("Renders Home", async () => {
  const { getByText } = render(
    <BrowserRouter>
      <ProductList items={MOCK_ITEMS} />
    </BrowserRouter>
  );

  expect(getByText(MOCK_ITEMS[1].title)).toBeInTheDocument();

  const items = await screen.findAllByText(/Item [0-9]/)
  expect(items).toHaveLength(3)
});
