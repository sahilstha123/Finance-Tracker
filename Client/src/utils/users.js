import { getUser } from "../helpers/axioHelper"

export const autoLogin = async (setUser, setAppLoading) => {
    const accessJwt = localStorage.getItem("JwtToken")
    if (accessJwt) {
        const response = await getUser()
        if (response.status === "success") {
            setUser(response.user)
        } else {
            // Clear invalid token if getUser fails
            localStorage.removeItem("JwtToken")
        }
    }
    setAppLoading && setAppLoading(false)
}