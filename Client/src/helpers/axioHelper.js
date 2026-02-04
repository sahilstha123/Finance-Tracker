import axios from "axios"
const rootApiEP = "http://localhost:8000/api/v1"
const apiProcessor = async ({ method, url, data }) => {
    try {
        const response = await axios({
            method,
            url,
            data
        })
         return response.data;
    }
    catch (error) {
        console.error("error",error.response)
        return {
            status: "error",
            message: error?.response?.data?.message || error?.message
        }
    }
}

// post new user
export const postNewUser = (data) => {
    const obj = {
        method: "post",
        url: rootApiEP + "/users/signup",
        data,
    }
    return apiProcessor(obj)
}