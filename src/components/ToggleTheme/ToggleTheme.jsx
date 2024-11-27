import useTheme from "../../hooks/useTheme";
import { FaSun, FaMoon } from "react-icons/fa";

const ToggleTheme = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      {isDarkMode ? (
        <FaSun
          size={74}
          color="white"
          onClick={toggleTheme}
          className="icons"
        />
      ) : (
        <FaMoon
          size={74}
          color="black"
          onClick={toggleTheme}
          className="icons"
        />
      )}
    </>
  );
};

export default ToggleTheme;
