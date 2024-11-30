import React from "react";
import Switch from "react-switch";
import "./ThemeToggle.css"

function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="theme-toggle">
      <span>🌞</span>
      <Switch
        onChange={(checked) => setTheme(checked ? "dark" : "light")}
        checked={theme === "dark"}
        offColor="#bbb"
        onColor="#000"
        checkedIcon={false}
        uncheckedIcon={false}
      />
      <span>🌙</span>
    </div>
  );
}

export default ThemeToggle;