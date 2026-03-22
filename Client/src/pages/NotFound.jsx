import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { FaHome, FaQuestionCircle } from 'react-icons/fa'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notfound-container">
            {/* Background animated shapes */}
            <div className="bg-shape shape-1"></div>
            <div className="bg-shape shape-2"></div>

            <div className="notfound-content">
                <div className="notfound-404">
                    <span>4</span>
                    <span>0</span>
                    <span>4</span>
                </div>

                <h2 className="notfound-title">Oops! Page Not Found</h2>
                <p className="notfound-text">
                    The page you're looking for doesn't exist or has been moved.
                    Don't worry, you can always go back to the dashboard.
                </p>

                <Link to="/dashboard">
                    <Button variant="success" className="notfound-btn d-flex align-items-center gap-2 mx-auto">
                        <FaHome size={20} />
                        Back to Dashboard
                    </Button>
                </Link>

                <div className="mt-4 text-muted small">
                    <FaQuestionCircle className="me-1" />
                    Need help? Contact support.
                </div>
            </div>
        </div>
    )
}

export default NotFound
