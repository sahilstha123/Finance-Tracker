import { createContext, useContext, useState } from "react";
import { fetchTransaction } from "../helpers/axioHelper";

export const userContext = createContext()

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({})
    const [appLoading, setAppLoading] = useState(true)
    const [transactions, setTransactions] = useState([])
    const [modalType, setModalType] = useState("add")
    const [show, setShow] = useState(false);
    const toggleModal = (value, type = "add") => {
        setShow(value)
        setModalType(type)
    }

    const getTransactions = async () => {
        // call axio helper to call api
        const { status, data } = await fetchTransaction()
        status === "success" && setTransactions(data)
    }
    return (
        <userContext.Provider value={{
            userData, setUserData, appLoading,
            setAppLoading, transactions, getTransactions,
            show, toggleModal,modalType
        }}>
            {children}
        </userContext.Provider>
    )
}

export const useUserContext = () => useContext(userContext)