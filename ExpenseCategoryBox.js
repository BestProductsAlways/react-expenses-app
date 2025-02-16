import './ExpenseCategoryBox.css';

import React, { useState } from 'react';

function ExpenseCategoryBox({ label, maxBudget }) {
    const [progress, setProgress] = useState(0);

    // Calculate the progress bar color and overlay based on the progress value
    let progressBarColor = '#2ecc71';
    let overlayColor = 'rgba(231, 76, 60, 0.5)'; // Semi-transparent red
    if (progress > 50) {
        progressBarColor = '#f39c12';
    }
    if (progress > 90) {
        progressBarColor = '#e74c3c';
        overlayColor = 'rgba(231, 76, 60, 0.8)'; // Darker red overlay
    }

    const handleAddProgress = () => {
        if (progress < 100) {
            setProgress(prevProgress => prevProgress + 10);
        }
    };

    const message = progress >= 100 ? "YOU HAVE REACHED MAXIMUM AMOUNT OF BUDGET" : "";

    return (
        <div className="category-box" style={{ borderColor: progressBarColor }}>
            {progress >= 100 && (
                <div className="overlay" style={{ backgroundColor: overlayColor }}></div>
            )}
            <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: progressBarColor }}></div>
            <div className="message">{message}</div>
            <div className="label">{label}</div>
            <button className="add-button" onClick={handleAddProgress}>ADD</button>
        </div>
    );
}

export default ExpenseCategoryBox;


   