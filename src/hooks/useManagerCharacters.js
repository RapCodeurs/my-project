import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";

export const useManagerCharacters = () => {
  const {
    hardCharacters,
    setHardCharacters,
    apiCharacters,
    setApiCharacters,
    localCharacters,
    setLocalCharacters,
    allCharacters,
    setAllCharacters,
  } = useContext(CharactersContext);

  function findCharacterById(id) {
    const sources = [
      { data: hardCharacters, from: "manualDatas" },
      { data: apiCharacters, from: "apiDatas" },
      { data: localCharacters, from: "LocalDatas" },
    ];

    for (const { data, from } of sources) {
      const character = data.find((item) => item.id === id);

      if (character) {
        return { character, from };
      }
    }
  }

  function deleteCharacterFromLocalStorage(id) {
    const storageCharacters =
      JSON.parse(localStorage.getItem("characters")) || [];
    const updatedStorageCharacters = storageCharacters.filter(
      (item) => item.id !== id
    );
    localStorage.setItem(
      "characters",
      JSON.stringify(updatedStorageCharacters)
    );
  }

  function deleteCharacters(id) {
    const characterData = findCharacterById(id);

    if (!characterData) {
      console.error("Personnages non trouvé");
      return;
    }

    const { character, from } = characterData;

    switch (from) {
      case "manualDatas": {
        const updatedCharacters = hardCharacters.filter(
          (item) => item.id !== id
        );
        setHardCharacters(updatedCharacters);
        break;
      }
      case "apiDatas": {
        const updatedCharacters = apiCharacters.filter(
          (item) => item.id !== id
        );
        setApiCharacters(updatedCharacters);
        break;
      }
      case "LocalDatas": {
        const updatedCharacters = localCharacters.filter(
          (item) => item.id !== id
        );
        setLocalCharacters(updatedCharacters);
        deleteCharacterFromLocalStorage(id);
        break;
      }
      default:
        console.error("Provenance inconnue pour le personnage, ", character);
    }
  }

  return { deleteCharacters };
};
