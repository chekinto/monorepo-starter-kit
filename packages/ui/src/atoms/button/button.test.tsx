// import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  it("should render", () => {
    render(<Button>test</Button>);

    screen.debug();
    expect(screen.getByText(/test/)).toBeInTheDocument();
  });
});
