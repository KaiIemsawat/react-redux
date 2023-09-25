//Import BooksContext to use the created context.
import BooksContext from "../context/books";

// Then, import {useContext} to use useContext(BooksContext)
import { useContext } from "react";
import BookShow from "./BookShow";

function BookList({ books, onDelete, onEditBook }) {
    const { count, incrementCount } = useContext(BooksContext);

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
    return (
        <div className="book-list">
            {count}
            <button onClick={incrementCount}>Click</button>
            {renderBooks}
        </div>
    );
}

export default BookList;
