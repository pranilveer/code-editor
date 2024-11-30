import React, { useState } from "react";
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Editor from './components/Editor/Editor';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

function App() {
  const [language, setLanguage] = useState("JavaScript");
  const [theme, setTheme] = useState("light");

  return (
    <div className={`app ${theme}`}>
      <Sidebar setLanguage={setLanguage} />
      <div className="main">
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <Editor language={language} theme={theme} />
      </div>
    </div>
  );
}

export default App;
