import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

function Link({ navigateTo, children, className, activeClassName }) {
    const { navigate, currentPath } = useNavigation();

    const classes = classNames(
        "text-blue-500",
        className,
        currentPath === navigateTo && activeClassName
    );

    const clickHandler = (event) => {
        // The next if statement is to allows user to open a new tap if hold CMD while clicking on link
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();

        navigate(navigateTo);
    };

    return (
        <a className={classes} href={navigateTo} onClick={clickHandler}>
            {children}
        </a>
    );
}

export default Link;
