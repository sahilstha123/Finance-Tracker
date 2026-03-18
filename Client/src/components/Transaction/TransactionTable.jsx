import React, { useState } from 'react'
import {
  FaSearch,
  FaTrashAlt,
  FaRegEdit,
  FaArrowAltCircleUp,
  FaArrowAltCircleDown
} from 'react-icons/fa'
import "./TransactionTable.css"

import { BsPlusCircle } from 'react-icons/bs'
import { useUserContext } from '../../context/userContext'

const TransactionTable = () => {
  const { transactions } = useUserContext()
  const [filter, setFilter] = useState("All")
  const buttons = ["All", "Credit", "Debit"]
  const filteredTransactions = transactions.filter((item) => {
    if (filter === "Credit") return item.type === "income"
    if (filter === "Debit") return item.type === "expense"
    return true
  })
  const totalIncome = transactions.reduce((acc, curr) => curr.type === "income" ? acc + Number(curr.amount) : acc, 0)
  const totalExpense = transactions.reduce((acc, curr) => curr.type === "expense" ? acc + Number(curr.amount) : acc, 0)
  const netBalance = totalIncome - totalExpense
  return (
    <div className="transaction-table-container">
      <div className="button-wrapper">
        <button className='add-new' >
          <BsPlusCircle />
          Add New Transactions
        </button>
      </div>
      {/* title,search and filter */}
      <div className="table-top-bar">
        <h3>Transactions</h3>
        <div className="search-box">
          <FaSearch className='search-icon' />
          <input
            type="text"
            placeholder='Search transactions...'
            className='search-input' />
        </div>

        <div className="filter-group">
          {
            buttons.map((item) => (
              <button
                key={item}
                className={`btn-filter ${filter === item ? "active" : ""}`}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))
          }
        </div>
      </div>

      {/* Table Section */}
      <div className="table-responsive">
        <table className="custom-table">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Date</th>
              <th>Title</th>
              <th>Credit</th>
              <th>Debit</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((items, index) => (

              <tr key={items._id || index}>
                <td>{index + 1}</td>
                <td><span className="date-text">{items.tdate ? new Date(items.tdate).toLocaleDateString() : "-"}</span></td>
                <td className="fw-bold text-dark">{items.title}</td>
                <td>
                  {items.type === "income" &&
                    <span className="transaction-badge badge-credit">
                      <FaArrowAltCircleUp />
                      <span className="amount-text">{items.amount}</span>
                    </span>
                  }
                </td>
                <td>
                  {items.type === "expense" && (

                    <span className="transaction-badge badge-debit">
                      <FaArrowAltCircleDown />
                      <span className="amount-text">{items.amount}</span>
                    </span>
                  )}
                </td>

                <td>
                  <div className="action-btns">
                    <div className="btn-action" title='Edit'><FaRegEdit /></div>
                    <div className="btn-action btn-delete" title='Delete'><FaTrashAlt /></div>
                  </div>
                </td>
              </tr>

            ))}

          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div className="summary-section">
        <div className="summary-card">
          <span className="summary-label">Total Income</span>
          <span className="summary-value value-credit">{totalIncome}</span>
        </div>
        <div className="summary-card">
          <span className="summary-label">Total Expense</span>
          <span className="summary-value value-debit">{totalExpense}</span>
        </div>
        <div className="summary-card">
          <span className="summary-label">Net Balance</span>
          <span className={`summary-value ${netBalance >= 0 ? 'value-credit' : 'value-debit'}`}>{netBalance}</span>
        </div>
      </div>
    </div>
  )
}
export default TransactionTable