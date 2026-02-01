import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import CustomInput from '../signup/CustomInput';
import "../signup/signup.css"
const LoginForm = () => {
  const [form,setForm] = useState({})

  const handleOnChange =(e)=>{
    const {name,value} = e.target
    setForm(prev=>(
      {...prev,
        [name]:value
      }
    ))
  }
  const handleOnsubmit = (e)=>{
    e.preventDefault(e)
  console.log(form)

    setForm({})
  }
  const field = [
   
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      controlId: "formBasicEmail"
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "********",
      controlId: "formBasicPassword"
    },
   
   
  ];
  return (
    <Card className="w-100 h-100 shadow-sm signup-card border-0">
      <Card.Body>
        <Card.Title className="text-center text-success">Sign In</Card.Title>
        <Form onSubmit={handleOnsubmit}>
          {field.map((items) => (
            <CustomInput
              key={items.label}
              {...items}
              onChange={handleOnChange}
              value={form?.[items.name] || ""}
            />
          ))}
          <Button variant="success" type="submit" className="w-100 mb-3">
            Login
          </Button>
          <div className="text-center">
            Desnot have an account ? <a href="/signup">Sign Up</a>
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default LoginForm