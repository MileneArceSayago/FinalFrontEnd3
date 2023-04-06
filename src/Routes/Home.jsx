import Card from '../Components/Card'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);

  const getDentists = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
    setDentists(data);
  };

  useEffect(() => {
    getDentists();
  }, []);


  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */
                    <div>
                    <h1>Dentists List</h1>
                        {dentists.length
                          ? dentists.map((dentist) => (
                                <div key={dentist.id}>
                                  <Card name={dentist.name} username={dentist.username} id={dentist.id} />
                                </div>
                            ))
                          : null}
                  </div>
  }
      </div>
    </main>
  )
}

export default Home