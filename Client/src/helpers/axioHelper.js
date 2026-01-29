import axios from "axios"

const apiProcessor = async({method,url,data})=>{
    try{
        const response = await axios({
            method,
            url,
            data
        })
    }
    catch(error)
    {
        return {
            status:"error",
            message:error.message
        }
    }
}

// post new user
export const postNewUser = (data) =>{
 const obj = {
    method: "post",
    url: rootApiEP + "/users",
    data,
 }
}