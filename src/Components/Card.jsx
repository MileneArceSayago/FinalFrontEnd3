import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

const Card = ({ name, username, id, item}) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    localStorage.setItem(item.id, JSON.stringify(item));
    setIsFavorite(true);
  }

  const [character, setCharacter] = useState(undefined)
  const params = useParams()
  const [isFavorite, setIsFavorite] = useState(false);
 

  
  const getCharacter = async()=>{
      const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${params.id}`)
      const data = await res.json()
      setCharacter(data)
 }
 
 useEffect(()=>{
    getCharacter()
 }, [params])






 return (
  <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    
      
      <div>
      <Link to={`/detail/${id}`}>
        <h1>{name}</h1>
        <h2>{id} </h2>
        <h3>{username}</h3>
        <img src="../images/doctor.jpg" alt="doctor" width="100x" height="100px" />
      </Link>
      </div>
      <button onClick={addFav} className="favButton" disabled={isFavorite ? 'Added to favorites' : 'Add to favorites'}>Add fav</button>
  </div>
);
;

 };

 
 
export default Card;
