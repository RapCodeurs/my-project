import { useState } from "react"
import SidesInput from "../components/formComponants/SidesInput";
import ImagesInput from "../components/formComponants/ImagesInput";
import ElementsInput from "../components/formComponants/ElementsInput";
import { toast } from "sonner";

const CreateCharacter = () => {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [health, setHealth] = useState("");
  const [magic, setMagic] = useState("");
  const [power, setPower] = useState("");
  const [side, setSide] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    const newCharacter = {name, image, health: parseInt(health), magic: parseInt(magic), power: parseInt(power), side};


    if(newCharacter.name.length < 3) {
      toast.error('Erreur le nom doit supperieur à 3 lettres');
      return;
    }
    
    console.log(newCharacter);

    const oldCharacters = JSON.parse(localStorage.getItem("characters")) || [];
    const oldCharactersLength = oldCharacters.length;

    oldCharacters.push(newCharacter);

    localStorage.setItem("characters", JSON.stringify(oldCharacters))
    const newOldCharactersLength = oldCharacters.length;

    if( newOldCharactersLength > oldCharactersLength){
      toast.success("Personnage crée avec succes")
    }else{
      toast.error('Erreur lors de la création du personnage')
    }

    setName("");
    setImage("");
    setMagic("");
    setPower("");
    setSide("");
    setHealth("");


  }

  return (
    <div className="">
      <h1 className="text-4xl text-center mb-6 text-neutral-600">Création d'un personnage</h1>

      <form 
      onSubmit={(e) => handleSubmit(e)}
      className="p-4 border border-gray-300 bg-neutral-200 rounded place-self-center w-[500px]">

        <ElementsInput constante={name} title="Nom" type="text" callback={setName}/>

        <ImagesInput image={image} setImage={setImage}/>

        <ElementsInput constante={health} title="health" type="text" callback={setHealth}/>

        <ElementsInput constante={magic} title="magic" type="text" callback={setMagic}/>

        <ElementsInput constante={power} title="power" type="text" callback={setPower}/>

        <SidesInput side={side} setSide={setSide}/>

        <button type="submit" className="bg-blue-500 text-white hover:opacity-90 duration-300 rounded p-2">Créer le personnage</button>
      </form>
    </div>
  )
}

export default CreateCharacter