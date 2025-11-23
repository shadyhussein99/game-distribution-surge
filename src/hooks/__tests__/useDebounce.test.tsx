import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react";
import { useDebounce } from "../useDebounce";

function TestComponent({ value, delay }: { value: string; delay?: number }) {
  const debounced = useDebounce(value, delay);
  return React.createElement("div", { "data-testid": "debounced" }, debounced);
}

describe("useDebounce", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("returns empty string initially and updates after the provided delay", () => {
    render(React.createElement(TestComponent, { value: "hello", delay: 500 }));

    // initial value should be the hook's default empty string
    expect(screen.getByTestId("debounced").textContent).toBe("");

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(screen.getByTestId("debounced").textContent).toBe("hello");
  });

  it("updates to the latest value if value changes before delay elapses", () => {
    const { rerender } = render(
      React.createElement(TestComponent, { value: "a", delay: 300 })
    );

    expect(screen.getByTestId("debounced").textContent).toBe("");

    act(() => {
      jest.advanceTimersByTime(100);
    });

    rerender(React.createElement(TestComponent, { value: "b", delay: 300 }));

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(screen.getByTestId("debounced").textContent).toBe("b");
  });

  it("uses the default delay of 600ms when none is provided", () => {
    render(React.createElement(TestComponent, { value: "default" }));

    expect(screen.getByTestId("debounced").textContent).toBe("");

    act(() => {
      jest.advanceTimersByTime(600);
    });

    expect(screen.getByTestId("debounced").textContent).toBe("default");
  });
});
