import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useUserContext } from "../../context/userContext";

const INCOME_COLORS = ["#97C459", "#198754", "#3B6D11", "#27500A",]
const EXPENSE_COLORS = ["#D85A30", "#ED93B1", "#EF9F27", "#E24B4A", "#7F77DD", "#888780"];

export default function IncomeExpensesChart() {

  const [tab, setTab] = useState("income");
  const { totalIncome, totalExpense, transactions } = useUserContext()

  // ✅ Derive directly from transactions
  const incomeData = transactions
    .filter(t => t.type === "income")
    .map(t => ({ name: t.title, value: t.amount }));

  const expenseData = transactions
    .filter(t => t.type === "expense")
    .map(t => ({ name: t.title, value: t.amount }));

  const isIncome = tab === "income";
  const isOverview = tab === "overview";

  const data = isOverview
    ? [{ name: "Income", value: totalIncome }, { name: "Expenses", value: totalExpense }]
    : isIncome ? incomeData : expenseData;

  const colors = isOverview
    ? ["#185FA5", "#D85A30"]
    : isIncome ? INCOME_COLORS : EXPENSE_COLORS;

  // ✅ Empty state
  if (!transactions.length) {
    return <p style={{ color: "#888" }}>No transactions found.</p>;
  }

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", padding: 16 }}>


      {/* Tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {["income", "expenses", "overview"].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: "6px 16px", fontSize: 13, borderRadius: 8, cursor: "pointer",
            border: "1px solid #ddd",
            background: tab === t ? "#198754" : "#fff",
            color: tab === t ? "#fff" : "#666",
          }}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%"
            innerRadius={70} outerRadius={120} paddingAngle={2}>
            {data.map((_, i) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => {
              const total = data.reduce((s, d) => s + d.value, 0);
              return [`Rs.${value.toLocaleString()} (${Math.round(value / total * 100)}%)`, name];
            }}
          />
          <Legend iconType="square" iconSize={10} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}