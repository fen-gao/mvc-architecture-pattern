import { render, screen, fireEvent } from "@testing-library/react";
import { CarList } from "./car-list";
import { Car } from "../../models/car";

describe("CarList", () => {
  const mockCars: Car[] = [
    { id: 1, name: "Car 1", clickCount: 0, imgSrc: "car1.jpg" },
    { id: 2, name: "Car 2", clickCount: 1, imgSrc: "car2.jpg" },
  ];

  const mockHandleCarClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders list of cars", () => {
    render(<CarList data={mockCars} onCarClick={mockHandleCarClick} />);

    expect(screen.getByText("Car 1")).toBeInTheDocument();
    expect(screen.getByText("Car 2")).toBeInTheDocument();
  });

  it("calls onCarClick when a car is clicked", () => {
    render(<CarList data={mockCars} onCarClick={mockHandleCarClick} />);

    fireEvent.click(screen.getByText("Car 1"));
    expect(mockHandleCarClick).toHaveBeenCalledWith(1);
  });

  it("displays click counts correctly", () => {
    render(<CarList data={mockCars} onCarClick={mockHandleCarClick} />);

    const cars = screen.getAllByRole("listitem");
    expect(cars[0]).toHaveTextContent("Car 1");
    expect(cars[1]).toHaveTextContent("Car 2");
  });

  it("renders empty list when no cars provided", () => {
    render(<CarList data={[]} onCarClick={mockHandleCarClick} />);

    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });
});
