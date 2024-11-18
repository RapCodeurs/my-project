import { useState } from "react"


const Statistiques = ({stat, value, unit}) => {

  //Rendons dynamique la valeur quand on clique 

  const [statValue, setStatValue] = useState(value);

  //console.log(stat)
  return (
    <div className="flex justify-between">
            <p className="font-bold">{stat} :</p>
            <div className="flex">
              <div 
              onClick={()=> setStatValue(statValue - 2)}
              className="cursor-pointer">🔽</div>
              <p>{statValue} {unit}</p>
              <div 
              onClick={()=> setStatValue(statValue + 2)}
              className="cursor-pointer">🔼</div>
            </div>
          </div>
  )
}

export default Statistiques