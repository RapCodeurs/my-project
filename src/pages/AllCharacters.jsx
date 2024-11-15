import { useEffect, useState } from "react";
import Card from "../components/Card";


const AllCharacters = () => {

  //Appel de l'api 
  const url = "https://la-taverne.ducompagnon.fr/api/personnages";

  // Appel du useState
  const [characters, setCharacters] = useState([]);


  // L'appel du useEffect pour un rendu unique de la page
  useEffect(()=>{
    fecthCaracters();
  }, [])

  const pathImg = "/src/assets/images/personnages/";


  async function fecthCaracters(){
    try {

      const response = await fetch(url);
      if(!response.ok){
        throw new Error(`Probleme de connexion ${response.status}`)
      }
      
      const data = await response.json();

      console.table(data);
      // appel de la methode setCharacters
      setCharacters(data);

      const caractersWithPathImg = data.map((item) => ({
        ...item,
        image: `${pathImg}${item.image}`
      }))

      setCharacters(caractersWithPathImg);
      
    } catch (error) {
      console.log('Verifiew votre url ->', error)
    }
  }


  return (
    <div>
      <h1 className="text-5xl text-center font-bold mt-8 mb-14">Tous les personnages</h1>
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

export default AllCharacters