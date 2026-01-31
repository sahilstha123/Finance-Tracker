import React, { useEffect, useState } from "react";
import financialTips from "../../utils/financialTips.js";
import "./financialTips.css"
const FinancialTips = () => {
  const [tipIndex, setTipIndex] = useState(0);
  const [slideUp, setSlideUp] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * financialTips.length);
      setTipIndex(randomIndex);
      setSlideUp(prev => !prev);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const tip = financialTips[tipIndex];

  return (
    <div
      key={tipIndex}
      className={`financial-tips ${slideUp ? "slide-up" : "slide-down"} p-4 text-white`}
    >
      <p className="fw-bold mb-1">"{tip.quote}"</p>
      <strong>- {tip.author}</strong>
    </div>
  );
};

export default FinancialTips;
