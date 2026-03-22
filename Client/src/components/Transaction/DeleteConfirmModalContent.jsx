import React from 'react'
import Button from 'react-bootstrap/Button'
import { FaExclamationTriangle } from 'react-icons/fa'
import { useUserContext } from '../../context/userContext'

import "./DeleteConfirmModalContent.css";

const DeleteConfirmModalContent = () => {
    const { toggleModal, handleOnDelete, setIdsToDelete } = useUserContext()

    return (
        <div className="delete-modal-container text-center">
            <div className="delete-icon-wrapper">
                <FaExclamationTriangle className="text-danger delete-icon" />
            </div>
            <h3 className="delete-title">Delete Transaction?</h3>
            <p className="delete-text">
                Are you sure you want to delete this transaction?
                This action is permanent and cannot be undone.
            </p>

            <div className="delete-actions">
                <Button
                    variant="light"
                    className="btn-modal text-slate-600"
                    onClick={() => {
                        setIdsToDelete([]);
                        toggleModal(false);
                    }}
                >
                    No, Keep It
                </Button>
                <Button
                    variant="danger"
                    className="btn-modal"
                    onClick={handleOnDelete}
                >
                    Yes, Delete
                </Button>
            </div>
        </div>
    )
}

export default DeleteConfirmModalContent
