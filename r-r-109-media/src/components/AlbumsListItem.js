import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrash } from "react-icons/go";

function AlbumsListItem({ album }) {
    const [removeAlbum, result] = useRemoveAlbumMutation(); // mutation hook return an array with some elements in it

    const removeAlbumHandler = () => {
        removeAlbum(album);
    };

    const header = (
        <>
            <Button
                className="mr-2"
                loading={result.isLoading}
                onClick={removeAlbumHandler}
            >
                <GoTrash />
            </Button>
            {album.title}
        </>
    );

    return (
        <ExpandablePanel key={album.id} header={header}>
            List of PHOTOS....
        </ExpandablePanel>
    );
}

export default AlbumsListItem;
