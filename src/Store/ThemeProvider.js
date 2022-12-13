import { createContext } from "react";
import { useState } from "react";
export const themeCtx = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <themeCtx.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeCtx.Provider>
  );
}

export default ThemeProvider;
