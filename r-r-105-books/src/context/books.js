import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    /* GET */
    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");

        setBooks(response.data);
    };

    /* PUT */
    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        });
        console.log(response);

        const updatedBooks = books.map((thisBook) => {
            if (thisBook.id === id) {
                return { ...thisBook, ...response.data };
            }
            return thisBook;
        });

        setBooks(updatedBooks);
    };

    /* DELETE */
    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter((eaBook) => {
            return eaBook.id !== id;
        });

        setBooks(updatedBooks);
    };

    /* POST */
    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {
            title,
        });

        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    };

    // valueToShare <-- Just naming for education purposes. Could be any name
    const valueToShare = {
        books,
        fetchBooks,
        createBook,
        editBookById,
        deleteBookById,
    };
    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;
