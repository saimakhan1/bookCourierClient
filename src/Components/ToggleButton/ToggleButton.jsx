import React from "react";
import { Moon, Sun } from "lucide-react";

/**
 * A toggle switch for switching between light and dark themes.
 * @param {string} theme - current theme name ("light" or "dark")
 * @param {function} toggleTheme - function to toggle the theme
 */
const ToggleButton = ({ theme, toggleTheme }) => {
  return (
    <label className="flex cursor-pointer items-center gap-2 px-3 py-2 rounded-full bg-base-200 hover:bg-base-300 transition-colors">
      {/* Sun icon (light mode) */}
      <Sun
        className={`w-5 h-5 transition-all duration-300 ${
          theme === "dark" ? "opacity-40" : "text-yellow-500"
        }`}
      />

      {/* DaisyUI toggle switch */}
      <input
        type="checkbox"
        className="toggle theme-controller"
        value="dark"
        checked={theme === "dark"}
        onChange={(e) => toggleTheme(e.target.checked)}
      />

      {/* Moon icon (dark mode) */}
      <Moon
        className={`w-5 h-5 transition-all duration-300 ${
          theme === "dark" ? "text-indigo-400" : "opacity-40"
        }`}
      />
    </label>
  );
};

export default ToggleButton;
