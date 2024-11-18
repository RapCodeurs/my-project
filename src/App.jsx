import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import ApiCharactersPage from "./pages/ApiCharactersPage";
import ErrorPage from "./pages/ErrorPage";
import CreateCharacter from "./pages/CreateCharacter";
import LocalCharactersPage from "./pages/LocalCharactersPage";
import AllCharactersPages from "./pages/AllCharactersPages";
import ModifyCharactersPage from "./pages/ModifyCharactersPage";

const router = createBrowserRouter([
  {
    path: "/", // Correspond à la racine du site
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/api-combattants", element: <ApiCharactersPage /> },
      { path: "/creer-un-personnage", element: <CreateCharacter /> },
      { path: "/local-personnage", element: <LocalCharactersPage /> },
      { path: "/tous-les-combattants", element: <AllCharactersPages /> },
      { path: "/modifier-personnage/:id", element: <ModifyCharactersPage /> },
      { path: "/*", element: <ErrorPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
