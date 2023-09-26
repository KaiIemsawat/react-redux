import useBooksContext from "../hooks/use-books-context";
import BookShow from "./BookShow";

function BookList() {
    const { books } = useBooksContext();

    const renderBooks = books.map((eaBook) => {
        return <BookShow key={eaBook.id} book={eaBook} />;
    });
    return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
