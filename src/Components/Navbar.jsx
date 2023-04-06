import React from 'react'
import ThemeContext from "../context";
import { useContext } from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <nav>
      <button>
        <Link to="/home">Home</Link>
      </button>
      <button>
        <Link to="/contact">Contacto</Link>
      </button>
      <button>
        <Link to="/favs">Favs</Link>
      </button>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <ThemeToggleButton />
    </nav>
  )
}

export default Navbar