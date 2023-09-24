import BookShow from "./BookShow";

function BookList({ books, onDelete }) {
    const renderBooks = books.map((eaBook) => {
        return <BookShow key={eaBook.id} book={eaBook} onDelete={onDelete} />;
    });
    return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
