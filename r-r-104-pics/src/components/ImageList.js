import "./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({ images }) {
    const renderImages = images.map((eachImg) => {
        return <ImageShow key={eachImg.id} image={eachImg} />;
    });

    return <div className="image-list">{renderImages}</div>;
}

export default ImageList;
