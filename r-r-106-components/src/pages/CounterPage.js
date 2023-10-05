import { useEffect, useState } from "react";
import Button from "../components/Button";

/* create custom hook */
function useSomething(initialCount) {
    // <--- take initialCount but not as agrument not props object

    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count);
    }, [count]);

    const clickHandler = () => {
        setCount(count + 1);
    };

    return {
        count,
        clickHandler,
    };
}

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
    const { count, clickHandler } = useSomething(initialCount);

    return (
        <div>
            <h1>Count is {count}</h1>
            <Button onClick={clickHandler}>Increment</Button>
        </div>
    );
}

export default CounterPage;
