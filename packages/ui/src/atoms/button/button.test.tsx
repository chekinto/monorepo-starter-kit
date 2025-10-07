import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  it("should render", () => {
    render(
      <Button size="sm" variant="primary">
        test
      </Button>
    );
    expect(screen.getByText(/test/)).toBeInTheDocument();
  });
});
