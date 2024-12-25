export interface Car {
  id: number;
  name: string;
  imgSrc: string;
  clickCount: number;
}

export interface CarLIstProps {
  data: Car[];
  onCarClick: (id: number) => void;
}

export interface CarView {
  selectedCar: Car | null;
  onClickCount: () => void;
}

export interface UseCarModelProps {
  cars: Car[];
  selectedCar: Car | null;
  handleCarClick: (id: number) => void;
  handleClickCount: () => void;
}
