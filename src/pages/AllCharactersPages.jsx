import { useContext} from 'react';
import Card from '../components/Card';
import { CharactersContext } from '../context/CharactersContext';





function AllCharactersPages() {

  const {allCharacters} = useContext(CharactersContext);

  console.log(allCharacters);


  return (
    <div>
      <h1 className="text-5xl text-center font-bold mt-8 mb-14">Tous nos combattants</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {
          allCharacters.map((item) =>(
            <Card key={item.id} caracter={item}/>
          ))
        }
      </div>

    </div>
  )
}

export default AllCharactersPages