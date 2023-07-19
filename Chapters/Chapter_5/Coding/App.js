import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";

// not using keys (not acceptable) <<< index as key <<<<<<< unique id (best practice)

const  AppLayout =() =>{
  const [theme, setTheme] = React.useState("light");
  return (
    <div className={`app ${theme}`}>
      <Header theme="light" />
      <Body/>
    </div>
  );
};


const Root = ReactDOM.createRoot(document.getElementById("Root"));
Root.render(<AppLayout/>);

