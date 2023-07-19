# _Assignment 02 -laying the Foundation_

##  1- What is JSX?
-   JSX enable us to write `HTML like syntax` along with `JavaScript` and commonly used with libraries like React.
-   `JSX---> React.createElement---> React Element---> Js object---> HTML Element(Render)`
-   JSX is transpiled to React.createElement with the help of Babel

##  2-Superpower of JSX
-   We can write `HTML` like syntax any where inside the `root`
-   For example
```
const JSXheading = 
    <h1 id="heading">Namaste JSX</h1>
```
-   We can start writing `JavaScript` any where inside the root by simply write js inside `{Javascript}`
-   It save us to write `React.createElement` which become so complex when we have to perform nesting
```
const heading= React.createElement("h1", {id="main-heading"}, React.createElement("h2", {}, "this is sub heading"))
```

##