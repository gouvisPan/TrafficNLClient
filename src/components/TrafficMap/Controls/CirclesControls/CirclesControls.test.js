import { render, screen } from "@testing-library/react";
import CirclesControls from "./CirclesControls";

test("renders learn react link", () => {
  render(<CirclesControls />);

  const linkElement = screen.queryByText(/visibility/i);
  expect(linkElement).toBeInTheDocument();
});
