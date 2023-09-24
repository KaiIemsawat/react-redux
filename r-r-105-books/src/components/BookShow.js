import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEditBook }) {
    const [showEdit, setShowEdit] = useState(false);

    const clickToDeleteHandler = () => {
        onDelete(book.id);
    };

    const clickToEditHandler = () => {
        setShowEdit(!showEdit);
    };

    const submitHandler = (id, newTitle) => {
        setShowEdit(false);
        onEditBook(id, newTitle);
    };

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit thisBook={book} onSubmitEdit={submitHandler} />;
    }

    return (
        <div className="book-show">
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
