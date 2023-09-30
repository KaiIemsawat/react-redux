import { useState } from "react";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const clickHandler = () => {
        setIsOpen(!isOpen);
        // OR
        // setIsOpen((currentIsOpen) => !currentIsOpen);
        // For extra caution
    };

    const optionClickHandler = (option) => {
        // Close dropdown
        setIsOpen(false);

        // assign value of 'option' to 'onChange()'
        onChange(option);
    };

    const renderedOptions = options.map((eachOption) => {
        return (
            <div
                onClick={() => optionClickHandler(eachOption)}
                key={eachOption.value}
            >
                {eachOption.label}
            </div>
        );
    });

    return (
        <div>
            <div onClick={clickHandler}>{value?.label || "Select..."}</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    );
}

export default Dropdown;
