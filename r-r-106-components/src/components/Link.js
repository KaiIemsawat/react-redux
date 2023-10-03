import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Link({ navigateTo, children }) {
    const { navigate } = useContext(NavigationContext);

    const clickHandler = (event) => {
        event.preventDefault();

        navigate(navigateTo);
    };

    return <a onClick={clickHandler}>{children}</a>;
}

export default Link;
