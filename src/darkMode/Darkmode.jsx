import React from "react";
import useLocalStorage from "./useLocalStorage";

const Darkmode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  console.log(theme);

  return (
    <div className={` text-center p-3  ${theme === "dark" ? "bg-black" : ""}`}>
      <h1 className={` ${theme === "dark" ? "text-white" : ""}`}>
        hello world
      </h1>

      <button
        onClick={handleToggleTheme}
        className="border-none rounded-md w-28"
      >
        change theme
      </button>
    </div>
  );
};

export default Darkmode;
