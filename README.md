# REACT STORY
# Episode 2
NPM -> its a repo which hosted all the packages required to iNstall in our system
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


# Episode 4
Inline CSS -> style={{color:'red'}}  
basically this style is an js object style={color:'red',font-size:'34px'}
and since we are writing JS code in JSX , we need to use {}
That's why first {} -> for Js code in JSX  and second {} -> for JS object   

CONFIG DRIVEN UI -> Means our UI is controlled by data 
        For eg : For Delhi people , in Swiggy the offer cards show diff UI , for Bengaluru its diff
        The data coming from backend , decides the UI of the app

PROPS -> When we want to dynamically pass the data to components , we pass it as props
eg: Restaurant Container component
<RestaurantCard resName='Deep Flavour'  cuisines='North Indian Food , Asian' rating='4.4 star' time='38 mins'/>
<RestaurantCard resName='KFC' cuisines='Burger , Fast Foods' rating='4.2 star' time='42mins'/>

const RestaurantCard=(props)={   instead of (props) we can destructure it here only ({resName,cuisines}) -> this is same as of 
                                const {resName,cuisine}=props;
                                If we destructure it already we can directly use it like {resName} , otherwise {props.resName}
         <h3>{props.resName}</h3>
         <h4>{props.cuisines}</h4>
         <h4>{props.rating}</h4>
         <h4>{props.time}</h4>
}
These are all about JS not about React

NOTE: Always use KEY attribute while using map()
Because React doesn't uniquely identify the element , so when it will re-render everything but with key it will uniquely identify it and render only the new one.
Don't use index instead of key because same index can be given again id earlier element is deleted 


# Episode 5
Folder structure
components -> all components is placed here , name should be same as of Components
utils -> the extra things which is common

There are two types of export/import for files
1. default export/import -> we cannot use two default export in a single file
eg : export default Header
default export is imported directly
import Header from './Header';

2. named export/import -> it is used when we export multiple things in single file. 
eg : export const Body=()=>{}
For importing named export we need to use {}
import {Body} from './components';


HOOKS 
Note: Whenever state variable updates , react re-render the components

1. useState -> this is a hook given by react , it take ttwo things one state variable , state function
when this variable get updated using state function , useState will re-render the whole component and UI get uodated
Basically state function is keeping track of values of variable , if its changes it will update it and then call the component to render it.
When state variable is updated , react triggers reconcilation cycle (re-render the component)

const [loginBtn , setLoginBtn]=useState('Login'); 
<button className='login' onClick={(()=>{
                  loginBtn==='Login' ? (setLoginBtn('Logout')) : (setLoginBtn('Login'))
               })}>{loginBtn}</button>
here this is const even though its value getting updated bcoz each time component get rendered , new variable is created here so old variable value is not updating
Herr in React, only this button value is chnaging and if rest part are not chnaged then in re-rendering only this button part will get updated , rest other remains same . This is diff algorithm

const [searchText,setSearchText]=useState('');
 <div className='search'>
  <input type='text' className='search-box' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
  <button>Search</button>
</div>
Here we have created a search box , so we need a state variable to store it , and since we have given value={searchText} means we ties the value of search box to the state variable so we cannot update the search box without updating the state variable .
Since state variable is empty and not getting updated here , so if we do not use onChange={} , our state variable will not get updated and if we try to enter any value in the search box , it will not work
Here onChange will update the state variable as soon as the search box input chnages
 
Note : With each time we enter some value in the search box , our component get re-render , since react render the component so fast it will not affect much
Here component will re-render each time but only changed valued get updated , rest other remains same 



# Episode 6
Monolith Services ->
Monolith services refer to when a software system is designed as a single, unified service or application — all features, logic, and functionality are bundled together into one codebase and usually deployed as one unit.

“One service to handle everything — user auth, payment, order tracking, admin, UI, etc. — all baked into one.”

[Monolith Service]
│
├── Authentication module
├── Product Catalog module
├── Order Management module
├── Payment Gateway integration
├── Admin Dashboard
└── Database Access Layer

