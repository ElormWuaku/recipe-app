import Categories from "./pages/Categories";
import Recipes from "./pages/Recipes";
import Welcome from "./pages/Welcome";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Favorites from "./pages/Favorites";
import NewRecipes from "./pages/NewRecipes";

const router = createBrowserRouter([
  {path: '/', element: <Welcome/>},
  {path: '/recipes', element: <Recipes/>},
  {path:'/Categories', element:<Categories/>},
  {path: '/favorites', element: <Favorites/>},
  {path: '/recipes/new', element: <NewRecipes/>},
])

function App() {
  return (
    <>
  <RouterProvider router={router}/>
   </>
  )
}

export default App
