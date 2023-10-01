import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

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
                className="hover:bg-sky-100 rounded cursor-pointer p-1"
                onClick={() => optionClickHandler(eachOption)}
                key={eachOption.value}
            >
                {eachOption.label}
            </div>
        );
    });

    return (
        <div className="w-48 relative">
            <Panel
                className="flex justify-between items-center cursor-pointer"
                onClick={clickHandler}
            >
                {value?.label || "Select..."}
                <GoChevronDown />
            </Panel>
            {isOpen && (
                <Panel className="absolute top-full">{renderedOptions}</Panel>
            )}
        </div>
    );
}

export default Dropdown;
