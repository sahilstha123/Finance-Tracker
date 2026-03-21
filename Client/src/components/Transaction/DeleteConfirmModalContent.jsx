import React from 'react'
import Button from 'react-bootstrap/Button'
import { FaExclamationTriangle } from 'react-icons/fa'
import { useUserContext } from '../../context/userContext'

const DeleteConfirmModalContent = () => {
    const { idsToConfirm, toggleModal } = useUserContext()

    return (
        <div className="text-center py-3">
            <div className="mb-4">
                <FaExclamationTriangle className="text-danger" style={{ fontSize: '4rem' }} />
            </div>
            <h3 className="fw-bold mb-3">Delete Transaction?</h3>
            <p className="text-muted mb-4 px-4">
                Are you sure you want to delete <strong>{idsToConfirm.length}</strong> transaction(s)?
                This action is permanent and cannot be undone.
            </p>

            <div className="d-flex justify-content-center gap-3">
                <Button
                    variant="light"
                    className="px-4 py-2 fw-bold text-slate-600 rounded-pill shadow-sm"
                    onClick={() => toggleModal(false)}
                >
                    No, Keep It
                </Button>
                <Button
                    variant="danger"
                    className="px-4 py-2 fw-bold rounded-pill shadow-sm"
                    onClick={() => {
                        toggleModal(false)
                    }}
                >
                    Yes, Delete
                </Button>
            </div>
        </div>
    )
}

export default DeleteConfirmModalContent
