import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const editBookById = (editingBookId, newTitle) => {
        const updatedBooks = books.map((thisBook) => {
            if (thisBook.id === editingBookId) {
                return { ...thisBook, title: newTitle };
            }
            return thisBook;
        });
        setBooks(updatedBooks);
    };

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((eaBook) => {
            return eaBook.id !== id;
        });
        setBooks(updatedBooks);
    };

    const createBook = (title) => {
        let id = Math.floor(Math.random() * 99999); // temporaly use since in reality, the id should be generate in the backend

        const updatedBooks = [...books, { id, title }];
        setBooks(updatedBooks);
    };

    return (
        <div className="app">
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
