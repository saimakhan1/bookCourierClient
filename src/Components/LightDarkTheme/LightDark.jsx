import React from "react";
import ToggleButton from "../ToggleButton/ToggleButton.jsx";
import useTheme from "../../hooks/useTheme";

const LightDark = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav>
      {/* Option 1: Use the ToggleButton component */}
      <ToggleButton theme={theme} toggleTheme={toggleTheme} />
    </nav>
  );
};

export default LightDark;
