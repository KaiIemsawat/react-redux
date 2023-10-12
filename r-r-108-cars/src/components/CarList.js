import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
    const dispatch = useDispatch();
    const cars = useSelector((state) => {
        return state.cars.data;
    });

    const deleteCarHandler = (car) => {
        dispatch(removeCar(car.id));
    };

    const renderedCars = cars.map((car) => {
        return (
            <div key={car.id} className="panel">
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button
                    className="button is-danger"
                    onClick={() => deleteCarHandler(car)}
                >
                    Delete
                </button>
            </div>
        );
    });

    return (
        <div className="car-list">
            {renderedCars} <hr />
        </div>
    );
}

export default CarList;
