import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import {
  FaSearch,
  FaTrashAlt,
  FaRegEdit,
  FaFilter,
  FaArrowAltCircleUp,
  FaArrowAltCircleDown
} from 'react-icons/fa'
import "./TransactionTable.css"

const TransactionTable =  () => {
  const [filter, setFilter] = useState("All")
 
  const buttons = ["All", "Credit", "Debit"]
  return (
    <div className="transaction-table-container">
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
            <tr>
              <td>01</td>
              <td><span className="date-text">2025-3-01</span></td>
              <td className="fw-bold text-dark">Food</td>
              <td>
                <span className="transaction-badge badge-credit">
                  <FaArrowAltCircleUp />
                  <span className="amount-text">3500</span>
                </span>
              </td>
              <td>
                <span className="transaction-badge badge-debit">
                  <FaArrowAltCircleDown />
                  <span className="amount-text">3500</span>
                </span>
              </td>
              <td>
                <div className="action-btns">
                  <div className="btn-action" title='Edit'><FaRegEdit /></div>
                  <div className="btn-action btn-delete" title='Delete'><FaTrashAlt /></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div className="summary-section">
        <div className="summary-card">
          <span className="summary-label">Total Income</span>
          <span className="summary-value value-credit">25000</span>
        </div>
        <div className="summary-card">
          <span className="summary-label">Total Expense</span>
          <span className="summary-value value-debit">25000</span>
        </div>
        <div className="summary-card">
          <span className="summary-label">Net Balance</span>
          <span className="summary-value ">25000</span>
        </div>
      </div>
    </div>

  );
}

export default TransactionTable