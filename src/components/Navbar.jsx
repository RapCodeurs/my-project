import { Link } from "react-router-dom"



const Navbar = () => {
  return (
    // import de la librairie react-router-dom
    <nav className="p-4 mb-3 border-2 border-bottom customShadow">
      <div className="container flex justify-between mx-auto">
        <Link href="/">Accueil</Link>
        <Link href="/">La taverne des combatants</Link>
      </div>
    </nav>
  )
}

export default Navbar