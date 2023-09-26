//Import BooksContext to use the created context.
import BooksContext from "../context/books";

// Then, import {useContext} to use useContext(BooksContext)
import { useContext } from "react";

function useBooksContext() {
    return useContext(BooksContext);
}

export default useBooksContext;
