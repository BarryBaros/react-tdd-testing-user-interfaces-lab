import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm Tim Barasa`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm tim barasa/i,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of Tim Barasa with alt text identifying the content of the image", () => {
    render(<App />);
    const image = screen.getByAltText(/image of \[baros\]/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "Tim.jpg");
  });

  test("displays a second-level heading with the text `About Me`", () => {
    render(<App />);
    const aboutMeHeading = screen.getByRole("heading", { level: 2, name: /about me/i });
    expect(aboutMeHeading).toBeInTheDocument();
  });

  test("displays a paragraph for your biography", () => {
    render(<App />);
    const bioParagraph = screen.getByText(/this is my biography/i);
    expect(bioParagraph).toBeInTheDocument();
  });

  test("displays a link to your GitHub page", () => {
    render(<App />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/your-username");
  });
  
  test("displays a link to your LinkedIn page", () => {
    render(<App />);
    const linkedInLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute("href", "https://linkedin.com/in/your-username");
  });

  