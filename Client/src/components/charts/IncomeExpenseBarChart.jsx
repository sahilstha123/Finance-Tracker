import React from 'react'
import { useUserContext } from '../../context/userContext'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const IncomeExpenseBarChart = () => {
    const { transactions } = useUserContext()

    // Group transactions by date
    const groupData = transactions.reduce((acc, curr) => {
        const date = new Date(curr.tdate).toLocaleDateString("en-Us", {
            month: "short",
            day: "numeric"
        })
        if (!acc[date]) {
            acc[date] = { date, income: 0, expense: 0 }
        }
        if (curr.type === "income") {
            acc[date].income += Number(curr.amount)
        }
        else if (curr.type === "expense") {
            acc[date].expense += Number(curr.amount)
        }
        return acc;
    }, {})

    // convert to array and sort by date
    const data = Object.values(groupData).sort((a, b) => new Date(a.date) - new Date(b.date))

    if (data.length === 0) {
        <div className='d-flex align-items-center justify-content-center' style={{
            height: "300px"
        }}>
            <p className='text-muted'> No transaction data available</p>
        </div>
    }
    return (
        <div className="chart-container">
            <h5 className="chart-title text-center mb-4"> Income vs Expense by Date</h5>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#aaa" />
                    <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10, fill: "#222" }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10, fill: "#222" }}
                        width={60}
                        tickFormatter={(value) => `Rs.${value}`}
                    />
                    < Tooltip
                        contentStyle={{
                            borderRadius: "12px",
                            border: "none",
                            padding: "10px",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                        }}
                        formatter={(value) => [`Rs.${value.toLocaleString()}`, "Amount"]}
                    />
                    <Legend
                        verticalAlign='top'
                        align='right'
                        height={36}
                        wrapperStyle={{paddingBottom: "40px"}}
                        iconType='circle'
                    />
                    <Bar
                        dataKey="income"
                        name="Income"
                        fill='#198754'
                        radius={[5,5,0,0]}
                        barSize={35}
                    />
                    <Bar
                        dataKey="expense"
                        name="Expense"
                        fill='#A71D2A'
                        radius={[5,5,0,0]}
                        barSize={35}
                    />

                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default IncomeExpenseBarChart