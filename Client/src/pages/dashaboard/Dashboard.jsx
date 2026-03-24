import { useContext, useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { userContext } from '../../context/userContext'
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import SummaryCard from '../../components/ui/SummaryCard'
import OverviewPieChart from '../../components/charts/OverviewPieChart'
import TransactionLineChart from '../../components/charts/TransactionLineChart'
import "./Dashboard.css"
const Dashboard = () => {
  const { totalIncome, totalExpense, netBalance, userData, getTransactions } = useContext(userContext)
  useEffect(() => {
    getTransactions()
  }, [])
  return (
    <div className="dashboard-wrapper">
      <Container className="py-5">
        <div className="dashboard-header mb-5 text-center">
          <h1 className="fw-bold mb-2" style={{
            color: "#14532D"
          }}>Welcome back, {userData?.name || 'User'}! </h1>
          <p className="text-muted fs-5" style={{
            color: "#198754"
          }}>Here's a quick overview of your finances.</p>
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
        <Row className='g-4 mb-5'>
          <Col lg={4} md={12}>
            <div className="chart-card">
              <OverviewPieChart />
            </div>
          </Col>
          <Col md={4}>
            <div className="chart-card">
              <TransactionLineChart />
            </div>
          </Col>
          <Col md={4}>
            <div className="chart-card">
              <TransactionLineChart type='expense' />
            </div>
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default Dashboard