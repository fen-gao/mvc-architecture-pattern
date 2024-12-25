import { renderHook, act } from "@testing-library/react";
import type { RenderHookResult } from "@testing-library/react";
import { useCarModel } from "./useCarModel";
import {
  getCars,
  getCarById,
  updateClickCountByCarId,
} from "../services/carService";
import type { UseCarModelProps } from "../models/car";

jest.mock("../services/carService");

describe("useCarModel", () => {
  const mockCars = [
    { id: 1, name: "Car 1", clickCount: 0, imgSrc: "car1.jpg" },
    { id: 2, name: "Car 2", clickCount: 0, imgSrc: "car2.jpg" },
  ];

  const mockCar = { id: 1, name: "Car 1", clickCount: 0, imgSrc: "car1.jpg" };

  beforeEach(() => {
    jest.clearAllMocks();
    (getCars as jest.Mock).mockResolvedValue(mockCars);
    (getCarById as jest.Mock).mockResolvedValue(mockCar);
    (updateClickCountByCarId as jest.Mock).mockResolvedValue(undefined);
  });

  it("should fetch cars on mount", async () => {
    const { result } = renderHook(() => useCarModel());

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(getCars).toHaveBeenCalled();
    expect(result.current.cars).toEqual(mockCars);
  });

  it("should handle errors when fetching cars", async () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    (getCars as jest.Mock).mockRejectedValueOnce(
      new Error("Failed to fetch cars")
    );

    let hook!: RenderHookResult<UseCarModelProps, unknown>;

    await act(async () => {
      const rendered = renderHook(() => useCarModel());
      hook = rendered;

      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(hook.result.current.cars).toEqual([]);
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error fetching cars:",
      expect.any(Error)
    );

    consoleErrorSpy.mockRestore();
  });

  it("should handle errors when fetching car details", async () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    (getCarById as jest.Mock).mockRejectedValueOnce(
      new Error("Failed to fetch car")
    );

    let hook!: RenderHookResult<UseCarModelProps, unknown>;

    await act(async () => {
      const rendered = renderHook(() => useCarModel());
      hook = rendered;

      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    await act(async () => {
      await hook.result.current.handleCarClick(1);
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(hook.result.current.selectedCar).toBeNull();
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error fetching car:",
      expect.any(Error)
    );

    consoleErrorSpy.mockRestore();
  });
});
