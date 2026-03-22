import { createContext, useContext, useState } from "react";
import { fetchTransaction, deleteTransactions } from "../helpers/axioHelper";
import { toast } from "react-toastify";

export const userContext = createContext()

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({})

    // appLoading: Used for initial authentication check (autoLogin)
    const [appLoading, setAppLoading] = useState(true)

    // isLoading: Used for general form submissions and actions (Login, SignUp, Transactions)
    const [isLoading, setIsLoading] = useState(false)

    const [transactions, setTransactions] = useState([])
    const [modalType, setModalType] = useState("add") // 'add' or 'delete'
    const [show, setShow] = useState(false); // Modal visibility
    const [idsToDelete, setIdsToDelete] = useState([])

    const totalIncome = transactions.reduce((acc, curr) => curr.type === "income" ? acc + Number(curr.amount) : acc, 0)
    const totalExpense = transactions.reduce((acc, curr) => curr.type === "expense" ? acc + Number(curr.amount) : acc, 0)
    const netBalance = totalIncome - totalExpense

    /**
     * Toggles the global modal visibility and sets its type.
     */
    const toggleModal = (value, type = "add") => {
        setShow(value)
        setModalType(type)
    }

    /**
     * Fetches all transactions for the authenticated user and updates the state.
     */
    const getTransactions = async () => {
        // call axio helper to call api
        const { status, data } = await fetchTransaction()
        status === "success" && setTransactions(data)
    }

    /**
     * Handles the deletion of selected transactions.
     * Shows a feedback toast and refreshes the transaction list on success.
     */
    const handleOnDelete = async () => {
        if (!idsToDelete.length) return
        setIsLoading(true)
        const pending = deleteTransactions(idsToDelete)
        toast.promise(pending, { pending: "Please wait..." })
        const { status, message } = await pending
        setIsLoading(false)
        if (status === "success") {
            toast[status](message)
            getTransactions()
            setIdsToDelete([])
            toggleModal(false)
        }
    }
    return (
        <userContext.Provider value={{
            userData, setUserData, appLoading,
            setAppLoading, isLoading, setIsLoading,
            transactions, getTransactions,
            show, toggleModal, modalType,
            idsToDelete, setIdsToDelete, handleOnDelete, totalIncome,
            totalExpense, netBalance
            
        }}>
            {children}
        </userContext.Provider>
    )
}

export const useUserContext = () => useContext(userContext)