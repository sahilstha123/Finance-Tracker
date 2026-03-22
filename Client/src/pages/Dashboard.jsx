import { useContext } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { userContext } from '../context/userContext'
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import SummaryCard from '../components/ui/SummaryCard'

const Dashboard = () => {
  const { totalIncome, totalExpense, netBalance, userData } = useContext(userContext)

  return (
    <Container className="py-5">
      <div className="dashboard-header mb-5 text-center">
        <h1 className="fw-bold mb-2">Welcome back, {userData?.name || 'User'}! 👋</h1>
        <p className="text-muted fs-5">Here's a quick overview of your finances.</p>
      </div>

      <Row className="mb-4 g-4 justify-content-center">
        <Col lg={4} md={6}>
          <SummaryCard
            title="Total Income"
            amount={totalIncome}
            variant="income"
          />
        </Col>
        <Col lg={4} md={6}>
          <SummaryCard
            title="Total Expense"
            amount={totalExpense}
            variant="expense"
          />
        </Col>
        <Col lg={4} md={12}>
          <SummaryCard
            title="Net Balance"
            amount={netBalance}
            variant="balance"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard