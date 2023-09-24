import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        let id = Math.floor(Math.random() * 99999); // temporaly use since in reality, the id should be generate in the backend

        const updatedBooks = [...books, { id, title }];
        setBooks(updatedBooks);
    };

    return (
        <div className="app">
            <BookList books={books} />
            <BookCreate onCreateBook={createBook} />
        </div>
    );
}
export default App;
