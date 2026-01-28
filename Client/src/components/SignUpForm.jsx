import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const SignUpForm = () => {
  return (
    <Card className='p-2 md-p-4 shadow-sm w-100 signup-card'>
      <Card.Body>
        <Card.Title className="text-center text-primary">Create Your Account</Card.Title>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>
              Name
            </Form.Label>
            <Form.Control type="text" placeholder='Enter your Name'  />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>
              Email
            </Form.Label>
            <Form.Control type="email" placeholder='Enter your Email'  />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>
              Password
            </Form.Label>
            <Form.Control type="password" placeholder='Enter your Password'  />
          </Form.Group>

          <Button variant='primary' type="submit" className="w-100 mb-3">
            SignUp
          </Button>

          <div className='text-center'>
            Already have an account ? <a href="/">Login</a>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SignUpForm;
