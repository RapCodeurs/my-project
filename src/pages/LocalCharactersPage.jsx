import { useEffect, useState } from "react"
import Card from "../components/Card"


const LocalCharactersPage = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    fetchCharacters();
  }, [])

  function fetchCharacters(){

    setCharacters(JSON.parse(localStorage.getItem('characters')) || []);


  }

  return (
    <div>
      <h1 className="text-4xl text-center my-6 text-neutral-600">Personnages Locaux</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {
          characters.map((item) =>(
            <Card key={item.id} caracter={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default LocalCharactersPage