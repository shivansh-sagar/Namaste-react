import React from "react";
import ReactDOM from "react-dom/client";


const Title = () =>(
  <h1 className="head">
    Namaste React using JSX 🚀
  </h1>
);

const elm = (
  <h1>This is element</h1>
)

const Paragraph = () => {
  return <div className="paragraph">
    <h1>By Shivanshu</h1>
  </div>
}

const number = 100

// Functional Component - New

const Heading = ()=> (
 <React.Fragment>
  <div id="container1">
    <Title/>  {/*  Component Composition */}
    <h2>{number}</h2>
    <h1 className="heading">Namaste React Functional Component</h1>
    <Paragraph/>
    {Title()} {/* We can also call the function */}
  </div>

  <div className="container2">
    <Title/>
    {elm}
  </div>
 </React.Fragment>
)


const Root = ReactDOM.createRoot(document.getElementById("Root"));
Root.render(<Heading/>);

