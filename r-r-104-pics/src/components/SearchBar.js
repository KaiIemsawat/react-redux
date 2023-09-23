import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState("");

    const formSubmitHandler = (event) => {
        event.preventDefault();

        onSubmit(term);
    };

    const changeHandler = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <form onSubmit={formSubmitHandler}>
                <label>Enter Search Term</label>
                <input type="text" onChange={changeHandler} value={term} />
            </form>
        </div>
    );
}

export default SearchBar;
