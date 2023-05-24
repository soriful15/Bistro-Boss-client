import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home/Home";
import Menu from "../Page/Menu/Menu";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[

        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/menu',
            element:<Menu></Menu>
        },
      ]
    },
  ]);
  export default router