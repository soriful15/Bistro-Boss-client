import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home/Home";
import Menu from "../Page/Menu/Menu";
import Order from "../Order/Order/Order";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Private from "../Page/Private";
import DashBoard from "../LayOut/DashBoard";
import Allusers from "../Page/DashBoard/AllUsers/Allusers";
import AddItem from "../Page/DashBoard/AddItem/AddItem";
import AdminRoutes from "../Routes/AdminRoutes";
import MangeItem from "../LayOut/MangeItem";
import Cart from "../Page/DashBoard/Cart";
import Payment from "../LayOut/Payment/Payment";
import UserHome from "../LayOut/UserHome/UserHome";
import AdminHome from "../LayOut/AdminHome/AdminHome";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        // path:'/order',
        path: '/order/:category',
        element: <Order></Order>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/private',
        element: <PrivateRoute><Private></Private></PrivateRoute>
      },
    ]
  },

  {
    path:'dashboard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      {
        path:'userHome',
        element:<UserHome></UserHome>
      },
      {
        path:'myCart',
        element:<Cart></Cart>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      // admin Routes
      {
        path:'allUsers',
        element:<AdminRoutes><Allusers></Allusers></AdminRoutes>
      },
      {
        path:'userAdmin',
        element:<AdminRoutes><AdminHome></AdminHome></AdminRoutes>
      },
      {
        path:'addItem',
        element:<AdminRoutes><AddItem></AddItem></AdminRoutes>
      },
      {
        path:'manageItems',
        element:<AdminRoutes><MangeItem></MangeItem></AdminRoutes>
      },
     
    ]
  }
]);
export default router