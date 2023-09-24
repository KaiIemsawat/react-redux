import { useState } from "react";

function BookEdit({ thisBook, onSubmitEdit }) {
    const [title, setTitle] = useState(thisBook.title);

    const changeHandler = (event) => {
        setTitle(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        onSubmitEdit(thisBook.id, title);
    };
    return (
        <form onSubmit={submitHandler} className="book-edit">
            <label>Title</label>
            <input
                type="text"
                className="input"
                value={title}
                onChange={changeHandler}
            />
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;
