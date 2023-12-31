import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useThunk } from "../hooks/useThunk";
import { addUser, fetchUsers } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import UserListItem from "./UserListItem";

function UsersList() {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] =
        useThunk(fetchUsers);
    // const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    // const [loadingUsersError, setLoadingUsersError] = useState(null);

    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
    // const [isCreatingUser, setIsCreatingUser] = useState(false);
    // const [creatingUserError, setCreatingUserError] = useState(null);

    // const dispatch = useDispatch();
    const { data } = useSelector((state) => {
        //                  this 'state' <-- {data: [],isLoading: false,error: null} from usersSlice.js
        return state.users;
    });

    useEffect(() => {
        doFetchUsers();
        // setIsLoadingUsers(true);
        // dispatch(fetchUsers())
        //     .unwrap()
        //     .catch((error) => setLoadingUsersError(error))
        //     .finally(() => setIsLoadingUsers(false));
    }, [doFetchUsers]);

    const userAddHandler = () => {
        doCreateUser();
        // setIsCreatingUser(true);
        // dispatch(addUser())
        //     .unwrap()
        //     .catch((error) => setCreatingUserError(error))
        //     .finally(() => setIsCreatingUser(false));
    };

    let content;

    if (isLoadingUsers) {
        content = <Skeleton times={5} className="h-10 w-full" />;
    } else if (loadingUsersError) {
        content = <div>Error fetching data....</div>;
    } else {
        content = data.map((user) => {
            return <UserListItem key={user.id} user={user} />;
        });
    }

    return (
        <div>
            <div className="flex flex-row justify-between items-center m-3">
                <h1 className="m-2 text-xl">Users</h1>
                <Button loading={isCreatingUser} onClick={userAddHandler}>
                    + Add User
                </Button>
                {creatingUserError && "Error creating user .... !!"}
            </div>
            {content}
        </div>
    );
}

export default UsersList;
