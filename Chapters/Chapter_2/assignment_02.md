# _Assignment 02 - Igniting our App_

## 1- What is 'NPM'?
-   NPM is stand for everything except node package manager. It is work as a node package manager and manage the package-version and other stuff in the application
## 2- What is 'Parcel/Webpack'? Why do we need it?
-   Parcel/webpack is a Bundler which is help us to bundle, compress, minify, package our application properly so it is ready to push to the production.

## 3- What is '.parcel-cache'?
-   whenever we execute the parcel it will create parcel-cache and with help of these cache we can more quickly build the application as compair to last build.
-   
## 4- What is `npx`
-   npx is a node package execution wherever we have to execute any of those package use npx to execute it. 
-   For example - when we have to execute parcer we simply write "npx parcel index.html"
-   where 1 = npx - for execution the package, 2 = parcel - package name,  3 = index.html - Entery point

## 5- What is difference between 'dependencies' vs 'devdependencies'?
-   Dependencies: These are the software modules and library in which our application is dependent/relies to run after the development of the application. In other words these are the essential package and library which gives support to our application and make it run.

-   Devdependencies: These are the software modules and library which are essential during the development phase of the application.
-   Syntax for devdependencies is "npm install -D <package name>"

## 6- What is Tree Shaking?
-   Tree Shaking is use to optimize the code whenever we run our application, I will remove all the unnecessary code from  our application and make it optimized for run and build.
-   It Remove things like unwanted "imports", comment which is not required for the run and build of our application.

## 7- What is Hot Module Replacement?
-   Hot Module Replacement (HMR) is a functionality provided by the parcer. Whenever we update our code and save it, It rapidly show us the updated result in our web browser with doing any mannual work. 

## 8- List down your favourite 5 superpower of Parcel and describe any 3 of them in your own words.
-   1: HMR(Hot Module Replacement)   2: Tree Shaking   3: Dev Build     4:caching    5:Bundling
-   1: HMR(Hot Module Replacement): It automatically refresh the webpage/browser when ever we make an updation in our code
-   2: Tree Shaking: Tree Shaking is use to optimize the code whenever we run our application, I will remove all the unnecessary code from  our application and make it optimized for run and build.
-   3: Bundler: Bundler is help us to bundle, compress, minify, package our application properly so it is ready to push to the production.

## 9- What is '.gitignore'? What should we add and not add into it?
-   .gitignore is a way to ignore all those file which we doesn't want to push on our git
-   Add - We should have to add only those file which can not be regenerate again and again. For example: package.json, package-lock.json, etc.
-   Not Add - We should not have to add those file which can be regenerate again and again. For example: node_module we can regenerate node module again and again with the help of package.json

## 10- What is the difference between 'package.json' and 'package-lock.json'?
-   package.json: It is a configuration for npm and it keep a track/list of what version of that package is install into a system. It has ^ -caret which denote minner updation
-   package-lock.json: It is a configuration for npm and it keep a track the exact version of the package that is install into a system.

## 11- Why should I not modify `package-lock.json`?
-   We should not have to modify "package-lock.json" because it hold all the current package and package version of our application and modify it make it differ from the current requirement and  make the app crash.

## 12- What is 'node_module'? Is it a good idea to push that on git?
-   node_module: node_module is a directory which contain all the dependencies and dependencies's dependencies(sub dependenices called transative dependencies) package : React, ReactDOM, parcel etc. whis is essential for the development as well as for running of our application.
-   NO, It is not a good idea to put it on the git because we can easily regenerate it again and again with the help of package.json

## 13- What is the `dist` folder?
-   The dist folder contain the optimized/minimized version of the source code which gets minimized with the hrlp of parcel.
-   The code is in the dist folder is the actual code which is used for the production build of our application.

## 14- What is 'browserlists'
-   browserlist is help us to making our application compatable for different browser and make sure the application we run properly on that browser it is written inside the package.json "browserlist": <condition> .

# Reading part 
## 1- Read about different bundlers: vits, webpack, parcel
## 2- Read about: ^ -caret and ~ -tilda
## 3- Read about Script types in html (MDN Docs)