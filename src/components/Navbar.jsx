import { Link, NavLink } from "react-router-dom"



const Navbar = () => {

  // Creation d'un tableau pour les liens
  const navItems = [
    {text: "Acceuil", path: "/"},
    {text: "ApiCombattans", path: "/api-combattants"},
    {text: "Personnages", path: "/local-personnage"},
    {text: "Legacy", path: "/story"}
  ];


  return (
    // import de la librairie react-router-dom
    <nav className="p-4 mb-3 border-2 border-bottom customShadow">
      <div className="container flex justify-between mx-auto">
        <Link className="text-bold text-xl bg-orange-300 border-2 rounded-xl p-2 hover:bg-orange-500" to="/">La taverne des combattants</Link>
        <div className="flex gap-3">

          {/* Afficher grace à la methode map() */}
          {/* Souligner quand on est sur la page */}

          { navItems.map((item, index)=>(
            <NavLink key={index} to={item.path} 
            className={({isActive}) => `${isActive ? 'text-2xl underline bg-orange-300' : ''}
            text-bold text-xl bg-neutral-300 border-2 rounded-xl p-2 hover:bg-blue-400
            `}
            >{item.text}</NavLink>
            ))
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar