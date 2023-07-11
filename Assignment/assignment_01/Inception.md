# _Assignment 01 - Inception_ 

## 1- What is Emmet?
-   Emmet is a shorthand syntex and toolkit for generating HTML, XML and CSS code quickly and efficiently. It is primarily used by web developers and code editors to increase productivity and speed up the prosses of writing markup and styling.

## 2- Difference between a library and Framework?
-   Library: A library is a collection of precompiled code modules or function that can be reused by sevelopers in their application. Library is mainly focus on solving a particular problem or providing a specific set of functionality,such as parsing with json data etc...  Developers have more control and flexibility when using the libraries, as the can choose which specific component or functionalities to use and integrate with the codebase.
-   Framework: A framework is a more comprehensive and structured tool that provides a foundation for building  application. It typically include a set of liberies, tools, that help developers to create application by defining overall structure.

## 3- What is CDN? Why do we use it?
-   CDN stand for "Content Delivery Network" these are the link . We use it to introduce react and reactdom to pre-build website and want to include react components.

## 4- Why is React known as React?
-   React is called "React" because the name reflects the core concept and philosophy behind the library. the name "React" refers to the reactive nature of the library, which is based on the idea of efficient updating and rendering user interfaces in response to changes in data and state.

## 5- What is cross-origin in the script tag?
-   The cross-origin is a attribute used to share resource from one domain to another domain. Mainly it is used to handle CORS          (Cross-Origin Resource sharing) request that checks whether it is safe to allow for sharing the resources from other domains. Resources like external script, links, img, vedio.

## 6- What is the difference between React and reactDOM?
-   React: React is a javascript library for building user interface. It provides a declarative and component-based approach to developing UIs. React allows developers to create reusable UI component and efficiently manage the state of those components
-   ReactDOM: reactDOM is a package specifically designed for rendering React components into the DOM( Documrnt Object Model) od a web browser. It act as a bridge between React and browser's DOM.

## 7- What is difference btween react.development.js and react.production.js files via CDN?
-   react.development.js is the development version of React is intended for use during the development and debugging stages of an application. It includes additional error checking and warning messages that help developes to identify and diagnose issues in their code.
-   react.production.js this file is optimized for production deployment. It minifid and optimized version of the react library, resulting in a smaller file size. It does not include error messages and warning to reduce the size further.

## 8- What are async and defer? 
-    An async is a keyword which is added before a function making it an async function, An Async function helps us to concurrently execute the javascript code without going in a serial executional approach i.e: One after another. (if the execution of one line or logic taking time and blocking the execution of other logics/code then Async allows us to execute all the code concurrently without waiting for thatr specific logic/code to be completed).

-   A defer is a keywork which is mainly used in a function that concurrently execute the js code in parallel with the execution of html code however, the script execute is deffered until the html execution will complete.