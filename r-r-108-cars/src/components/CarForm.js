import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";

function CarForm() {
    const dispatch = useDispatch();

    const name = useSelector((state) => {
        return state.form.name;
    });

    const nameChangeHandler = (event) => {
        dispatch(changeName(event.target.value));
        // changeName is a reducer function imported from '../store' which also imported from 'formSlice.js'
        // And it expect a payload // SEE in fromSlice.js -> changeName(state, action) {state.name = action.payload},
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
                </div>
            </form>
        </div>
    );
}

export default CarForm;
