import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Shimmer from "./components/Shimmer";
import Header from "./components/Header";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import Cart from "./components/Cart";
import "./index.css";
// not using keys (not acceptable) <<< index as key <<<<<<< unique id (best practice)

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [mode, setMode] = useState("theme_light");
  const toggleMode = () => {
    if (mode === "theme_light") {
      setMode("theme_dark");
    } else {
      setMode("theme_light");
    }
  };
  return (
    <Provider store={AppStore}>
      <UserContext.Provider value={{ theme: mode }}>
        <div className="app">
          <Header toggleMode={toggleMode} />

          <Outlet />
          <Footer mode={mode} />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/res",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense
            fallback={
              <h1>
                <Shimmer />
              </h1>
            }
          >
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/res/resturant/:resId",
        element: <ResturantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default AppRouter;

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={AppRouter} />);
