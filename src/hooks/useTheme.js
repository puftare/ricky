import { useState, useEffect } from "react";

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode.toString());
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return { isDarkMode, toggleTheme };
};

export default useTheme;
