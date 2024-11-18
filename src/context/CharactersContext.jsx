// Importons nos besoins

import { createContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";

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

  const pathImg = "/src/assets/images/personnages/";

  function addHardCharacters() {
    setHardCharacters([
      {
        id: nanoid(6),
        image: pathImg + "heros.jpg",
        name: "Heros",
        health: 50,
        magic: 40,
        power: 30,
        from: "manualDatas",
        side: "ligth",
      },
      {
        id: nanoid(6),
        image: pathImg + "magicien_glace.jpg",
        name: "Magicien",
        health: 60,
        magic: 40,
        power: 50,
        from: "manualDatas",
        side: "ligth",
      },
      {
        id: nanoid(6),
        image: pathImg + "magicienne.jpg",
        name: "Magicienne",
        health: 55,
        magic: 44,
        power: 32,
        from: "manualDatas",
        side: "ligth",
      },
      {
        id: nanoid(6),
        image: pathImg + "orc.jpg",
        name: "Orc",
        health: 40,
        magic: 20,
        power: 50,
        from: "manualDatas",
        side: "ligth",
      },
      {
        id: nanoid(6),
        image: pathImg + "sorcier.jpg",
        name: "Sorcier",
        health: 40,
        magic: 35,
        power: 25,
        from: "manualDatas",
        side: "ligth",
      },
      {
        id: nanoid(6),
        image: pathImg + "sorciere_feu.jpg",
        name: "Sorciere",
        health: 50,
        magic: 30,
        power: 22,
        from: "manualDatas",
        side: "ligth",
      },
      {
        id: nanoid(6),
        image: pathImg + "elfe.jpg",
        name: "Elfe",
        health: 40,
        magic: 50,
        power: 70,
        from: "manualDatas",
        side: "ligth",
      },
      {
        id: nanoid(6),
        image: pathImg + "dragon.jpg",
        name: "Dragon",
        health: 12,
        magic: 48,
        power: 29,
        from: "manualDatas",
        side: "ligth",
      },
      {
        id: nanoid(6),
        image: pathImg + "dragon_epee.jpg",
        name: "Dragon Epee",
        health: 50,
        magic: 30,
        power: 22,
        from: "manualDatas",
        side: "ligth",
      },
      {
        id: nanoid(6),
        image: pathImg + "chevalier.jpg",
        name: "Chevalier",
        health: 23,
        magic: 13,
        power: 27,
        from: "manualDatas",
        side: "ligth",
      },
      {
        id: nanoid(6),
        image: pathImg + "chevalier_feu.jpg",
        name: "Chevalier Feu",
        health: 25,
        magic: 35,
        power: 24,
        from: "manualDatas",
        side: "ligth",
      },
    ]);
  }

  async function addApiCharacters() {
    const url = "https://la-taverne.ducompagnon.fr/api/personnages";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Probleme de connexion ${response.status}`);
      }

      const data = await response.json();

      // appel de la methode setApiCharacters
      setApiCharacters(data);

      const caractersWithPathImg = data.map((item) => ({
        ...item,
        image: `${pathImg}${item.image}`,
        from: "apiDatas",
        side: item.side_name,
        id: nanoid(6),
      }));

      setApiCharacters(caractersWithPathImg);
    } catch (error) {
      console.log("Verifiew votre url ->", error);
    }
  }

  function addLocalCharacters() {
    setLocalCharacters(JSON.parse(localStorage.getItem("characters")) || []);
  }

  useEffect(() => {
    addHardCharacters();
    addApiCharacters();
    addLocalCharacters();
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
