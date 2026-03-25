import axios from "axios"
const rootApiEP = import.meta.env.VITE_API_BASE_URl + "/api/v1"

const getAccessJwt = () => {
    return localStorage.getItem("JwtToken")
}
const apiProcessor = async ({ method, url, data, headers }) => {
    try {
        const response = await axios({
            method,
            url,
            data,
            headers
        })
        return response.data;
    }
    catch (error) {
        console.error("error", error.response)
        return {
            status: "error",
            message: error?.response?.data?.message || error?.message
        }
    }
}

// Registers a new user account.
export const postNewUser = (data) => {
    const obj = {
        method: "post",
        url: rootApiEP + "/users/signup",
        data,
    }
    return apiProcessor(obj)
}
// Authenticates an existing user and returns a JWT token.
export const loginUser = (data) => {
    const obj = {
        method: "post",
        url: rootApiEP + "/users/login",
        data
    }
    return apiProcessor(obj)
}

// Fetches the currently authenticated user's profile.
export const getUser = () => {
    const obj = {
        method: "get",
        url: rootApiEP + "/users",
        headers: {
            Authorization: getAccessJwt()
        }
    }
    return apiProcessor(obj)
}

// transaction 

// Creates a new transaction for the authenticated user.
export const addNewTransaction = (tData) => {
    const obj = {
        method: "post",
        url: rootApiEP + "/transactions",
        data: tData,
        headers: {
            Authorization: getAccessJwt()
        }
    }
    return apiProcessor(obj)
}

// Retrieves all transactions belonging to the authenticated user.
export const fetchTransaction = () => {
    const obj = {
        method: "get",
        url: rootApiEP + "/transactions",
        headers: {
            Authorization: getAccessJwt()
        }
    }
    return apiProcessor(obj)
}

// delee the transactions
export const deleteTransactions = (ids) => {
    const obj = {
        method: "delete",
        url: rootApiEP + "/transactions",
        data: { ids },
        headers: {
            Authorization: getAccessJwt()
        }
    }
    return apiProcessor(obj)

}