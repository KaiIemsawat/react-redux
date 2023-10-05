import { useEffect, useState } from "react";
import Button from "../components/Button";
import useCounter from "../hooks/useCounter";

/* create custom hook */
/* the function then moved to hooks/useCounter.js */
// function useCounter(initialCount) {
//     // <--- take initialCount but not as agrument not props object

//     const [count, setCount] = useState(initialCount);

//     useEffect(() => {
//         console.log(count);
//     }, [count]);

//     const clickHandler = () => {
//         setCount(count + 1);
//     };

//     return {
//         count,
//         clickHandler,
//     };
// }

function CounterPage({ initialCount }) {
    /* Move these blocks of code to the custom hook */
    // const [count, setCount] = useState(initialCount);

    // useEffect(() => {
    //     console.log(count);
    // }, [count]);

    // const clickHandler = () => {
    //     setCount(count + 1);
    // };

    // destruct object from the custom hook
    const { count, clickHandler } = useCounter(initialCount);

    return (
        <div>
            <h1>Count is {count}</h1>
            <Button onClick={clickHandler}>Increment</Button>
        </div>
    );
}

export default CounterPage;
