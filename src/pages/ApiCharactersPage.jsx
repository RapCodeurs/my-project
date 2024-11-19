import { useContext } from "react";
import Card from "../components/Card";
import { CharactersContext } from "../context/CharactersContext";
import { addFetchCharacters } from "../hooks/useContextFunction";

const AllCharacters = () => {
  //Appel de l'api
  //const url = "https://la-taverne.ducompagnon.fr/api/personnages";

  //on appelle le useContext et le CharactersContext
  const { apiCharacters, setApiCharacters } = useContext(CharactersContext);

  return (
    <div>
      <h1 className="text-5xl text-center font-bold mt-8 mb-14">
        Tous les personnages de l'API
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {apiCharacters.map((item) => (
          <Card key={item.id} caracter={item} />
        ))}
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={() => addFetchCharacters(setApiCharacters)}
          className="py-4 px-2 my-10 rounded-xl duration-300 bg-blue-200 hover:bg-blue-300 border-blue-800"
        >
          Rappeler tous les combattants de l'API
        </button>
      </div>
    </div>
  );
};

export default AllCharacters;
