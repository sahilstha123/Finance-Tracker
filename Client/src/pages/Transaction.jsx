import React, { useEffect } from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import TransactionForm from '../components/Transaction/TransactionForm'
import TransactionTable from '../components/Transaction/TransactionTable'
import { useUserContext } from '../context/userContext'

const Transaction = () => {
  const {getTransactions, transactions} = useUserContext()
  useEffect(()=>{
    getTransactions()
  },[])
  return (
    <Container>
      <Row>
        <Col >
        {/* form */}
        <TransactionForm/>
        <hr />
        {/* table */}
        <TransactionTable transactions={transactions}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Transaction