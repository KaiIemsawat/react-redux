import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        let id = Math.floor(Math.random() * 99999); // temporaly use since in reality, the id should be generate in the backend
        const updatedBooks = [...books, { id, title }];
        setBooks(updatedBooks);
    };

    return (
        <div>
            <BookCreate onCreateBook={createBook} />
        </div>
    );
}
export default App;
