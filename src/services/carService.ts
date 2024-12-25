import { Car } from "../models/car";

const URL = "http://localhost:3001";

export const getCars = async (): Promise<Car[]> => {
  const response = await fetch(`${URL}/cars`);
  const cars = await response.json();
  return cars;
};

export const getCarById = async (id: number): Promise<Car> => {
  const response = await fetch(`${URL}/cars/${id}`);
  const car = await response.json();
  return car;
};

export const updateClickCountByCarId = async (
  id: number,
  clickCount: number
): Promise<void> => {
  await fetch(`${URL}/cars/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ clickCount }),
  });
};
