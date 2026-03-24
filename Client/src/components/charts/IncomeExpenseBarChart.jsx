import React from 'react'
import { useUserContext } from '../../context/userContext'

const IncomeExpenseBarChart = () => {
    const { transactions } = useUserContext()

    // Group transactions by date
    const groupData = transactions.reduce((acc, curr) => {
        const date = new Date(curr.tdate).toLocaleDateString("en-Us", {
            month: "short",
            day: "numeric"
        })
        if (!acc[date]) {
            acc[date] = { date, income: 0, expense: 0}
        }
        if(curr.type === "income")
        {
            acc[date].income += Number(curr.amount)
        }
        else if (curr.type === "expense")
        {
            acc[date].expense += Number(curr.amount)
        }
        return acc;
    }, {})
    return (
        <div>IncomeExpenseBarChart</div>
    )
}

export default IncomeExpenseBarChart