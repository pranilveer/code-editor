import React from "react";
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
  return (
    <div className="sidebar">
      {languages.map((lang) => (
        <button key={lang.name} onClick={() => setLanguage(lang.name)}>
          {lang.icon} {lang.name}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
