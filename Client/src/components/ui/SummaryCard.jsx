import React from 'react';
import './SummaryCard.css';

const SummaryCard = ({ title, amount, variant = 'primary' }) => {
    return (
        <div className={`summary-card ${variant}`}>
            <div className="card-content text-center w-100">
                <p className="card-label mb-2">{title}</p>
                <h2 className="card-amount">
                    {typeof amount === 'number' ? `$${amount.toLocaleString()}` : amount}
                </h2>
            </div>
        </div>
    );
};

export default SummaryCard;
