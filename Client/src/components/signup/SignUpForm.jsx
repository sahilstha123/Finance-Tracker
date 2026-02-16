import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';
import "./signup.css"
import { toast } from "react-toastify";
import { postNewUser } from '../../helpers/axioHelper';
import { useForm } from '../../hooks/useForm';
import { BsCheckCircleFill, BsExclamationTriangleFill } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  const { form, setForm, handleOnChange } = useForm(initialState)
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== form.password) {
      return toast.error("Popwords do not match", {
        autoClose: 3000,
        style: { color: "red" },
        className: "toast-mobile"
      });
    }

    setIsLoading(true);

    try {
      const { status, message } = await postNewUser(rest)

      if (status === "success") {
        toast.success(message, {
          autoClose: 3000,
          style: { color: "green" },
          className: "toast-mobile",
          icon: <BsCheckCircleFill className="text-success" />
        })
        setForm(initialState)
      }
      else {
        toast.error(message || "something went wrong", {
          autoClose: 3000,
          style: { color: "red" },
          className: "toast-mobile",
          icon: <BsExclamationTriangleFill className="text-danger" />
        })
      }

    }
    catch (error) {
      toast.error(error.message || "Something went wrong", {
        autoClose: 3000,
        style: { color: "red" },
        className: "toast-mobile"
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const field = [
    {
      label: "Full Name",
      name: "name",
      type: "text",
      placeholder: "Enter your Name",
      controlId: "floatingName"
    },
    {
      label: "Email Address",
      name: "email",
      type: "email",
      placeholder: "name@example.com",
      controlId: "floatingEmail"
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Password",
      controlId: "floatingPassword"
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      controlId: "floatingConfirmPassword"
    },
  ];

  return (
    <div className="d-flex flex-column justify-content-center h-100 px-4 ">
      <div className="mb-4">
        <h2 className="fw-bold text-success mb-2">Create Account</h2>
        <p className="text-secondary small">Join us to manage your finances better</p>
      </div>

      <Form onSubmit={handleOnSubmit}>
        {field.map((items) => (
          <div key={items.name} className="password-wrapper">
            <FloatingLabel
              controlId={items.controlId}
              label={items.label}
              className="mb-3 text-secondary"
            >
              <Form.Control
                type={
                  items.name === "password"
                    ? (showPassword ? "text" : "password")
                    : items.name === "confirmPassword"
                      ? (showConfirmPassword ? "text" : "password")
                      : items.type
                }
                placeholder={items.placeholder}
                name={items.name}
                onChange={handleOnChange}
                value={form?.[items.name] || ""}
                className="rounded-3 border-light bg-light focus-ring focus-ring-success"
                required
              />
            </FloatingLabel>

            {items.type === "password" && (
              <span
                className="password-toggle"
                onClick={() =>
                  items.name === "password"
                    ? setShowPassword(!showPassword)
                    : setShowConfirmPassword(!showConfirmPassword)
                }
                title={
                  (items.name === "password" ? showPassword : showConfirmPassword)
                    ? "Hide password"
                    : "Show password"
                }
              >
                {(items.name === "password" ? showPassword : showConfirmPassword) ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </span>
            )}
          </div>
        ))}

        <Button
          variant="success"
          type="submit"
          className="w-100 mb-4 py-3 fw-semibold rounded-3 d-flex align-items-center justify-content-center gap-2"
          disabled={isLoading}
          style={{ transition: 'all 0.3s ease' }}
        >
          {isLoading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span>Creating Account...</span>
            </>
          ) : (
            "Sign Up"
          )}
        </Button>

        <div className="text-center text-muted small">
          Already have an account? <a href="/" className="text-decoration-none fw-bold text-success ms-1">Login</a>
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm;
