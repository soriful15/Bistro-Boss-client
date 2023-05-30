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
import Cart from "../Page/DashBoard/cart";
import Allusers from "../Page/DashBoard/AllUsers/Allusers";


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
        path:'myCart',
        element:<Cart></Cart>
      },
      {
        path:'allUsers',
        element:<Allusers></Allusers>
      },
    ]
  }
]);
export default router