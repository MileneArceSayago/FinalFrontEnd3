import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar";
import ThemeContext from "./context";
import { Outlet, useNavigate } from "react-router-dom";


//cambiar
export const themes = {
  light: {
    font: "black",
    background: "white",
  },
  dark: {
    font: "white",
    background: "black",
  },
};


function App() {
  const localValue = JSON.parse(localStorage.getItem("theme"));

  const [theme, setTheme] = useState(localValue ?? themes.light);

  // Funcion que altera el estado del tema
  const handleChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const navigate = useNavigate();

  return (
      <div className="App">
         <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
            <Layout>
              <button onClick={() => navigate(-1)}>Back</button>
              <Navbar/>
              <Outlet/>
              <Footer/>
            </Layout>
          </ThemeContext.Provider>
      </div>
  );
}

export default App;
