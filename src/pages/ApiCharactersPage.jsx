import { useContext } from "react";
import Card from "../components/Card";
import { CharactersContext } from "../context/CharactersContext";


const AllCharacters = () => {

  //Appel de l'api 
  //const url = "https://la-taverne.ducompagnon.fr/api/personnages";


  //on appelle le useContext et le CharactersContext
  const {apiCharacters} = useContext(CharactersContext);


  return (
    <div>
      <h1 className="text-5xl text-center font-bold mt-8 mb-14">Tous les personnages de l'API</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {
          apiCharacters.map((item) =>(
            <Card key={item.id} caracter={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default AllCharacters