import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost } from "../store";

function CarForm() {
    const dispatch = useDispatch();

    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost,
        };
    });

    const nameChangeHandler = (event) => {
        dispatch(changeName(event.target.value));
        // changeName is a reducer function imported from '../store' which also imported from 'formSlice.js'
        // And it expect a payload // SEE in fromSlice.js -> changeName(state, action) {state.name = action.payload},
    };

    const costChangeHandler = (event) => {
        const carCost = parseInt(event.target.value) || 0;

        dispatch(changeCost(carCost));
    };

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input
                            type="text"
                            className="input is-expanded"
                            value={name}
                            onChange={nameChangeHandler}
                        />
                    </div>
                    <div className="field">
                        <label className="label">Cost</label>
                        <input
                            className="input is-expanded"
                            value={cost || ""} // use '|| ""' to eliminate '0' that remain in the field
                            onChange={costChangeHandler}
                            type="number"
                            onKeyDown={(evt) =>
                                ["e", "E", "+", "-"].includes(evt.key) &&
                                evt.preventDefault()
                            }
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CarForm;
