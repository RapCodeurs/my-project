import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


function App() {


  return (
    <main className="flex min-h-svh flex-col">
      <Navbar/>
      <section className="flex-grow">
        <h1 className="font-bold text-blue-900 rounded-xl bg-neutral-300 px-3 py-5 w-fit m-10">Mon projet REACT</h1>
      </section>
      <Footer/>
    </main>
  )
}

export default App
