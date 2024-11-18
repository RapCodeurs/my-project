import Statistiques from "./cardComponents/Statistiques";
import Buttons from "./Buttons";
import { useManagerCharacters } from "../hooks/useManagerCharacters";
import { Link } from "react-router-dom";

// On fait appel aux props
const Card = ({ caracter }) => {
  const { deleteCharacters } = useManagerCharacters();
  //console.table(caracter)

  //D'abord creation d'un tableau avec les differents elements
  const allStats = [
    { stat: "Santé", value: caracter.health, unit: "PV" },
    { stat: "Magie", value: caracter.magic, unit: "PM" },
    { stat: "Puissance", value: caracter.power, unit: "ATK" },
  ];

  return (
    <div
      className={`flex flex-col border-2 border-neutral-500 w-[250px] h-[400px] rounded-xl customShadow overflow-hidden ${caracter.side}Shadow`}
    >
      <div className="w-[250px] h[250px] overflow-hidden ">
        <img
          src={caracter.image}
          alt="chevalier"
          className="object-cover duration-300 hover:scale-105"
        />
      </div>
      <div className="p-2">
        <div className="flex justify-between items-center">
          <div className="w-6"></div>
          {/* Juste pour center */}
          <p className="text-xl text-center font-bold">{caracter.name}</p>
          <p className="text-xs text-gray-400 opacity-80">{caracter.from}</p>
        </div>
        <div className="flex flex-col">
          {/* On map() sur le tabeau pour afficher pour les afficher à l' écran */}
          {allStats.map((item, index) => (
            <Statistiques
              key={index}
              stat={item.stat}
              value={item.value}
              unit={item.unit}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {/* Importation des composants crées */}
          {caracter.from === "LocalDatas" ? (
            <Link to={`/modifier-personnage/${caracter.id}`}>
              <Buttons color="bg-blue-500">Modifier</Buttons>
            </Link>
          ) : (
            <Buttons color="bg-blue-500 cursor-not-allowed">
              Non modifiable
            </Buttons>
          )}

          <Buttons
            color="bg-red-600"
            onClick={() => deleteCharacters(caracter.id)}
          >
            Supprimer
          </Buttons>
        </div>
      </div>
    </div>
  );
};

export default Card;
