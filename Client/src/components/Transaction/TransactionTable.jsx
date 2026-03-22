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
import { toast } from "react-toastify";


const TransactionTable = ({ limit, hideFilters = false }) => {
  const { transactions, toggleModal,
    idsToDelete, setIdsToDelete,
    totalIncome, totalExpense, netBalance } = useUserContext()
  const [filter, setFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = limit || 5
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

  // Sort by date descending to show most recent first
  const sortedTransactions = [...filteredTransactions].sort((a, b) => new Date(b.tdate) - new Date(a.tdate))

  // pagination logic 
  const totalItems = sortedTransactions.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = sortedTransactions.slice(startIndex, startIndex + itemsPerPage)

  // If limit is provided, we only show one page
  const displayItems = limit ? sortedTransactions.slice(0, limit) : currentItems

  const handleFilterChange = (item) => {
    setFilter(item)
    setCurrentPage(1)
  }
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleOnSelect = (e) => {
    const { checked, value } = e.target
    if (value === "all") {
      const allDisplayIds = displayItems.map(item => item._id)
      if (checked) {
        setIdsToDelete(prev => [...new Set([...prev, ...allDisplayIds])])
      } else {
        setIdsToDelete(prev => prev.filter(id => !allDisplayIds.includes(id)))
      }
      return
    }
    checked
      ? setIdsToDelete(prev => [...prev, value])
      : setIdsToDelete(prev => prev.filter((id) => id !== value))
  }

  return (
    <div className="transaction-table-container">
      {!hideFilters && (
        <>
          <div className="button-wrapper">
            <button className='add-new' onClick={() => toggleModal(true, "add")} >
              <BsPlusCircle />
              Add New Transactions
            </button>
          </div>
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
              checked={displayItems.length > 0 && displayItems.every(item => idsToDelete.includes(item._id))}
            />
          </div>
        </>
      )}

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
              {!hideFilters && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {displayItems.map((items, index) => (
              <tr key={items._id || index}>
                <td>{startIndex + index + 1}</td>
                <td>
                  {!hideFilters ? (
                    <Form.Check type="checkbox" id={`check-${items._id || index}`} label={
                      <span className="date-text">{items.tdate ? new Date(items.tdate).toLocaleDateString() : "-"}</span>
                    } onChange={handleOnSelect} value={items._id} checked={idsToDelete.includes(items._id)} />
                  ) : (
                    <span className="date-text">{items.tdate ? new Date(items.tdate).toLocaleDateString() : "-"}</span>
                  )}
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

                {!hideFilters && (
                  <td>
                    <div className="action-btns">
                      <div className="btn-action" title='Edit'><FaRegEdit /></div>
                      <button
                        className="btn-action btn-delete"
                        title='Delete'
                        onClick={() => {
                          setIdsToDelete([items._id]);
                          toggleModal(true, "delete");
                        }}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!hideFilters && idsToDelete.length > 0 && (
        <div className="bulk-delete-panel">
          <Button
            variant='danger'
            className='btn-bulk-delete-main'
            onClick={() => {
              toggleModal(true, "delete");
            }}
          >
            <FaTrashAlt className='me-2' />
            Delete transactions
          </Button>
        </div>
      )}

      {!hideFilters && totalPages > 1 && !limit && (
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

      {/* Summary Section is redundant on dashboard, but we'll keep it for general use if not on dashboard/limit */}
      {!limit && (
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
      )}
    </div>
  )
}
export default TransactionTable