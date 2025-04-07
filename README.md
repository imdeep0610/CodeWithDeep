# REACT STORY
# Episode 2
NPM -> its a repo which hosted all the packages required to istall in our system
its full form is not Node Package Manager

Package.json -> it will give a json file having all the packages [also called dependencies] which we need in our projects 
                and NPM manages these packages
                basically contains all configuration of all the packages

node_modules -> it contains all the data/code of all the packags. Its very huge(never put it in github) so always put in in .gitignore 
create a .gitignore file and write -> /node_modules 

NOTE: If we have package.json and package-lock.json , we can recreate node_modules just by npm install command

The most important packages in our projects is BUNDLERS (it basically bundles, minified , cached , cleaned , compressed our whole code of html , js , css file before send to production -> Webpack , Parcel , Veet) . These bundlres comes as node packages so we can install it -> npm install -D parcel
Here -D is saying its a dev dependencies (means its used in development only not in production)
By writing -D we say to npm that we need parcel in our app but as dev dependencies not as normal dependencies
There are two types of dependencies -> 1. DEV dependencies  2. PRODUCTION dependencies   
*create-react-app uses Webpack bundlers        

"devDependencies": {
    "parcel": "^2.14.4"
  }
Here ^ -> caret -> basically used to update the even minor changes in the version like 2.14.4 to 2.14.5 , it will automatically chnages if we use ^ in the package.json
~ -> tilde -> it will only update major version changes like 2.14.4 to 3.0.0 
always prefer ^ bcoz any major changes can affect our code  , if we put nothing , react will never update the version

package.json will track the approx version of packages while package-lock.json will keep exact version of 

NOTE : In an app every dependencies/package has its own package.json which contains that package required deendencies

Transitive dependency -> the package/dependencies we install in our app may need some dependencies for themselves also , that is called Transitive dependency. So when we install our required package , these also get installed.


npx parcel index.html  (index.html is source file)
here parcel has created a server for us and hosted our app on local host 1234 or any
basically parcel will go to source index.html and bulid a development build for our app
npx -> it will execute the package (here parcel)


NOTE : Never bring react through CDN links , always do this through installing the npm package -> npm intall react  & npm install react-dom
if we do it through CDN links , the version will not get uodated and it will also involve calling something from different network
so , add it in node_modules only

 PARCEL
It will do dev build -> set Local server 
HMR -> Hot Module Replacement -> means if we do any changes it will again do the dev build automaticallym -> it has a file called .parcel-cache which will give the already used data making it faster also
      using FILE WATCHING Algorithm (which is written in C++)
It will build faster due to CACHING (check in node_modules)  
Image Optimization , Minification , Bundling , Compress , Consistent Hashing , Code splitting 
Differential Bundling -> support older browser
Better Error Handling
Tree Shaking -> if we have lots of code but we need 4-5 lines of code only , parcel will do tree shaking for us
                means it will remove unused code for us
Provide HTTPs also
Different build for DEV and production(it will take little more time)

Support Older Browser version
it can be done using  "browserslist" package present in node_module , just add it in package.json and tell which version of browser our app need to support

 "browserslist":[
    "last 3 Chrome version",
    "last 4 Firefox version",
    "last 2 version"  -> this will support last 2 version of all browser 
  ]
It will take an array -> the mentioned one will support definitely but other may or may not  


# Episode 3
How to start our app -> npx parcel index.html
instaed of using it every time , we need to the modification in scripts of pakage.json
"scripts": {
    "start":"parcel index.html",
    "build" : "parcel build index.html",
    "test": "jest"
  },
here we say by using start -> we refer parcel index.html (start to normally start our app) -> npm run start or npm start (same as of npx parcel index.html)

for production we use build : npm run build (same as of npx parcel build index.html)

here we basically shorten the syntax

 const heading=React.createElement(
        'h1',
        {id:'heading'},
        'Hello React'
    );
creating element using pure React here js object is created , then root will be created using

const root=ReactDOM.createRoot(document.getElementById('root'))

and then root will render all the object HTML element
root.render(heading);

but we are using JSX 
const jsxHeading=<h1 id='heading'>Hello I am written in JSX syntax</h1>
here JS engine doesn't understand JSX code , it will understand only pure js code , PARCEL will do this for us using BABEL package , it works as TRANSPILER and change it into createElement

when root render the code BABEL will chnage it into createElement form only and then JS engine work on it

const jsxHeading=<h1 id='heading'>Hello I am written in JSX syntax</h1>
if we write JSX in single line then fine otherwise use () , so that BABEL understand where JSX started and ends
const jsxHeading=(
  <h1 id='heading'>
  Hello I am written in JSX syntax
  </h1>)


*Bracket Pair Colorization Toggler -> extension used for coloring bracket in diff color to increase readability
Prettier Code Formatter -> formats our code   

REACT COMPONENT -> 1. Class Component   2. Functional Component

Functional Component -> A JS function that return a piece of JSX code or raect element 
[React Element => is jsx code]

const Heading1=()=>{
  return <h1>Hello honey bunny</h1>
} 

const Heading=()=> <h1>Hello honey bunny</h1>

const Heading2=()=>(
  <div id="container">
  <Heading1/>  -> here we render Component (BABEL will understand with this syntax)
   <h1 className="heading">Hello honey bunny</h1>  -> If we are using multiple line use ()
   </div>
)

eg->root.render(<Heading/>) -> way to render the component 

Component Composition -> Component composition in React is a design pattern where you build complex UIs by combining smaller, reusable components, instead of writing one big monolithic component.

How to write React element -> {write anything inside it}

Basically we can put anything inside anything like Component inside component , element inside component , component insode element
for element we use {ele} and for component <Component/> or <Component></Component> or {Component()} (all are same thing)


          