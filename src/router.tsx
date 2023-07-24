import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";

// Create a Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "games/:id", element: <GameDetailPage></GameDetailPage> },
      { path: "login", element: <LoginPage></LoginPage> },
    ],
  },
]);

export default router;
