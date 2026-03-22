import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner';
import { BsPlusCircle, BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'
import { BsCheckCircleFill, BsExclamationTriangleFill } from "react-icons/bs";
import "../../style/form-common.css"
import "./TransactionForm.css"
import { addNewTransaction } from '../../helpers/axioHelper'
import { toast } from "react-toastify";
import { useUserContext } from '../../context/userContext'


const TransactionForm = () => {

    const initialState = {
        type: "income",
        title: "",
        amount: "",
        tdate: ""
    }
    const { form, setForm, handleOnChange } = useForm(initialState)

    const { getTransactions, toggleModal, isLoading, setIsLoading } = useUserContext()
    const handleTypeChange = (type) => {
        handleOnChange({
            target: {
                name: 'type',
                value: type
            }
        });
    }

    /**
     * Handles transaction submission.
     * On success, refreshes the transaction list and closes the modal.
     */
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const result = await addNewTransaction(form)
            const { status, message } = result
            toast[status](message, {
                className: "toast-mobile",
                autoClose: 3000,
                style: { color: status === "success" ? "green" : "red" },
                icon: status === "success" ? <BsCheckCircleFill className="text-success" /> : <BsExclamationTriangleFill className="text-danger" />
            })

            if (status === "success") {
                setForm({ ...initialState, type: form.type })
                // Update the table after successful submission
                await getTransactions()
                // Close the modal upon success
                toggleModal(false)
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    const fields = [
        {
            label: "Transaction Title",
            required: true,
            placeholder: "e.g. Salary, Groceries",
            type: "text",
            name: "title",
            controlId: "floatingTitle"
        },
        {
            label: "Amount",
            required: true,
            placeholder: "0.00",
            type: "number",
            name: "amount",
            controlId: "floatingAmount"
        },
        {
            label: "Transaction Date",
            required: true,
            type: "date",
            name: "tdate",
            controlId: "floatingTDate"
        },
    ]

    return (
        <div className="transaction-form-container">
            <div className="mb-4">
                <h4 className="fw-bold text-success mb-1">Add Transaction</h4>
                <p className="text-secondary small">Keep track of your financial records</p>
            </div>

            <Form onSubmit={handleOnSubmit}>
                {/* Professional Segmented Type Selector */}
                <div className="transaction-type-selector">
                    <div className={`type-slider ${form.type}`}></div>
                    <button
                        type="button"
                        className={`type-btn ${form.type === 'income' ? 'active income' : ''}`}
                        onClick={() => handleTypeChange('income')}
                    >
                        <BsArrowUpCircle size={18} />
                        Income
                    </button>
                    <button
                        type="button"
                        className={`type-btn ${form.type === 'expense' ? 'active expense' : ''}`}
                        onClick={() => handleTypeChange('expense')}
                    >
                        <BsArrowDownCircle size={18} />
                        Expense
                    </button>
                </div>

                <div className="transaction-grid">
                    {fields.map((field) => (
                        <div key={field.name} className={field.name === 'title' ? 'grid-full-width' : ''} style={{ gridColumn: field.name === 'title' ? '1 / span 2' : 'auto' }}>
                            <FloatingLabel
                                controlId={field.controlId}
                                label={field.label}
                                className='mb-3 text-secondary'
                            >
                                <Form.Control
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    name={field.name}
                                    onChange={handleOnChange}
                                    value={form?.[field.name] || ""}
                                    className="custom-form-control focus-ring focus-ring-success"
                                    required
                                />
                            </FloatingLabel>
                        </div>
                    ))}
                </div>

                <Button
                    variant="success"
                    type="submit"
                    className="w-100 mt-3 py-3 fw-semibold btn-primary-custom d-flex align-items-center justify-content-center gap-2"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            <span>Adding...</span>
                        </>
                    ) : (
                        <>
                            <BsPlusCircle size={20} />
                            Add Transaction
                        </>
                    )}
                </Button>
            </Form>
        </div>
    )
}

export default TransactionForm