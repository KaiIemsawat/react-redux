import { useState, useEffect } from "react";
import axios from "axios";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");

        setBooks(response.data);
    };

    // Note below
    useEffect(() => {
        fetchBooks();
    }, []);

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

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter((eaBook) => {
            return eaBook.id !== id;
        });

        setBooks(updatedBooks);
    };

    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {
            title,
        });

        const updatedBooks = [...books, response.data];

        setBooks(updatedBooks);
    };

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList
                books={books}
                onDelete={deleteBookById}
                onEditBook={editBookById}
            />
            <BookCreate onCreateBook={createBook} />
        </div>
    );
}
export default App;

/* 
    -- have an empty aray as the second argument
    --  ** Call the arrow function 'immediately after the first render'
    --  ** and not ever call again

    useEffect(() => {
      sumeFunction();
    }, [])

    -------------------------------------------------------------

    -- no array, no second argument
    --  ** Call the arrow function 'immediately after the first render'
    --  ** Call after 'every rerender'
    
    useEffect(() => {
      sumeFunction();
    })

        -------------------------------------------------------------

    -- no array, no second argument
    --  ** Call the arrow function 'immediately after the first render'
    --  ** Call again if 'counter' variable 'changed;

    useEffect(() => {
      sumeFunction();
    }, [counter])
    */
