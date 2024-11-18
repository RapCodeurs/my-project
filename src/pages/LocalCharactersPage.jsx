import { useContext} from "react"
import { CharactersContext } from "../context/CharactersContext";
import Card from "../components/Card"
import { Link } from "react-router-dom";


const LocalCharactersPage = () => {

  //On appelle le useContext et ChararctersContext
  const {localCharacters} = useContext(CharactersContext);
  console.log(localCharacters);

  return (
    <div>
      <h1 className="text-4xl text-center my-6 text-neutral-600">Personnages Locaux</h1>

      <div className="flex justify-center my-8">
        <Link to='/creer-un-personnage'>
          <button className="px-4 py-2 direction-300 border-2 border-neutral-800 bg-neutral-200 rounded-xl hover:bg-neutral-300">Créer un personnage
          </button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Et on map sur le localCharacters */}
        {
          localCharacters.map((item) =>(
            <Card key={item.id} caracter={item}/>
          ))
        }
      </div>
    </div>
  )
}


export default LocalCharactersPage;