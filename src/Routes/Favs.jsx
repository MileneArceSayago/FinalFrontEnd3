import React from "react";
import Card from "../Components/Card";
import { useState } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {


  const getFavorites = () => {
    const favoriteItems = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = JSON.parse(localStorage.getItem(key));
      favoriteItems.push(item);
    }
    return favoriteItems;
  };

  const [favorites, setFavorites] = useState(getFavorites());



  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        
      <ul>
        {favorites.map((fav) => (
          <li key={fav.id}>{fav.name}</li>
        ))}
      </ul>

      </div>
    </>
  );
};

export default Favs;
