import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

function AlbumList({ user }) {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    // console.log(useFetchAlbumsQuery(user));
    // USE A LOT -- data, error (if no error we will not see), refetch, isFetching, isLoading

    const [addAlbum, result] = useAddAlbumMutation();
    // console.log(result); // use this to check the data receive when click on expand and add album

    const addAlbumHandler = () => {
        addAlbum(user);
    };

    let content;
    if (isLoading) {
        content = <Skeleton className="h-10 w-full" times={3} />;
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
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">AlbumList {user.name}</h3>
                <Button loading={result.isLoading} onClick={addAlbumHandler}>
                    + Add Album
                </Button>
            </div>
            <div>{content}</div>
        </div>
    );
}

export default AlbumList;
