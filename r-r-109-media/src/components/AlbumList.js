import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

function AlbumList({ user }) {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    // console.log(useFetchAlbumsQuery(user));
    // USE A LOT -- data, error (if no error we will not see), refetch, isFetching, isLoading

    const [addAlbum, result] = useAddAlbumMutation();

    const addAlbumHandler = () => {
        addAlbum(user);
    };

    let content;
    if (isLoading) {
        content = <Skeleton times={3} />;
    } else if (error) {
        content = <div>Error loading Albums....</div>;
    } else {
        content = data.map((album) => {
            const header = <div>{album.title}</div>;
            return (
                <ExpandablePanel key={album.id} header={header}>
                    List of PHOTOS....
                </ExpandablePanel>
            );
        });
    }

    return (
        <div>
            <div>
                AlbumList {user.name}
                <Button onClick={addAlbumHandler}>+ Add Album</Button>
            </div>
            <div>{content}</div>
        </div>
    );
}

export default AlbumList;
