import { useState } from "react";

import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

function App() {
    const [images, setImages] = useState([]);

    const submitHandler = async (term) => {
        const res = await searchImages(term);
        setImages(res);
    };

    return (
        <div>
            {/* This 'onSubmit' is a prop */}
            <SearchBar onSubmit={submitHandler} />
            <ImageList images={images} />
        </div>
    );
}

export default App;
