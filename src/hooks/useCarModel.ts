import { useState, useEffect } from "react";
import { Car, UseCarModelProps } from "../models/car";
import {
  getCars,
  getCarById,
  updateClickCountByCarId,
} from "../services/carService";

export const useCarModel = (): UseCarModelProps => {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const fetchCarById = async (id: number) => {
    try {
      const car = await getCarById(id);
      setSelectedCar(car);
    } catch (error) {
      console.error("Error fetching car by ID:", error);
      setSelectedCar(null);
    }
  };

  const handleCarClick = async (id: number) => {
    await fetchCarById(id);
  };

  const handleClickCount = async () => {
    if (!selectedCar) return;

    try {
      const newClickCount = selectedCar.clickCount + 1;
      await updateClickCountByCarId(selectedCar.id, newClickCount);

      setSelectedCar({
        ...selectedCar,
        clickCount: newClickCount,
      });
    } catch (error) {
      console.error("Error updating car click count:", error);
    }
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const result = await getCars();
        setCars(result);
      } catch (error) {
        console.error("Error fetching cars:", error);
        setCars([]);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    const fetchInitialCar = async () => {
      try {
        await fetchCarById(1);
      } catch (error) {
        console.error("Error fetching car by ID:", error);
      }
    };

    fetchInitialCar();
  }, []);

  return {
    cars,
    selectedCar,
    handleCarClick,
    handleClickCount,
  };
};