Microservices -> 
Microservices architecture is a design style where an application is broken into small, independent services, each focused on a single piece of functionality and able to run, deploy, and scale independently.

Each service:

Has its own codebase

Often has its own database

Communicates with others via APIs (usually HTTP/REST or messaging like RabbitMQ/Kafka)

Let’s take an e-commerce app again. Instead of bundling everything together (like in a monolith), you break it into separate services:

User Service – Handles signup, login, user profile

Product Service – Manages product catalog

Order Service – Manages orders and history

Payment Service – Integrates with Stripe/Razorpay/etc.

Notification Service – Sends email/SMS

Search Service – Manages product search

Each service is deployed separately and can be scaled based on its own needs.

And even we can distribute it as Backend , Frontend , Auth , Database etc , each services can be of diff language and even can run on their own specific port


Two ways of fetching data from API calls -:
1. Load -> API Calls (assume it takes 500ms) -> Render the page
here while API calls , nothing is visible on screen and suddenly data appeared . 

2. Load -> Render -> API calls -> Render 
Here while loading we Render the structure and then do the API calls , it will atlead show the skeleton to the user till rendering and as API calls completes , data is visible on the screen after 2nd rendering 
Here we have to do 2 times rendering , React has very fast rendering methods and 2 can be ignored if we see the user experience is more reliable in this approach

For making API calls in react , use "useEffect" hook

Here when we render the components then useEffect callback function will work (API calls),then the result will be printed on the UI
eg: useEffect(()=>{
  console.log('Use Effect called')
},[]);
console.log(Body rendered); 
Output -> Body rendered 
          Use Effect called

   useEffect(()=>{  -> here we are doing a BACKEND CALL
        fetchData();
    },[]);

    const fetchData=async()=>{
      const data=await fetch(
         'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.594048&lng=88.335677&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );

      const res=data.json();
      console.log(res);
    }          
 Whenever we are doing any API calls , while data is loaded show a fallback UI , i.e a SPINNING LOADER
 but showing this is outdated , nowadays industry is using SHIMMER UI -> It resembles the actual UI (kind of fake page).
 While page load , render it with SHIMMER UI , and when API calls data comes , render it with actual UI   


NOTE : Why React is afster?
React is faster bcoz of Virtual DOM, the reconcilation algoritm (React Fiber) which comapres the two Virtaul DOM (older and updated one)
and only changes the updated part , makes React faster.


# Episode 6.1
How to find API and get data from that
Go to Inspect -> Network ->Fetch/XHR (it will give us all the API call)

# Episodes 7
useEffect =>
It is called whenever our component is rendered, but this can be controlled by using a dependancy array []
useEffect(()=>{
   console.log('UseEffect called');
},[])
1.When we don't pass any dependancy array , it will called everytime , component get rendered
2.When we have an empty array , it is called once only after initial render
3.When we have some dependancy in the array , then useEffect is called only when the dependancy changes

useState =>
It is used to create local state variables inside our functional component, at the top.
Never use useState outside the component and even in if else(in conditional part) , in loop and even in normal functions.
eg : const [count,setCount]=useState('');
    const Component=()=>{}


ROUTING => We use a JS library called react-router-dom  
import { createBrowserRouter , Router, RouterProvider} from 'react-router-dom';
createBrowserRouter -> It will create a context for the routing
RouterProvider -> It will provide the wrapper for all the component 

const appRouter=createBrowserRouter([
  {
    path:'/',  -> this will take us to the given page
    element:<AppLayout/>,
    errorElement:<Error/>  -> it will take u to custom error page if we have given wrong path 
                              even React has default error page , but using this we can make our own error page.
  }, 
])

we have one hook also present -> useRouteError from 'react-router-dom'
Basically it gives details info about error (basically gives us an object)
import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err); --> it is an object having diff properties which is giving info about error and we can use it in our error page
  return(
    <div>
        <h1>OOPs</h1>
        <h2>Something went wrong!</h2>
        <h3>{err.status}</h3>
    </div>
  )
}
export default Error;

