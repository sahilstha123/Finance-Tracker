import { useEffect, useState } from 'react';
import './App.css'
import Button from "react-bootstrap/Button"
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const notify = () => toast.success("Wow so easy!", {
    position: "bottom-right",
    autoClose: 3000,
  });
  return (
    <>
      Hi
      <Button
        variant="primary"
        onClick={notify}
      >
        Primary
      </Button>
      <ToastContainer />
    </>
  )
}

export default App
