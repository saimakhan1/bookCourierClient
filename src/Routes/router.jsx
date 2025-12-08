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
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import UserDashboard from "../Pages/UserDashboard/UserDashboard";
import MyOrders from "../Pages/MyOrders/MyOrders";
import Payment from "../Pages/Payment/Payment";
import PaymentSuccess from "../Pages/PaymentSuccess/PaymentSuccess";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";
import ApproveLibrarians from "../Pages/Dashboard/ApproveLibrarians/ApproveLibrarians";

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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-orders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "payment/:orderId",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-success",
        element: (
          <PrivateRoute>
            <PaymentSuccess></PaymentSuccess>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <PaymentHistory></PaymentHistory>
          </PrivateRoute>
        ),
      },
      {
        path: "approve-librarians",
        Component: ApproveLibrarians,
      },

      // {
      //   path: "/dashboard/userDashboard",
      //   element: (
      //     <PrivateRoute>
      //       <UserDashboard></UserDashboard>
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
]);
