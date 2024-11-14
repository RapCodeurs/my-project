import { Outlet } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Footer from "./Footer"
import Navbar from "./Navbar"


//Appel de l'élement Outlet pour afficher layout

const Layout = () => {
  return (
    <main className="flex min-h-svh flex-col">
      <Navbar/>
      <section className="flex-grow container p-2">
        {/* C'est ici que les pages enfants seront rendues */}
        <Outlet/>
      </section>
      <Footer/>
    </main>
  )
}

export default Layout