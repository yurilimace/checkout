import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App test suite", () => {
  it("test config", () => {
    render(<App />);
    const text = screen.getByText("Vite + React");
    screen.debug();
    expect(text).toBeInTheDocument();
  });
});
