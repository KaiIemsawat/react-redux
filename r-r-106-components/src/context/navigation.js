import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener("popstate", handler);

        return () => {
            window.removeEventListener("popstate", handler);
        };
    }, []);

    const navigate = (navigateTo) => {
        window.history.pushState({}, "", navigateTo);
        setCurrentPath(navigateTo);
    };

    return (
        <NavigationContext.Provider value={{ navigate, currentPath }}>
            {children}
        </NavigationContext.Provider>
    );
}

export { NavigationProvider };

export default NavigationContext;
