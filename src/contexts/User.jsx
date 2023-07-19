import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState('tickle122');
    return (
        <UserContext.Provider value ={{ user }}>
            {props.children}
        </UserContext.Provider>
    )
}