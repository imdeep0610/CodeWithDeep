import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Body from './components/Body';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter , Router, RouterProvider,Outlet} from 'react-router-dom';



/*
Heading -> 1.Logo  2.Nav Items
Body -> 1.Search Bar 2.RestaurantContainer 
                           Restaurant Card
                              1.Img   2.Res Name  3.Star Rating  4.Cuisine
Footer -> 1.Copyright  2.Links  3.Address 4.Contacts
*/

const AppLayout=()=>{
  return(
    <div>
        <Header/>
        <Outlet/>
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
        },
        {
          path:'/restaurants/:redId',
          element:<RestaurantMenu/>
        }
    ],
    errorElement:<Error/>
  },
  
])


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);