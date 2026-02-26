import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import TransactionForm from '../components/Transaction/TransactionForm'
import TransactionTable from '../components/Transaction/TransactionTable'

const Transaction = () => {
  return (
    <Container>
      <Row>
        <Col >
        {/* form */}
        <TransactionForm/>
        <hr />
        {/* table */}
        <TransactionTable/>
        </Col>
      </Row>
    </Container>
  )
}

export default Transaction