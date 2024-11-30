import React, { useState } from "react";
import "./Sidebar.css";

const languages = [
  { name: "JavaScript", icon: "🟨" },
  { name: "Python", icon: "🐍" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Go", icon: "🐹" },
  { name: "PHP", icon: "💻" },
  { name: "Swift", icon: "🍎" },
  { name: "Rust", icon: "🦀" },
  { name: "C/C++", icon: "🔧" },
];

function Sidebar({ setLanguage }) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleButtonClick = (lang) => {
    setLanguage(lang);
    setSelectedLanguage(lang);
  };

  return (
    <div className="sidebar">
      {languages.map((lang) => (
        <button
          key={lang.name}
          onClick={() => handleButtonClick(lang.name)}
          className={lang.name === selectedLanguage ? "selected" : ""}
        >
          {lang.icon} {lang.name}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
