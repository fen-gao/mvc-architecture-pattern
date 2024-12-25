import { CarView } from "../../models/car";
import styles from "./car-view.module.css";

export const Carview = ({ selectedCar, onClickCount }: CarView) => {
  const { name, imgSrc, clickCount } = selectedCar || {};

  return (
    <section>
      {selectedCar && (
        <div className={styles["car-view-container"]}>
          <h2>{name}</h2>
          <img src={`src/assets/${imgSrc}`} alt={name} />

          <div className={styles["controller-count-container"]}>
            <button onClick={onClickCount}>Click</button>
            <p>Click count: {clickCount}</p>
          </div>
        </div>
      )}
    </section>
  );
};
