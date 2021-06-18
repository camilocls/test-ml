import { render } from '@testing-library/react';
import Home from '.';
import { WELCOME_MESSAGE } from "./constants";

test('Renders Home', () => {
  const { getByText } = render(<Home />)
  
  expect(getByText(WELCOME_MESSAGE)).toBeInTheDocument()
});
