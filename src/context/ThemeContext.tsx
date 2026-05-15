// src/context/ThemeContext.tsx
// ─────────────────────────────────────────────────────────────
// Wrap your <App /> with <ThemeProvider> in main.tsx
// Then call useTheme() anywhere to read/toggle the theme.
// ─────────────────────────────────────────────────────────────

import { createContext, useContext, useEffect, useState } from "react";


type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // 1. Respect previously saved preference
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved === "light" || saved === "dark") return saved;
    // 2. Fall back to OS/browser preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Stamp data-theme on <html> so every CSS var reacts instantly
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Convenience hook
export const useTheme = () => useContext(ThemeContext);