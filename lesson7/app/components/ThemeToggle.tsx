import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "theme";
type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "light";
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
}

function setTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY, theme);
}

const ThemeContext = createContext("toggle")
export function Toolbar() {
  return <ThemeToggle/>
}

export function ThemeToggle() {
   const [theme, setThemeState] = useState<Theme>("light");
   const [mounted, setMounted] = useState(false);
  // const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    setThemeState(getInitialTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    setTheme(theme);
  }, [theme, mounted]);

   const toggle = () => {
     setThemeState((t: string) => (t === "light" ? "dark" : "light"));
   };

  if (!mounted) {
    return (
      <div className="theme-toggle" aria-hidden>
        Toggle theme
      </div>
    );
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      // onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
function setThemeState(arg0: string) {
  throw new Error("Function not implemented.");
}

function setMounted(arg0: boolean) {
  throw new Error("Function not implemented.");
}

