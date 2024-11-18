import { useContext, useEffect } from "react";
import Card from "../components/Card"
// Import useContext et le context cree

import { CharactersContext } from "../context/CharactersContext";

const HomePage = () => {

  //On appelle la logique
  //const {valeurTest, setValuerTest, doubleValeurText} = useContext(CharactersContext)


   // Affiche les cards sur l'ecran 
  //D'abord creation d'un tableau
  const {hardCharacters} = useContext(CharactersContext);

  // useEffect(()=>{
  //   console.log(hardCharacters)
  // }, [hardCharacters])

   
  return (
    <>
      <h1 className="font-bold text-blue-900 place-self-center rounded-xl bg-neutral-300 px-20 py-5 w-fit m-10">Mon projet REACT</h1>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {/* On map() sur le tabeau pour afficher pour les afficher à l' écran */}
          {
            hardCharacters.map((items, index) => (
              <Card key={index} caracter={items}/>
            ))
          }
        </div>
    </>
  )
}

export default HomePage