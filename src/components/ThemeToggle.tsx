import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const ThemeToggle: React.FC = () => {
  const { theme, isDark, toggleTheme } = useDarkMode();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-5 w-5" />;
      case 'dark':
        return <Moon className="h-5 w-5" />;
      case 'system':
        return <Monitor className="h-5 w-5" />;
      default:
        return <Sun className="h-5 w-5" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Switch to dark mode';
      case 'dark':
        return 'Switch to system mode';
      case 'system':
        return 'Switch to light mode';
      default:
        return 'Toggle theme';
    }
  };

  const getThemeText = () => {
    switch (theme) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'system':
        return 'Auto';
      default:
        return 'Light';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        relative flex items-center space-x-2 px-3 py-2 rounded-lg
        bg-gray-100 hover:bg-gray-200 
        dark:bg-gray-800 dark:hover:bg-gray-700
        text-gray-700 dark:text-gray-300
        border border-gray-200 dark:border-gray-600
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
        dark:focus:ring-offset-gray-900
        group
      "
      aria-label={getLabel()}
      title={getLabel()}
    >
      <div className="transition-transform duration-300 group-hover:scale-110">
        {getIcon()}
      </div>
      <span className="text-sm font-medium hidden sm:inline">
        {getThemeText()}
      </span>
      
      {/* Visual indicator for current theme */}
      <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </button>
  );
};

export default ThemeToggle;