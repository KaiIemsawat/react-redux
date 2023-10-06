import { useEffect, useReducer, useState } from "react";
import Button from "../components/Button";
import useCounter from "../hooks/useCounter";
import Panel from "../components/Panel";
import { produce } from "immer";

/* create custom hook */
/* the function then moved to hooks/useCounter.js */
// function useCounter(initialCount) {
//     // <--- take initialCount but not as agrument not props object

//     const [count, setCount] = useState(initialCount);

//     useEffect(() => {
//         console.log(count);
//     }, [count]);

//     const increment = () => {
//         setCount(count + 1);
//     };

//     return {
//         count,
//         increment,
//     };
// }

// This function is added in useReducer lesson

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "set-value-to-add";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

const reducer = (state, action) => {
    switch (action.type) {
        // case INCREMENT_COUNT:
        //     return {
        //         ...state,
        //         count: state.count + 1,
        //     };
        // using immer
        case INCREMENT_COUNT:
            state.count = state.count + 1;
            return;

        // case DECREMENT_COUNT:
        //     return {
        //         ...state,
        //         count: state.count - 1,
        //     };
        // using immer
        case DECREMENT_COUNT:
            state.count = state.count - 1;
            return;

        // case SET_VALUE_TO_ADD:
        //     return {
        //         ...state,
        //         valueToAdd: action.payload,
        //     };
        // using immer
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload;
            return;

        // case ADD_VALUE_TO_COUNT:
        //     return {
        //         ...state,
        //         count: state.count + state.valueToAdd,
        //         valueToAdd: 0,
        //     };
        // using immer
        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
        default:
            return;
    }
};

function CounterPage({ initialCount }) {
    /* Move these blocks of code to the custom hook */
    // const [count, setCount] = useState(initialCount);

    // useEffect(() => {
    //     console.log(count);
    // }, [count]);

    // const increment = () => {
    //     setCount(count + 1);
    // };

    // destruct object from the custom hook
    // const { count, increment } = useCounter(initialCount);
    // comment out for practicing usage of 'useReducer'

    /* Not related to custom hook */
    // From this line ------- is not related to custom hool 'useCounter'

    // comment out for useReducer lessson
    // const [count, setCount] = useState(initialCount); // same thing as above but create new to avod confusion
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0,
    });
    console.log(state);

    const increment = () => {
        // comment out for useReducer lessson
        // setCount(count + 1);
        // Changed to dispatch() for useReducer() lesson
        dispatch({
            // 'type' property is required
            type: INCREMENT_COUNT,
        });
    };
    const decrement = () => {
        // comment out for useReducer lessson
        // setCount(count - 1);

        dispatch({
            type: DECREMENT_COUNT,
        });
    };
    const changeHandler = (event) => {
        const value = parseInt(event.target.value) || 0;
        // comment out for useReducer lessson
        // setValueToAdd(value);
        // Changed to dispatch() for useReducer() lesson
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        // comment out for useReducer lessson
        // setCount(count + valueToAdd);
        // setValueToAdd(0);

        dispatch({
            type: ADD_VALUE_TO_COUNT,
        });
    };
    // To this line ------- including 'decrement part in jsx'

    return (
        <Panel className="m-3">
            {/* <h1 className="text-lg">Count is {count}</h1> */}
            {/* Changed to {state.count} per usage of useReducer */}
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            <form onSubmit={submitHandler}>
                <label>Add a lot!!</label>
                <input
                    // value={valueToAdd || ""}
                    // Changed to {state.valueToAdd} per usage of useReducer
                    value={state.valueToAdd || ""}
                    onChange={changeHandler}
                    onKeyDown={(evt) =>
                        ["e", "E", "+", "-"].includes(evt.key) &&
                        evt.preventDefault()
                    } // <- to limit user from input 'e','E','+', or '-' in the input
                    type="number"
                    className="p-1 m-3 bg-gray-50 border border-gray-300 rounded-md"
                />
                <Button>Add it</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;
