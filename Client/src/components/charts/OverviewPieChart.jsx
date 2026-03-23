import React from 'react'
import { useUserContext } from '../../context/userContext'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
const OverviewPieChart = () => {
  const colors = ["#198754", "#A71D2A"]
  const { totalIncome, totalExpense, transactions } = useUserContext()
  const data = [
    { name: "Income", value: totalIncome },
    { name: "Expense", value: totalExpense }
  ]
  const total = data.reduce((acc,curr)=> acc + curr.value, 0)
  if (transactions.length === 0) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <p className='text-muted'>No data available</p>
      </div>
    )
  }
  return (
    <div className="chart-container">
      <h5 className="chart-title text-center mb-4">Overview</h5>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            stroke='none'
          >
            {data.map((entry,index)=>(
              <Cell key={`cell-${index}`} fill={colors[index%colors.length]}/>
            ))}
          </Pie>
          <Tooltip
          contentStyle={{
            borderRadius: "12px",
            border: "none",
            padding:"10px"
          }}
          
          formatter={(value,name) => [`Rs. ${value.toLocaleString()} 
            (${((value/total)*100).toFixed(1)}%)`,name]}
          />
          <Legend
          verticalAlign='bottom'
          height={36}
          iconType='circle'
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default OverviewPieChart