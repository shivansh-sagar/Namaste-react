import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// not using keys (not acceptable) <<< index as key <<<<<<< unique id (best practice)

const  AppLayout =() =>{
  const [theme, setTheme] = React.useState("light");
  return (
    <div className="app" >
      <Header />
      <Outlet/>
    </div>
  );
};
 const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[ 
      {
        path:"/",
        element:<Body/>
      },
      {
         path:"/about",
         element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ],
    errorElement:<Error/>
  },
 
 ]);


const Root = ReactDOM.createRoot(document.getElementById("Root"));
Root.render(<RouterProvider router={appRouter}/>);

