import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: "",
    isAuth: false,
    setIsAuth: (token) => {},
    logout: () => {}
});

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    const setIsAuth = (token) => {
        setToken(token);
    };

    const logout = () => {
        setToken(null);
    };

    const value = {
        token: token,
        isAuth: !!token,
        setIsAuth: setIsAuth,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
