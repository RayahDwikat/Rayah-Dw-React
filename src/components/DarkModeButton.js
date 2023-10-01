import React, { useState } from "react";

export const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    updateCSSVariables(!isDarkMode);
  };

  const updateCSSVariables = (isDark) => {
    const root = document.documentElement;

    if (isDark) {
      root.style.setProperty("--bg_default", "#1A1A1A");
      root.style.setProperty("--bg_body", "#282828");
      root.style.setProperty("--lines-color", "#000000");
      root.style.setProperty("--body-text", "#EDEDED");
    } else {
      root.style.removeProperty("--bg_default");
      root.style.removeProperty("--bg_body");
      root.style.removeProperty("--lines-color");
      root.style.removeProperty("--body-text");
    }
  };

  return (
    <button
      id="dark-mode"
      className="icon-button"
      onClick={toggleDarkMode}
    >
      <ion-icon
        id="moon"
        className="nav-icon"
        name={isDarkMode ? "sunny-outline" : "moon-outline"}
      ></ion-icon>
      <span className="nav-button-text">Dark Mode</span>
    </button>
  );
};

