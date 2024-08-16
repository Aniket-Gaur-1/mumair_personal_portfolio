import React, { useState } from "react";
import "../styles/toggleButton.css";

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);

    if (!isToggled) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <button
      className={`toggle-button ${isToggled ? "on" : "off"}`}
      onClick={handleToggle}
    >
      {isToggled ? "☾" : "☼"}
    </button>
  );
};

export default ToggleButton;
