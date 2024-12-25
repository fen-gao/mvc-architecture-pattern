import { CarLIstProps } from "../../models/car";
import styles from "./car-list.module.css";

export const CarList = ({ data, onCarClick }: CarLIstProps) => {
  return (
    <aside>
      <h2>Car List</h2>
      <ul className={styles.carList}>
        {data.map((car) => (
          <li key={car.id}>
            <button
              className={styles.button}
              onClick={() => onCarClick(car.id)}
            >
              {car.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};
