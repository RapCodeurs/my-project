import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useManagerCharacters } from "../hooks/useManagerCharacters";
import ElementsInput from "../components/formComponants/ElementsInput";
import ImagesInput from "../components/formComponants/ImagesInput";
import SidesInput from "../components/formComponants/SidesInput";
import { toast } from "sonner";

function ModifyCharactersPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  //console.log(id);

  const { findCharacterById, updateCharacter } = useManagerCharacters();
  //console.log(findCharacterById);

  const [character, setCharacter] = useState({
    name: "",
    image: "",
    health: "",
    magic: "",
    power: "",
    side: "",
  });

  useEffect(() => {
    const foundCharacter = findCharacterById(id);
    console.log("foundCharacter :", foundCharacter);

    if (!foundCharacter) {
      toast.error("Personnage non trouvé");
      navigate("/");
    } else {
      setCharacter(foundCharacter.character);
    }
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setCharacter((prev) => ({ ...prev, [name]: value }));
  }

  function handleSave(e) {
    e.preventDefault();

    updateCharacter(character.id, character);
    toast.success("Personnage modifié avec succes");
    navigate("/local-personnage");
  }

  return (
    <div>
      <h1 className="text-5xl text-center font-bold mt-8 mb-14">
        Modifions l'id : {character.name}
      </h1>

      <form
        onSubmit={(e) => handleSave(e)}
        className="p-4 border border-gray-300 bg-neutral-200 rounded place-self-center w-[500px]"
      >
        <ElementsInput
          constante={character.name}
          title="Nom"
          type="text"
          callback={(value) =>
            handleChange({ target: { name: "name", value } })
          }
        />

        <ImagesInput
          image={character.image}
          setImage={(value) =>
            handleChange({ target: { name: "image", value } })
          }
        />

        <ElementsInput
          constante={character.health}
          title="health"
          type="text"
          callback={(value) =>
            handleChange({ target: { name: "health", value } })
          }
        />

        <ElementsInput
          constante={character.magic}
          title="magic"
          type="text"
          callback={(value) =>
            handleChange({ target: { name: "magic", value } })
          }
        />

        <ElementsInput
          constante={character.power}
          title="power"
          type="text"
          callback={(value) =>
            handleChange({ target: { name: "power", value } })
          }
        />

        <SidesInput
          side={character.side}
          setSide={(value) => handleChange({ target: { name: "side", value } })}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white hover:opacity-90 duration-300 rounded p-2"
        >
          Modifier le personnage
        </button>
      </form>
    </div>
  );
}

export default ModifyCharactersPage;
