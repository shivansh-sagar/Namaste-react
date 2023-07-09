const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World Form REACT"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

{
  /* <div id='parent'>
    <div id='child'>
        <h1>i'm a h1 tag</h1>
    </div>
</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm the H1 Tag"),
    React.createElement("h2", {}, "I'm an H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm the H1 Tag"),
    React.createElement("h2", {}, "I'm an H2 Tag"),
  ]),
]);

console.log(parent);

const Root = ReactDOM.createRoot(document.getElementById("Root"));
Root.render(parent);
