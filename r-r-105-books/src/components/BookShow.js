import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

import BookEdit from "./BookEdit";

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);

    const { deleteBookById } = useBooksContext();

    const clickToDeleteHandler = () => {
        deleteBookById(book.id);
    };

    const clickToEditHandler = () => {
        setShowEdit(!showEdit);
    };

    const submitHandler = () => {
        setShowEdit(false);
    };

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit thisBook={book} onSubmitEdit={submitHandler} />;
    }

    return (
        <div className="book-show">
            <img
                src={`https://picsum.photos/seed/${book.id}/300/200`}
                alt="Book"
            />
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={clickToEditHandler}>
                    Edit
                </button>
                <button className="delete" onClick={clickToDeleteHandler}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookShow;
