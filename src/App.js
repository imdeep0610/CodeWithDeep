import React , {lazy,Suspense,useEffect,useState} from 'react';
import './style.css'
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Body from './components/Body';
import Error from './components/Error';
// import Grocery from './components/Grocery';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter , Router, RouterProvider,Outlet} from 'react-router-dom';
import UserContext from './utils/UserContext';
import {Provider} from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';

/*
Heading -> 1.Logo  2.Nav Items
Body -> 1.Search Bar 2.RestaurantContainer 
                           Restaurant Card
                              1.Img   2.Res Name  3.Star Rating  4.Cuisine
Footer -> 1.Copyright  2.Links  3.Address 4.Contacts
*/

const Grocery=lazy(()=>import('./components/Grocery'))

const AppLayout=()=>{

  const [userName,setUserName]=useState();

  //Authentication
  useEffect(()=>{
    //Make an API call and send username and password
    const data={
      name:'Deepshikha Singh'
    }
    setUserName(data.name)
},[])
{/*Here we have used Context under context which is a completely valid code , for header data = Shanu Shubham while
   for others its Deepshikhe Singh  */}
  return(
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div>
       <UserContext.Provider value={{loggedInUser:userName}}>
        <Header/>
        </UserContext.Provider>
        <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
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
        },
        {
          path:'/grocery',
          element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
        },
        {
          path:'/restaurants/:resId',
          element:<RestaurantMenu/>
        },
        {
          path:'/cart',
          element:<Cart/>
        }
    ],
    errorElement:<Error/>
  },
  
])


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);