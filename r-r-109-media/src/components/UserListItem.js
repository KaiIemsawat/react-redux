import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/useThunk";

export default function UserListItem({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);
    const clickHandler = () => {
        doRemoveUser(user);
    };

    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <div className="flex flex-row items-center justify-between">
                    <Button
                        className="mr-3"
                        loading={isLoading}
                        onClick={clickHandler}
                    >
                        <GoTrash />
                    </Button>
                    {error && <div>Error deleting user....</div>}
                    {user.name}
                </div>
            </div>
        </div>
    );
}