Outlet -> <Outlet /> is a placeholder where child routes get rendered.
          It allows you to nest routes inside parent components/layouts.

Now we want Header to be a part of each page at the top and below it different pages get loaded a/c to the given path
We will make <AppLayout/> as parent and then load all other pages as its children and then send it to this array of children to  <Outlet/> according to the chnage in the path, it will take the given path and load the page.
For eg: if we go to <About/> page , outlet will be filled with the About page.
const AppLayout=()=>{
  return(
    <div>
        <Header/>
        <Outlet/>  -> Outlet is an component given by 'react-router-dom'
    </div>
  )
}

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
        {
           path:'/',
           element:<Body/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/contact',
          element:<Contact/>
        }
      
    ],
    errorElement:<Error/>
  },
  
])

Like this we can have multiple parents and multiple children, we can create children routes in the outlet by loading in it.
Behind the scene , when we call any page , this outlet get replaced by the given children content

Navigation using Links ->
In HTML , we use <a> tag, but in react we use <Link></Link> imported from 'react-router-dom'
basically <a> reload the whole page , but in <Link> refreshes the component, no reloading of whole page , that is why react is called 
Single Page Application (SPA) , here all thing is present in single page App and only component is getting refreshed here.
<Link to='#'>Home</Link>

NOTE : Behind the scene <Link> is using <a> tag only , if u go to console and check html code <a> will be present instead of <Link>

There are 2 types of Routing 
1. Server Side Routing -> When we click on <a> tag(for eg: about us page) , it reload the whole page , it makes an network call to About us page , it fetches the HTML page and render it on browser. 
It is how our web page used to work

2. Client Side Routing -> It doesn't do any network calls , it already have all the pages just load the component when required.
<Link> do this


Dynamic Routing -> {
          path:'/restaurants/:redId', -> here : says that next to it is dynamic , it get chnaged 
          element:<RestaurantMenu/>
        }





# Episode 8
Function based component -> Its a js function which return a piece of JSX code.
Class Based component -> Its a javascript class having render() , which gives us a piece of JSX code.
import React from 'react';

React.Component is a class which is given by react and given class will inherit some property from it and this React.Component is given by React to us. This extending of React.Component tells us that it's an class component.
It has this render() which return the jsx code which eventually changed into HTML code and gives us desired UI.

import React from 'react';                     // import {Component} from 'react'
class UserClass extends React.Component{       // class UserClass extends Component {}
  constructor(props){
      super(props);
  }
  render(){
    return(
        <div className="user-card">
            <h2>Name : {this.props.name}</h2>
            <h3>Location : Banglore</h3>
            <h4>Contact : deep@gmail.com</h4>
        </div>
    )
  }
}
export default UserClass;

How to get access of props in class component 
About Page : 
<UserClass name={'Deepshikha Singh'} loaction={'Banglore'}/>
and in class component , we use constructor to get access of props and use it with {this.props.name} -> always use with this keyword 

super() calls the parent class (React.Component) -> super(props) sends the props to that parent ->That’s how React knows what this.props should be.

Why use super()->
super() is a special keyword in JavaScript used inside a subclass constructor (like your React component).
It calls the constructor of the parent class (React.Component in this case).
In JavaScript, when a class extends another class, you must call super() before using this.

So basically whenever the instance of class is created , a constructor is called and the props is extracted over here and we can use it anywhere in the code now.
We can pass multiple props h.ere , it will combined as a object and extracted in constructor and used


States in class component ->
Creating an instance of class means , loading a class component , and when a instance is created , a constructor is called which is the best place to get PROPS and STATE

constructor(props){
      super(props);
      console.log(props);

      this.state={  -> state is an reserved word here , it's a big object that contains all state variable
        count:1,
      }
 }

Even in functional component , in background all state variables are stored in one big object.

How to update the state variable
constructor(props){
      super(props);
      console.log(props);

      this.state={
        count:1,
        count2:2,
        count3:3,
      }
 }

