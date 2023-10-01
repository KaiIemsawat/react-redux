import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
    const [selection, setSelection] = useState(null);

    const selectHandler = (option) => {
        setSelection(option);
    };

    const options = [
        { label: "Red", value: "red" },
        { label: "Green", value: "green" },
        { label: "Blue", value: "blue" },
    ];

    return (
        <div className="flex">
            <Dropdown
                options={options}
                value={selection}
                onChange={selectHandler}
            />
            {/* <Dropdown
                options={options}
                value={selection}
                onChange={selectHandler}
            /> */}
        </div>
    );
}

export default App;
