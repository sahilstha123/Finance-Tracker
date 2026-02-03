import { useState } from "react"

export const useForm = ()=>{
    const [form, setForm] = useState({})

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