import BookShow from "./BookShow";

function BookList({ books, onDelete, onEditBook }) {
    const renderBooks = books.map((eaBook) => {
        return (
            <BookShow
                key={eaBook.id}
                book={eaBook}
                onDelete={onDelete}
                onEditBook={onEditBook}
            />
        );
    });
    return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
