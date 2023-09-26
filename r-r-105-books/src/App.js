import { useContext, useEffect } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
    const { fetchBooks } = useContext(BooksContext);

    // Note below
    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
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
