import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import NewsContext from "../context/news/NewsContext";

function ThemeBtn() {
  const { theme, dispatch } = useContext(NewsContext);

  const handleThemeChange = () => {
    dispatch({
      type: "CHANGE_THEME",
    });
  };

  return (
    <button
    onClick={handleThemeChange}
      className={
        theme
          ? "fixed bottom-10 left-10 bg-yellow-600 text-white p-3 rounded-full text-xl duration-200"
          : "fixed bottom-10 left-10 bg-black text-white p-3 rounded-full text-xl duration-200"
      }
    >
      {theme ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeBtn;
