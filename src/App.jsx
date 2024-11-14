import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


function App() {

  // Affiche les cards sur l'ecran 
  //D'abord creation d'un tableau
  const allCaracters = [
    {image : "heros.jpg", name: "Heros", health: 50, magic: 40, power: 30},
    {image : "magicien_glace.jpg", name: "Magicien", health: 60, magic: 40, power: 50},
    {image : "magicienne.jpg", name: "Magicienne", health: 55, magic: 44, power: 32},
    {image : "orc.jpg", name: "Orc", health: 40, magic: 20, power: 50},
    {image : "sorcier.jpg", name: "Sorcier", health: 40, magic: 35, power: 25},
    {image : "sorciere_feu.jpg", name: "Sorciere", health: 50, magic: 30, power: 22},
    {image : "elfe.jpg", name: "Elfe", health: 40, magic: 50, power: 70},
    {image : "dragon.jpg", name: "Dragon", health: 12, magic: 48, power: 29},
    {image : "dragon_epee.jpg", name: "Dragon Epee", health: 50, magic: 30, power: 22},
    {image : "chevalier.jpg", name: "Chevalier", health: 23, magic: 13, power: 27},
    {image : "chevalier_feu.jpg", name: "Chevalier Feu", health: 25, magic: 35, power: 24}
  ]


  return (
    <main className="flex min-h-svh flex-col">
      <Navbar/>
      <section className="flex-grow container p-2">
        <h1 className="font-bold text-blue-900 rounded-xl bg-neutral-300 px-3 py-5 w-fit m-10">Mon projet REACT</h1>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {/* On map() sur le tabeau pour afficher pour les afficher à l' écran */}
          {
            allCaracters.map((items, index) => (
              <Card key={index} caracter={items}/>
            ))
          }
        </div>
      </section>
      <Footer/>
    </main>
  )
}

export default App
