import axios from "axios"
const rootApiEP = "http://localhost:8000/api/v1"

const getAccessJwt = ()=>{
    return localStorage.getItem("JwtToken")
}
const apiProcessor = async ({ method, url, data,headers }) => {
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
// login
export const loginUser = (data) =>{
    const obj = {
        method: "post",
        url: rootApiEP + "/users/login",
        data
    }
    return apiProcessor(obj)
}

// get user 
export const getUser = ()=>{
    const obj = {
        method: "get",
        url: rootApiEP + "/users",
        headers: {
            Authorization: getAccessJwt()
        }
    }
    return apiProcessor(obj)
}