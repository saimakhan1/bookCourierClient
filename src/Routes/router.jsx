import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout/RootLayout";
import HomePage from "../Pages/Home/HomePage";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Librarian from "../Pages/Librarian/Librarian";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BookDetails from "../Pages/BookDetails/BookDetails";
import MyProfile from "../Pages/MyProfile/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/librarian",
        element: (
          <PrivateRoute>
            <Librarian></Librarian>
          </PrivateRoute>
        ),
      },
      {
        path: "/books",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:id",
        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