<h1>Count : {count}</h1>    {/* {this.state.count} -> if we didn't destructure it  */}
            <button onClick={()=>{
                //NEVER UPDATE STATE VARIABLE DIRECTLY -> this.state.count=this.state.count+1;
                this.setState({ //this.setState() is an function given by react and we pass an object inside it
                    count:this.state.count+1,  //this is how we update the state variable
                    count2:this.state.count2 +1,
                })
            }}>Count</button>
            <h2>Count : {count2}</h2> 

It will update only those variable which is present in setState() , rest others are not updated [only count, count2 get updtaed]

LIFECYCLE Methods of class component
When a class component is called , it start loading , means an instance of that class is called then "CONSTRUCTOR" is called then only RENDER() is called.

class Parent extends React.Component {
  <Child/>
}
If parent is also class component where we called the new class component , then the order will be ->
Parent Constructor -> Parent Render -> Child Constructor -> Child Render

componentDidMount(){} -> this method is called after the component is mounted into the DOM 
constructor -> render -> componentDidMount()

In case Parent compontne is also class component 
Parent Constructor -> Parent Render -> Child Constructor -> Child Render -> Child ComponentDidMount() -> Parent ComponentDidMount()

In componentDidMount() we do API calls, because our react working hierarchy is ->
Render the component -> API calss -> Render the data in component 
here we first render the component using render() , then only do the API calls in componentDidMount() and again render it 


class Parent extends React.Component {
  <Child1/>
  <Child2/>
}

Parent constructor -> Parent render -> Child1 constructor -> Child1 render -> Child2 constructor -> Child2 render -> Child1  componentDidMount() -> Child2 componentDidMount() -> Parent componentDidMount()

Here React will batched the render phase of all its child and give the result , this is optimization in react.

Here when our component is rendered and updated into the DOM , then only componentDidMount is called (that's why it is the best place for API calls also, so they get the data and quickly update the data as component is already rendered.)

Till render it is called MOUNTING Phase and componentDidMount() is commiting phase
DOM manipulation is the most expensive thing in the React , so in render phase only React bathces all child rendering and in commit phase it will update it together.
Each component will completes its whole lifecycle 

How API calls done in componentDidMount ->
1. Mounting Cycle
when class component is called , instance is created , then constructor is called the state variable is create with some default value
constructor(props){
      this.userInfo={
        name:'Dummy',
        location:'Muzaffarpur',
        avatar_url:'https.google.com'
      }
 }
then render() happens with the default value only that is given above [if we see carefully these dummy data will appear for millisec]
render(){
  return(
        <div className="user-card">
            <h2>Name : {name}</h2> 
            <img src={avatar_url} alt={name}/>
            <h3>Location : {bio}</h3>
            <h4>Contact : deep@gmail.com</h4>
        </div>
    )
  }

2. Updating Cycle
Now componentDidMount() is called and then only API call was made and this.setState is called , now the updating cycle starts 
and react will again called the render() which will update the page with API data and then a new method 
"componentDidUpdate()" is called

3. Unmounting Cycle
componentWillUnmount() -> This will call just before the component will unmounted from DOM , like if we go to diff pages etc.

useEffect(()=>{
   console.log('Render everytime count is updated');
},[count,count2])

componentDidUpdate(prevProps,prevState){
   if(this.state.count!==prevState.count || this.state.count2!==prevState.count2){
       console.log('Work same as useEffect(()=>{},[count,count2])')
   }
}
and if we want diff things to get render on both state variable

useEffect(()=>{
   console.log('Render everytime count is updated');
},[count])
useEffect(()=>{
   console.log('Render everytime count is updated');
},[count2])
 
 Both are equivalent

componentDidUpdate(prevProps,prevState){
   if(this.state.count!==prevState.count){
       console.log('Work same as useEffect(()=>{},[count])')
   }

   if(this.state.count2!==prevState.count2){
      console.log('Work same as useEffect(()=>{},[count2])')
   }
}
And that's why we use array in useEffect to carry multiple state variable.
