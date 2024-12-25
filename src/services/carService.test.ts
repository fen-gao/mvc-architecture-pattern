import { getCars, getCarById, updateClickCountByCarId } from "./carService";

global.fetch = jest.fn();

const API_URL = "http://localhost:3001";

describe("CarService", () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it("should fetch all cars", async () => {
    const mockCars = [
      { id: 1, name: "Car 1", clickCount: 0 },
      { id: 2, name: "Car 2", clickCount: 0 },
    ];

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => mockCars,
    });

    const result = await getCars();

    expect(global.fetch).toHaveBeenCalledWith(`${API_URL}/cars`);
    expect(result).toEqual(mockCars);
  });

  it("should fetch car by id", async () => {
    const mockCar = { id: 1, name: "Car 1", clickCount: 0 };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => mockCar,
    });

    const result = await getCarById(1);

    expect(global.fetch).toHaveBeenCalledWith(`${API_URL}/cars/1`);
    expect(result).toEqual(mockCar);
  });

  it("should update click count for a car", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({});

    await updateClickCountByCarId(1, 5);

    expect(global.fetch).toHaveBeenCalledWith(`${API_URL}/cars/1`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ clickCount: 5 }),
    });
  });

  it("should handle errors when fetching cars", async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error("Network error")
    );

    await expect(getCars()).rejects.toThrow("Network error");
  });

  it("should handle errors when fetching car by id", async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error("Network error")
    );

    await expect(getCarById(1)).rejects.toThrow("Network error");
  });

  it("should handle errors when updating click count", async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error("Network error")
    );

    await expect(updateClickCountByCarId(1, 5)).rejects.toThrow(
      "Network error"
    );
  });
});
