import { getUser } from "../helpers/axioHelper"

export const autoLogin = async(setUser)=>{
    const accessJwt = localStorage.getItem("JwtToken")
    if(accessJwt)
    {
        const response = await getUser()
        if(response.status === "success")
        {
            setUser(response.user)
        }
        console.log(response,"response user")
    }
}