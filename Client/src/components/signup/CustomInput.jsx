import React, { useState } from 'react'
import Form from "react-bootstrap/Form"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const CustomInput = ({ label, controlId, type, ...rest }) => {
  const [showPassword, setShowPassword] = useState(true)

  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      {type === "password" ? (
        <div className="position-relative">
          <Form.Control
            type={showPassword ? "password" : "text"}
            {...rest}
          />
          <span
            className="position-absolute top-50 end-0 translate-middle-y pe-3 password-toggle"
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
          </span>
        </div>
      ) : (
        <Form.Control type={type} {...rest} />
      )}
    </Form.Group>
  )
}

export default CustomInput