import { useState } from "react";

function BookCreate({ onCreateBook }) {
    const [title, setTitle] = useState("");

    const changeHandler = (event) => {
        setTitle(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        onCreateBook(title);
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
