import React from 'react'
import { useUserContext } from '../../context/userContext'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
const TransactionLineChart = ({ type = "income" }) => {
    const { transactions } = useUserContext()

    // Filter transaction by type and sort by date
    const filteredTransactions = transactions
        .filter((item) => item.type === type)
        .sort((a, b) => new Date(a.tdate) - new Date(b.tdate))

    // Group by date and sum amounts
    const groupData = filteredTransactions.reduce((acc, curr) => {
        const date = new Date(curr.tdate).toLocaleDateString("en-Us", {
            month: "short",
            day: "numeric",
        })
        if (!acc[date]) {
            acc[date] = 0
        }
        acc[date] += Number(curr.amount);
        return acc
    }, {})

    const data = Object.keys(groupData).map((date) => ({
        date,
        amount: groupData[date]
    }))
    const color = type === "income" ? "#198754" : "#e74c3c"
    const title = type === "income" ? "Income Trend" : "Expense Trend"

    if (data.length === 0) {
        return (
            <div className="d-flex align-items-center justify-content-center" style={{
                height: "300px"
            }}>
                <p className="text-muted">No {type} data</p>
            </div>
        )
    }
    return (
        <div className="chart-container">
            <h5 className="chart-title text-center mb-4">{title}</h5>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id={`color${type}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                            <stop offset="95%" stopColor={color} stopOpacity={0} />
                        </linearGradient>
                    </defs>
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
                        width={40}
                        tickFormatter={(value) => `Rs.${value}`}
                    />
                    <Tooltip
                        contentStyle={{
                            borderRadius: "12px",
                            border: "none",
                            padding: "10px",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                        }}
                        formatter={(value)=> [`Rs.${value.toLocaleString()}`, "Amount"]}
                    />
                    <Area
                        type="monotone"
                        dataKey="amount"
                        stroke={color}
                        strokeWidth={3}
                        fillOpacity={5}
                        fill={`url(#color${type})`}
                        animationDuration={1500}
                    />

                </AreaChart>

            </ResponsiveContainer>
        </div>
    )
}
export default TransactionLineChart