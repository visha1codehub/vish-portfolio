// src/components/DarkModeToggle.jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-secondary"
      style={{
        width: '2.5rem',
        height: '2.5rem',
        padding: '0',
        borderRadius: '0.75rem',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span
        style={{
          color: isDarkMode ? 'var(--color-darkSecondary)' : 'var(--color-lightPrimary)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: 'scale(1)',
        }}
      >
        {isDarkMode ? (
          <FaSun className="w-4 h-4" />
        ) : (
          <FaMoon className="w-4 h-4" />
        )}
      </span>
    </button>
  );
};

export default DarkModeToggle;