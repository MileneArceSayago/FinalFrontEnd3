import { useContext } from "react";
import ThemeContext from "../context";

const ThemeToggleButton = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={handleChangeTheme}
      style={{ background: theme.background, color: theme.font }}
    >
      {theme.background === "black" ? "🌞" : "🌜"}
    </button>
  );
};

export default ThemeToggleButton;
