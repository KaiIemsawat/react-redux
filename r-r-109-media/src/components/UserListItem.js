import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/useThunk";
import ExpandablePanel from "./ExpandablePanel";

export default function UserListItem({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);
    const clickHandler = () => {
        doRemoveUser(user);
    };
    const header = (
        <>
            <Button className="mr-3" loading={isLoading} onClick={clickHandler}>
                <GoTrash />
            </Button>
            {error && <div>Error deleting user....</div>}
            {user.name}
        </>
    );

    return <ExpandablePanel header={header}>CONTENT..!!</ExpandablePanel>;
}
