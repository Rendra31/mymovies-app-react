import React from "react";

const Container = ({ children }) => {
  // =========
  // DARK MODE
  // =========

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
