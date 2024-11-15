import Statistiques from "./cardComponents/Statistiques";
import Buttons from "./Buttons";


// On fait appel aux props
const Card = ({caracter}) => {
  console.table(caracter)
  
  //D'abord creation d'un tableau avec les differents elements
  const allStats = [
    { stat: "Santé", value:caracter.health, unit: "PV" },
    { stat: "Magie", value: caracter.magic, unit: "PM" },
    { stat: "Puissance", value: caracter.power, unit: "ATK" }
  ]
  

  return (

    <div className="flex flex-col border-2 border-neutral-500 w-[250px] h-[400px] rounded-xl customShadow overflow-hidden">
      <div className="w-[250px] h[250px] overflow-hidden ">
        <img src={caracter.image} 
        alt="chevalier" 
        className="object-cover duration-300 hover:scale-105"
        />
      </div>
      <div className="p-2">
        <p className="text-xl text-center font-bold">{caracter.name}</p>
        <div className="flex flex-col">
        
         {/* On map() sur le tabeau pour afficher pour les afficher à l' écran */}
        {
          allStats.map((item, index) => (
            <Statistiques key={index} stat={item.stat} value={item.value} unit={item.unit}/>
          ))
        }

        </div>
        <div className="flex justify-between mt-2">
          {/* Importation des composants crées */}
          <Buttons color="bg-blue-500">Attaquer</Buttons>
          <Buttons color="bg-orange-500">Defendre</Buttons>
        </div>
      </div>
    </div>
  );
}

export default Card