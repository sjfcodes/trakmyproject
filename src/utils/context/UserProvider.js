import React, { useState, createContext, useContext } from 'react';

export const UserContext = createContext()

export const useUserData = () => useContext(UserContext)

const UserProvider = (props) => {
    const [loggedInUser, setLoggedInUser] = useState({
        loggedIn: false,
        username: 'username-string',
        name: 'John',
        role: 'Admin',
        id: 142323,
    });

    return (
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser }} {...props} />
    );
};

export default UserProvider;