import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Layout from "./components/Layout"
import AllCharacters from "./pages/AllCharacters"
import ErrorPage from "./pages/ErrorPage"

const router = createBrowserRouter([
  {
    path : "/", // Correspond à la racine du site
    element: <Layout/>,
    children: [
      {path : "/", element: <HomePage/>},
      {path : "/all-characters", element: <AllCharacters/>},
      {path : "/*", element: <ErrorPage/>}
    ]
  }
])

function App() {
  return(
    <RouterProvider router={router}/>
  );
}

export default App
