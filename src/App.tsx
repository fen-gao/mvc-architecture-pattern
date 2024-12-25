import { Header } from "./components/header/header";
import { CarList } from "./components/car-list/car-list";
import { Carview } from "./components/car-view/car-view";
import { useCarModel } from "./hooks/useCarModel";

import "./App.css";

function App() {
  const { cars, selectedCar, handleCarClick, handleClickCount } = useCarModel();

  return (
    <main className="App">
      <Header />
      <div className="container">
        <CarList data={cars} onCarClick={handleCarClick} />
        <Carview selectedCar={selectedCar} onClickCount={handleClickCount} />
      </div>
    </main>
  );
}

export default App;
