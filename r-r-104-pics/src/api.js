import axios from "axios";

const searchImages = async () => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization:
                "Client-ID fNsiwZZ2TLeOclypc8xnxUr1P04GuGtuo3-QUv-8OL0",
        },
        params: {
            query: "bicycle",
        },
    });

    console.log(response);
    return response;
};

export default searchImages;
