import React from 'react'
import { useUserContext } from '../../context/userContext'

const TransactionLineChart = ({type="income"}) => {
    const {transactions} = useUserContext()

    // Filter transaction by type and sort by date
    const filteredTransactions = transactions
        .filter((item)=>item.type === type)
        .sort((a,b)=> new Date(a.tdate) - new Date(b.tdate))
    
    // Group by date and sum amounts
    const groupData = filteredTransactions.reduce((acc,curr)=>{
        const date = new Date(curr.tdate).toLocaleDateString("en-Us",{
            month: "short",
            day: "numeric",
        })
        if (!acc[date])
        {
            acc[date] = 0
        }
        acc[date]+= Number(curr.amount);
        return acc
    },{})
    
    const data = Object.keys(groupData).map((date)=>({
        date,
        amount: groupData[date]
    }))
    const color = type === "income" ? "#2ecc71": "#e74c3c"
    const title = type === "income" ? "Income Trend" : "Expense Trend"
  return (
    <div>TransactionLineChart</div>
  )
}
export default TransactionLineChart