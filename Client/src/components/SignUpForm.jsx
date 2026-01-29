import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import CustomInput from './CustomInput';
import { toast } from "react-toastify";

const SignUpForm = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== form.password) {
      return toast.error("Password do not match", {
        autoClose: 3000,
        style: { color: "red" }
      });
    }
    setForm({});
    console.log(form);
  };

  const field = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Enter your Name",
      controlId: "formBasicName"
    },
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
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "********",
      controlId: "formBasicConfirmPassword"
    },
  ];

  return (
    <Card className="w-100 h-100 shadow-sm signup-card border-0">
      <Card.Body>
        <Card.Title className="text-center text-success">Create Your Account</Card.Title>
        <Form onSubmit={handleOnSubmit}>
          {field.map((items) => (
            <CustomInput 
              key={items.label} 
              {...items}
              onChange={handleOnChange}
              value={form?.[items.name] || ""} 
            />
          ))}
          <Button variant="success" type="submit" className="w-100 mb-3">
            SignUp
          </Button>
          <div className="text-center">
            Already have an account ? <a href="/">Login</a>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SignUpForm;
