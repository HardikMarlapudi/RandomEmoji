import React, { useState } from 'react';
import '../styles/toggle.css';

function Toggle() {

    const [darkMode, setDarkMode] = useState(true);

    if(darkMode) {
        document.documentElement.classList.add("dark-mode");
    } else {
        document.documentElement.classList.remove("dark-mode");
    }


    return (
        <div className={darkMode ? "dark-mode" : ""}>
        <button id="toggle-button" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "🌙" : "☀️"}
        </button>
        
        </div>
    )
}

export default Toggle;
