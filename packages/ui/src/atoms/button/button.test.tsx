import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  it("should render button", () => {
    render(<Button>test</Button>);
    expect(screen.getByText(/test/)).toBeInTheDocument();
  });
});
