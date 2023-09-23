import SearchBar from "./components/SearchBar";

function App() {
    const submitHandler = (term) => {
        console.log("Searching for " + term);
    };
    return (
        <div>
            <SearchBar onSubmit={submitHandler} />
        </div>
    );
}

export default App;
