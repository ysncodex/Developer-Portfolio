import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './themeSwitcher.css';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setIsDark(initialTheme === 'dark');
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      className={`theme-toggle ${isDark ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDark ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
    </button>
  );
};

export default ThemeSwitcher;