import { useState } from "react"

export const useForm = (initialState)=>{
    const [form, setForm] = useState(initialState)

    const handleOnChange = (e)=>{
        const {name,value} = e.target
        setForm(prev=>(
            {
                ...prev,
                [name]:value
            }
        ))
    }
    return{
        form,
        setForm,
        handleOnChange
    }
}