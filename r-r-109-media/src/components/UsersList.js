import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";

function UsersList() {
    const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    const [loadingUsersError, setLoadingUsersError] = useState(null);
    const [isCreatingUser, setIsCreatingUser] = useState(false);
    const [creatingUserError, setCreatingUserError] = useState(null);

    const dispatch = useDispatch();
    const { data } = useSelector((state) => {
        //                                    this 'state' <-- {data: [],isLoading: false,error: null} from usersSlice.js
        return state.users;
    });

    useEffect(() => {
        setIsLoadingUsers(true);
        dispatch(fetchUsers())
            .unwrap()
            .catch((error) => setLoadingUsersError(error))
            .finally(() => setIsLoadingUsers(false));
    }, [dispatch]);

    const userAddHandler = () => {
        setIsCreatingUser(true);
        dispatch(addUser())
            .unwrap()
            .catch((error) => setCreatingUserError(error))
            .finally(() => setIsCreatingUser(false));
    };

    if (isLoadingUsers) {
        return <Skeleton times={5} className="h-10 w-full" />;
    }

    if (loadingUsersError) {
        return <div>Error fetching data....</div>;
    }

    const renderedUsers = data.map((user) => {
        return (
            <div key={user.id} className="mb-2 border rounded">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    {user.name}
                </div>
            </div>
        );
    });
    return (
        <div>
            <div className="flex flex-row justify-between m-3">
                <h1 className="m-2 text-xl">Users</h1>
                {isCreatingUser ? (
                    "Creating User..."
                ) : (
                    <Button onClick={userAddHandler}>+ Add User</Button>
                )}
                {creatingUserError && "Error creating user .... !!"}
            </div>
            {renderedUsers}
        </div>
    );
}

export default UsersList;
