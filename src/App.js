import Router from "./Router/index";
import GlobalStyle from "./Global";
import React, { useState, useEffect } from 'react';
import centralTheme from './Theme';

function App() {
  {/* Start D/L Mode */}
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
   {/* End D/L Mode */}

  return (
    <div style={{ background: centralTheme[theme].backgroundColor, color: centralTheme[theme].textColor }}>
    <GlobalStyle/>
    <Router/>
    <button style={{display:"none",margin:"auto",padding:"10px",background:"white",cursor:"pointer"}} onClick={toggleTheme}>D/L Mode</button>
    </div>
  );
}

export default App;
