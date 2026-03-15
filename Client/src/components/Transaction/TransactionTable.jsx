import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import {
  FaSearch,
  FaTrashAlt,
  FaRegEdit,
  FaFilter
} from 'react-icons/fa'
import "./TransactionTable.css"

const TransactionTable = () => {
  const [filter, setFIlter] = useState("all")
  return (
    <div className="transaction-table-container">
      {/* title,search and filter */}
      <div className="table-top-bar">
        <h3>Transactions</h3>
        <div className="search-box">
          <FaSearch className='search-icon' />
          <input
            type="text"
            placeholder='Search transactions....'
            className='search-input' />

        </div>
      </div>
    </div>

  );
}

export default TransactionTable