import React, { useEffect } from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import TransactionForm from '../components/Transaction/TransactionForm'
import TransactionTable from '../components/Transaction/TransactionTable'
import DeleteConfirmModalContent from '../components/Transaction/DeleteConfirmModalContent'
import { useUserContext } from '../context/userContext'
import { CustomModal } from '../components/ui/CustomModal'

const Transaction = () => {
  const { getTransactions } = useUserContext()
  useEffect(() => {
    getTransactions()
  }, [])
  return (
    <Container>
      <Row>
        <Col >
          {/* form */}
          <CustomModal>
            <TransactionForm />
            
             {/* <DeleteConfirmModalContent/> */}
          </CustomModal>
          <hr />
          {/* table */}
          <TransactionTable />
        </Col>
      </Row>
    </Container>
  )
}

export default Transaction