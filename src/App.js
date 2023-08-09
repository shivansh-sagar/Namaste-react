import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Shimmer from "./components/Shimmer";

// not using keys (not acceptable) <<< index as key <<<<<<< unique id (best practice)

const Grocery= lazy(()=>import("./components/Grocery"))

const  AppLayout =() =>{
  const [theme, setTheme] = React.useState("light");
  return (
    <div className="app" >
      <Header />
      <Outlet/>
      <Footer/>
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
      },
      {
        path:"/Grocery",
        element:(
        <Suspense fallback={<h1><Shimmer/></h1>}>
          <Grocery/>
        </Suspense>
        ),
      },
      {
        path:"/resturant/:resId",
        element:<ResturantMenu/>
      }
    ],
    errorElement:<Error/>
  },
 
 ]);


const Root = ReactDOM.createRoot(document.getElementById("Root"));
Root.render(<RouterProvider router={appRouter}/>);

