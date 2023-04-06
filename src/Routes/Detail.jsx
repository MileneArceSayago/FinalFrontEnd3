import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  
  const [dentist, setDentist] = useState([]);
  const params = useParams();

  const getDentists = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await res.json();
    console.log(data);
    setDentist(data);
  };

  useEffect(() => {
    getDentists();
  }, []);


  return (
    <>
      <h1>Detail Dentist id {dentist.name} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div>
        <p>Nombre: {dentist.name}</p>
        <p>Email: {dentist.email}</p>
        <p>Phone: {dentist.phone}</p>
        <p>Website: {dentist.website}</p>

      </div>
    
    
    </>
  )
}

export default Detail