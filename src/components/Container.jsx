import React from "react";
import Toggle from "./Toggle";
import { ThemeContext } from "../utils/Context";
import { useContext } from "react";

const Container = ({ children }) => {
  // =========
  // DARK MODE
  // =========
  const { isLight, setIslight } = useContext(ThemeContext);
  const handleClick = () => {
    setIslight((e) => !e);
  };
  {
    return (
      <>
        <div className="w-full h-full bg-gradient-to-r from-sky-100 via-purple-100 to-orange-100 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-600 dark:to-alta-space">
          {children}
        </div>
      </>
    );
  }
};

export default Container;
