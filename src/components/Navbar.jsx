import { Link } from "react-router-dom"



const Navbar = () => {
  return (
    // import de la librairie react-router-d0m
    <nav className="p-4 mb-3 border-2 border-bottom shadow">
      <div className="container flex justify-between mx-auto">
        <Link href="/">Accueil</Link>
        <Link href="/">La taverne des combatants</Link>
      </div>
    </nav>
  )
}

export default Navbar