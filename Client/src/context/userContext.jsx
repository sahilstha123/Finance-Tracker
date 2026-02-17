import { createContext, useContext, useState } from "react";

export const userContext = createContext()

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({})
    const [appLoading, setAppLoading] = useState(true)
    return (
        <userContext.Provider value={{ userData, setUserData, appLoading, setAppLoading }}>
            {children}
        </userContext.Provider>
    )
}

export const useUserContext = () => useContext(userContext)