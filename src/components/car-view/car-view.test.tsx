import { render, screen, fireEvent } from "@testing-library/react";
import { Carview } from "./car-view";
import { Car } from "../../models/car";

describe("Carview", () => {
  const mockCar: Car = {
    id: 1,
    name: "Test Car",
    clickCount: 0,
    imgSrc: "test-car.jpg",
  };

  const mockOnClickCount = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders car details when car is selected", () => {
    render(<Carview selectedCar={mockCar} onClickCount={mockOnClickCount} />);

    expect(screen.getByText("Test Car")).toBeInTheDocument();
    expect(screen.getByAltText("Test Car")).toBeInTheDocument();
    expect(screen.getByText("Click count: 0")).toBeInTheDocument();
  });

  it("calls onClickCount when click button is pressed", () => {
    render(<Carview selectedCar={mockCar} onClickCount={mockOnClickCount} />);

    fireEvent.click(screen.getByText("Click"));
    expect(mockOnClickCount).toHaveBeenCalled();
  });

  it("renders nothing when no car is selected", () => {
    render(<Carview selectedCar={null} onClickCount={mockOnClickCount} />);

    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });
});
