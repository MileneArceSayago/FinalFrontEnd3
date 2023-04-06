import { createContext, useState } from "react";
import { act } from "react-dom/test-utils";



const getFavsFromStorage = () => {
  const localData = localStorage.getItem("favs")
  return localData ? JSON.parse(localData) : []
}

const saveFavsFromStorage = (fav) =>{
  localStorage.setItem("favs",JSON.stringify(fav))
};

const reducer = (state, action) => {
  switch (action.type){
    case "add_fav":
      saveFavsFromStorage([...state, action.payload])
      return[...state, action.payload]
    default:
      return state
    }
}

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};
