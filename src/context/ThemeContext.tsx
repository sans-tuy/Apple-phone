import { createContext, PropsWithChildren, useState } from "react";

// eslint-disable-next-line import/prefer-default-export
export const ThemeContext = createContext({
  theme: "light",
  handleToggleTheme: () => {},
});

export function ThemeProvider(props: PropsWithChildren) {
  const { children } = props;
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => {
    setTheme("dark");
    if (theme === "light") {
      setTheme("dark");
    }
    if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
