import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});
