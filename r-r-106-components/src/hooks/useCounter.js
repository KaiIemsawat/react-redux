import { useEffect, useState } from "react";

function useCounter(initialCount) {
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

export default useCounter;
