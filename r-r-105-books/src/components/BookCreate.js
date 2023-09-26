import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
    const [title, setTitle] = useState("");

    const { createBook } = useBooksContext();

    const changeHandler = (event) => {
        setTitle(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle("");
    };

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={submitHandler}>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={changeHandler}
                    className="input"
                />
                <button className="button">Create!!</button>
            </form>
        </div>
    );
}

export default BookCreate;
