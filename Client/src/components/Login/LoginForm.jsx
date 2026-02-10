import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Spinner from 'react-bootstrap/Spinner';
import { useEffect, useState } from 'react';
import "../signup/signup.css"
import { useForm } from '../../hooks/useForm';
import { loginUser } from "../../helpers/axioHelper";
import { toast } from "react-toastify";
import { BsCheckCircleFill, BsExclamationTriangleFill } from "react-icons/bs";
import { useUserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
  const navigate = useNavigate()
  const { userData, setUserData } = useUserContext()
  const initialState = {
    email: "",
    password: "",
  }
  const { form, setForm, handleOnChange } = useForm(initialState)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    userData?._id && navigate("/dashboard")
  }, [userData?._id])

  const handleOnsubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true);

    try {
      const { status, message, user } = await loginUser(form)

      toast[status](message, {
        className: "toast-mobile",
        autoClose: 3000,
        style: { color: status === "success" ? "green" : "red" },
        icon: status === "success" ? <BsCheckCircleFill className="text-success" /> : <BsExclamationTriangleFill className="text-danger" />
      })

      if (status === 'success') {
        setUserData(user)
        setForm(initialState);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const field = [
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
  ];

  return (
    <div className="d-flex flex-column justify-content-center h-100 px-4 px-md-5">
      <div className="mb-5">
        <h2 className="display-6 fw-bold text-success mb-2">Welcome Back</h2>
        <p className="text-secondary">Please sign in to continue</p>
      </div>

      <Form onSubmit={handleOnsubmit}>
        {field.map((items) => (
          <FloatingLabel
            key={items.label}
            controlId={items.controlId}
            label={items.label}
            className="mb-3 text-secondary"
          >
            <Form.Control
              type={items.type}
              placeholder={items.placeholder}
              name={items.name}
              onChange={handleOnChange}
              value={form?.[items.name] || ""}
              className="rounded-3 border-light bg-light focus-ring focus-ring-success"
              required
            />
          </FloatingLabel>
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
              <span>Signing In...</span>
            </>
          ) : (
            "Sign In"
          )}
        </Button>

        <div className="text-center text-muted small">
          Don't have an account? <a href="/signup" className="text-decoration-none fw-bold text-success ms-1">Sign Up</a>
        </div>
      </Form>
    </div>
  )
}

export default LoginForm