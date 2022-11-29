import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";
import { ThemeContext } from "./utils/Context";
import Navbar from "./components/Navbar";

const App = () => {
  const [isLight, setIslight] = useState(true);
  const theme = useMemo(() => ({ isLight, setIslight }), [isLight]);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isLight]);

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Navbar
          backdropBlur="backdrop-blur-md bg-slate-400/80"
          positionNavbar="fixed"
          cat1={"Thriller"}
          cat2={"Horror"}
          cat3={"Comedy"}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
