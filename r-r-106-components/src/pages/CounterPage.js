import { useEffect, useState } from "react";
import Button from "../components/Button";
import useCounter from "../hooks/useCounter";
import Panel from "../components/Panel";

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
    const [count, setCount] = useState(initialCount); // same ting as above but create new to avod confusion

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    // To this line ------- including 'decrement part in jsx'

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            <form>
                <label>Add a lot!!</label>
                <input
                    type="number"
                    className="p-1 m-3 bg-gray-50 border border-gray-300 rounded-md"
                />
                <Button>Add it</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;
