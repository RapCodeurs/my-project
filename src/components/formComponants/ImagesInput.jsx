import { useEffect, useState } from "react"

const ImagesInput = ({image, setImage}) => {

  const url = "https://la-taverne.ducompagnon.fr/api/images";
  const [img, setImg] = useState([]);

  useEffect(() =>{
    fetchImages();
  },[])

  async function fetchImages(){

    try {

      const response = await fetch(url);

      if(!response.ok){
        throw new Error('Veuillez reessayer ...', response.status)
      }

      const data = await response.json();
      console.log(data);
      setImg(data);

    } catch (error) {
      console.log("Verifiez l'api -> : ", error)
    }
  }



  return (
    <div className="">
      <label htmlFor="side" className="mb-2 block">Images: {" "}</label>
      <select 
        name="image"
        id="image"
        value={image}
        required
        onChange={(e)=>setImage(e.target.value)}
        className="border border-gray-300 mb-4 p-2 w-full"
      >
        <option value="">🔼Choisissez une image🔽</option>
        {
          img.map((item, index) =>(
            <option key={index} value={item.url}>
              {" "}
              {item.name}
            </option>
          ))
        }
      </select>
    </div>
  )
}

export default ImagesInput