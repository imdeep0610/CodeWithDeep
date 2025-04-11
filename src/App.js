import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';


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
        <Body/>
    </div>
  )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);