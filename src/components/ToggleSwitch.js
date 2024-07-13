import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleSwitch = ({ darkMode, toggleMode }) => {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        checked={darkMode}
        onChange={toggleMode}
        id="darkModeSwitch"
      />
      <label className="form-check-label" htmlFor="darkModeSwitch">
        {darkMode ? <FaMoon /> : <FaSun />}
      </label>
    </div>
  );
};

export default ToggleSwitch;
