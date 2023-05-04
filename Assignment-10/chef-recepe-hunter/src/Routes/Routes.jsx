import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Shared/Home/Home";
import ErrorPage from "../Pages/Shared/404/ErrorPage";
import Login from "../Pages/Authenticate/Login/Login";
import Register from "../Pages/Authenticate/Register/Register";
import Recipes from "../Pages/Shared/Recipes/Recipes";
import RecipeDetails from "../Pages/RecipeDetails/RecipeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/recipe/:id",
    element: <RecipeDetails />,
    loader: ({ params }) =>
      fetch(
        `https://chef-recipe-server-itsakhtar-outlookcom.vercel.app/recipe/${params.id}`
      ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
