import Statistiques from "./cardComponents/Statistiques";


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
        <img src={`./src/assets/images/personnages/${caracter.image}`} alt="chevalier" className="object-cover duration-300 hover:scale-105"
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
          <button className="bg-blue-500 py-1 px-2 border-2 border-neutral-400 rounded-xl hover:border-neutral-700 hover:opacity-90 duration-300">
            Attaquer
          </button>
          <button className="bg-orange-500 py-1 px-2 border-2 border-neutral-400 rounded-xl hover:border-neutral-700 hover:opacity-90 duration-300">
            Defendre
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card