import { useContext } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { userContext } from '../context/userContext'

const Dashboard = () => {
  const consumeContext = useContext(userContext)
  console.log("hi", consumeContext)
  return (
    <Container>
      Dashboard
    </Container>
  )
}

export default Dashboard