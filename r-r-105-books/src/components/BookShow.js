function BookShow({ book, onDelete }) {
    const clickToDeleteHandler = () => {
        onDelete(book.id);
    };
    return (
        <div className="book-show">
            {book.title}
            <div className="actions">
                <button className="delete" onClick={clickToDeleteHandler}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookShow;
