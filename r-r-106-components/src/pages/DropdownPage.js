import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
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
        <div>
            <Dropdown
                options={options}
                value={selection}
                onChange={selectHandler}
            />
        </div>
    );
}

export default DropdownPage;
