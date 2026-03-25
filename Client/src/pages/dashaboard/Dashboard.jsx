import { useContext, useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useUserContext } from '../../context/userContext'
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import SummaryCard from '../../components/ui/SummaryCard'
import OverviewPieChart from '../../components/charts/OverviewPieChart'
import TransactionLineChart from '../../components/charts/TransactionLineChart'
import "./Dashboard.css"
import IncomeExpenseBarChart from '../../components/charts/IncomeExpenseBarChart'
const Dashboard = () => {
  const { totalIncome, totalExpense, netBalance, userData, getTransactions, transactions } = useUserContext()
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

        {transactions.length > 0 ? (
          <>
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
              <Col lg={4} md={12}>
                <div className="chart-card">
                  <TransactionLineChart />
                </div>
              </Col>
              <Col lg={4} md={12}>
                <div className="chart-card">
                  <TransactionLineChart type='expense' />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div className="chart-card">
                  <IncomeExpenseBarChart/>
                </div>
              </Col>
            </Row>
          </>)
          : (
            <p className='text-center text-muted fs-3'> No transactions Found</p>
          )
        }

      </Container>
    </div>

  )
}

export default Dashboard