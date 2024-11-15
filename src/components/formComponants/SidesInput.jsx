import { useEffect, useState } from "react";

const SidesInput = ({side, setSide}) => {

  const url = "https://la-taverne.ducompagnon.fr/api/classes";
  const [classes, setClasses] = useState([]);

  useEffect(() =>{
    fetchSides();
  },[])

  async function fetchSides(){

    try {

      const response = await fetch(url);

      if(!response.ok){
        throw new Error('Veuillez reessayer ...', response.status)
      }

      const data = await response.json();
      setClasses(data);

    } catch (error) {
      console.log("Verifiez l'api -> : ", error)
    }

  }

  return (
    <div className="">
        <label htmlFor="side" className="mb-2 block">Coté de la force : {" "}</label>
        <select 
          name="side"
          id="side"
          value={side}
          required
          onChange={(e)=>setSide(e.target.value)}
          className="border border-gray-300 mb-4 p-2 w-full"
        >
          <option value="">🔼Choisissez une force🔽</option>
          {
            classes.map((item) =>(
              <option key={item.id} value={item.side}>
                {" "}
                {item.side}
              </option>
            ))
          }
        </select>
    </div>
  )
}

export default SidesInput