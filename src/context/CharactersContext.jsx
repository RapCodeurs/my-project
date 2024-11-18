// Importons nos besoins

import { createContext, useEffect, useState } from "react";
import {
  addHardCharacters,
  addApiCharacters,
  addLocalCharacters,
} from "../hooks/useContextFunction";

// on initialise le context

export const CharactersContext = createContext();

// On va créer le fournisseur/distributeur encore appelé PROVIDER

export const CharactersContextProvider = ({ children }) => {
  // On appelle le useSate pour la mise en valeur
  const [hardCharacters, setHardCharacters] = useState([]);
  const [apiCharacters, setApiCharacters] = useState([]);
  const [localCharacters, setLocalCharacters] = useState([]);
  // Pour afficher tous les combattants sur une seule page
  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    //Ajoute des paramettres dans les fonctions importées
    addHardCharacters(setHardCharacters);
    addApiCharacters(setApiCharacters);
    addLocalCharacters(setLocalCharacters);
  }, []);

  //Pour mettre à jour s'il y'a une modification
  useEffect(() => {
    setAllCharacters([...hardCharacters, ...apiCharacters, ...localCharacters]);
  }, [hardCharacters, apiCharacters, localCharacters]);

  return (
    <CharactersContext.Provider
      value={{
        hardCharacters,
        setHardCharacters,
        apiCharacters,
        setApiCharacters,
        localCharacters,
        setLocalCharacters,
        allCharacters,
        setAllCharacters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
