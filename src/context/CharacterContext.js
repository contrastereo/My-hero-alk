import React, { useState, useEffect, createContext } from "react";

export const characterContext = createContext();

export const CharProvider = (props) => {
  //     //Loading Storage
  const loadStorage = () => {
    if (!window.localStorage.getItem("myteam")) {
      return [];
    } else {
      return JSON.parse(window.localStorage.getItem("myteam"));
    }
  };

  const [myTeam, setMyTeam] = useState(loadStorage);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    window.localStorage.setItem("myteam", JSON.stringify(myTeam));
  }, [myTeam]);


  return (
    <characterContext.Provider
      value={{ myTeam, setMyTeam, searchResults, setSearchResults }}
    >
      {props.children}
    </characterContext.Provider>
  );
};
