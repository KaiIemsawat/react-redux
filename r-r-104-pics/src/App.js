import SearchBar from "./components/SearchBar";

function App() {
    const submitHandler = (term) => {
        console.log("Searching for " + term);
    };
    return (
        <div>
            <SearchBar />
        </div>
    );
}

export default App;
