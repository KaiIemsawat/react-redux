import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization:
                "Client-ID fNsiwZZ2TLeOclypc8xnxUr1P04GuGtuo3-QUv-8OL0",
        },
        params: {
            query: term,
        },
    });

    // console.log(response.data.results);
    return response.data.results;
};

export default searchImages;
