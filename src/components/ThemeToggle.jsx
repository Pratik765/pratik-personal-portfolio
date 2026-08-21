import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative p-2.5 rounded-2xl border transition-all duration-200 focus:outline-none backdrop-blur-md group ${
        isDark
          ? 'border-indigo-500/30 bg-slate-900/90 text-indigo-300 hover:border-indigo-400/60 hover:shadow-[0_0_12px_rgba(99,102,241,0.25)] focus:ring-2 focus:ring-indigo-500/40'
          : 'border-indigo-300/60 bg-white/90 text-indigo-600 hover:border-indigo-400 hover:shadow-[0_0_12px_rgba(99,102,241,0.2)] focus:ring-2 focus:ring-indigo-400/40'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ y: -16, opacity: 0, rotate: -45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 16, opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ y: -16, opacity: 0, rotate: -45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 16, opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="w-5 h-5 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
};
