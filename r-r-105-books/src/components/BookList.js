//Import BooksContext to use the created context.
import BooksContext from "../context/books";

// Then, import {useContext} to use useContext(BooksContext)
import { useContext } from "react";
import BookShow from "./BookShow";

function useBooksContext() {
    return useContext(BooksContext);
}

function BookList() {
    const { books } = useBooksContext();

    const renderBooks = books.map((eaBook) => {
        return <BookShow key={eaBook.id} book={eaBook} />;
    });
    return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
