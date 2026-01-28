import React, { useEffect, useState } from 'react'
import financialTips from "../utils/financialTips.js"
const FinancialTips = () => {
    const [tip, setTips] = useState(financialTips[0]);

    useEffect(() => {
       const intervalId =  setInterval(() => {
            const randomIndex = Math.floor(Math.random() * financialTips.length)
            setTips(financialTips[randomIndex])

        }, 3000)
        return ()=>clearInterval(intervalId)
    }, [])
    return (
        <div>
            {tip && (
                <>
                    <h5>{tip.tip}</h5>
                    <p className='fw-bolder mb-0'>"{tip.quote}"</p>
                    <strong>-{tip.author}</strong>
                </>
            )}
        </div>
    )
}

export default FinancialTips