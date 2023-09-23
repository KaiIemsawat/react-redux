import React from "react";

function SearchBar({ onSubmit }) {
    const clickHandler = () => {
        onSubmit("bicycle");
    };

    return (
        <div>
            <input type="text" />
            <button onClick={clickHandler}>Search</button>
        </div>
    );
}

export default SearchBar;
