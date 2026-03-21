import React, { useState } from 'react'
import {
  FaSearch,
  FaTrashAlt,
  FaRegEdit,
  FaArrowAltCircleUp,
  FaArrowAltCircleDown
} from 'react-icons/fa'
import "./TransactionTable.css"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import { BsPlusCircle } from 'react-icons/bs'
import { useUserContext } from '../../context/userContext'

const TransactionTable = () => {
  const { transactions, toggleModal } = useUserContext()
  const [idsToDelete, setIdsToDelete] = useState([])
  const [filter, setFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const buttons = ["All", "Credit", "Debit"]
  const queryItems = searchQuery.toLowerCase()

  const filteredTransactions = transactions.filter((item) => {
    const matchesFilter =
      filter === "Credit" ? item.type === "income" :
        filter === "Debit" ? item.type === "expense" :
          true

    const matchesItems = item.title?.toLowerCase().includes(queryItems)

    return matchesFilter && matchesItems
  })

  // pagination logic 
  const totalItems = filteredTransactions.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = filteredTransactions.slice(startIndex, startIndex + itemsPerPage)
  const handleFilterChange = (item) => {
    setFilter(item)
    setCurrentPage(1)
  }
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  const totalIncome = transactions.reduce((acc, curr) => curr.type === "income" ? acc + Number(curr.amount) : acc, 0)
  const totalExpense = transactions.reduce((acc, curr) => curr.type === "expense" ? acc + Number(curr.amount) : acc, 0)
  const netBalance = totalIncome - totalExpense

  const handleOnSelect = (e) => {
    const { checked, value } = e.target
    if (value === "all") {
      const allCurrentIds = currentItems.map(item => item._id)
      if (checked) {
        // Add all current page items' IDs to idsToDelete, avoiding duplicates

        setIdsToDelete(prev => [...new Set([...prev, ...allCurrentIds])])
      } else {
        // Remove all current page items' IDs from idsToDelete

        setIdsToDelete(prev => prev.filter(id => !allCurrentIds.includes(id)))
      }
      return
    }
    checked
      ? setIdsToDelete(prev => [...prev, value])
      : setIdsToDelete(prev => prev.filter((id) => id !== value))
  }
  console.log(idsToDelete)
  return (
    <div className="transaction-table-container">
      <div className="button-wrapper">
        <button className='add-new' onClick={() => toggleModal(true, "add")} >
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
            className='search-input'
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setCurrentPage(1)
            }} />
        </div>

        <div className="filter-group">
          {
            buttons.map((item) => (
              <button
                key={item}
                className={`btn-filter ${filter === item ? "active" : ""}`}
                onClick={() => handleFilterChange(item)}
              >
                {item}
              </button>
            ))
          }
        </div>
      </div>

      <div className="select-all-wrapper">
        <Form.Check
          label="Select All (current page)"
          onChange={handleOnSelect}
          value={"all"}
          checked={currentItems.length > 0 && currentItems.every(item => idsToDelete.includes(item._id))}
        />
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
            {currentItems.map((items, index) => (

              <tr key={items._id || index}>
                <td>{startIndex + index + 1}</td>
                <td><Form.Check type="checkbox" id={`check-${items._id || index}`} label={
                  <span className="date-text">{items.tdate ? new Date(items.tdate).toLocaleDateString() : "-"}</span>
                } onChange={handleOnSelect} value={items._id} checked={idsToDelete.includes(items._id)} />
                </td>
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
                    <button
                      className="btn-action btn-delete"
                      title='Delete'
                      onClick={() => {
                        console.log("Trash icon clicked, triggering modal...");
                        toggleModal(true, "delete");
                      }}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>

            ))}

          </tbody>
        </table>
      </div>
      {/* delete Section*/}
      {idsToDelete.length > 0 && (
        <div className="bulk-delete-panel">
          <div className="bulk-delete-info">
            <span className="selection-count">
              <strong>{idsToDelete.length}</strong> transactions selected
            </span>
            <button
              className="btn-clear-selection"
              onClick={() => setIdsToDelete([])}
            >
              Clear All Selection
            </button>
          </div>
          <Button
            variant='danger'
            className='btn-bulk-delete-main'
            onClick={() => toggleModal(true, "delete")}
          >
            <FaTrashAlt className='me-2' />
            Delete transactions
          </Button>
        </div>
      )}

      {/* pagination Control */}
      {totalPages > 1 && (
        <div className="pagination-container">
          <button className="btn-pagination"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >Previous</button>
          <div className="page-numbers">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                className={`page-number ${currentPage === i + 1 ? "active" : ""}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button className="btn-pagination"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

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