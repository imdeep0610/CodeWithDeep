import {useState,useEffect} from 'react';
import Shimmer from './Shimmer';

const RestaurantMenu=()=>{
    
const [resMenu,setResMenu]=useState(null);

   useEffect(()=>{
     fetchMenu();
   },[])

   const fetchMenu=async()=>{
     const data=await 
     fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.594048&lng=88.335677&restaurantId=27113&catalog_qa=undefined&submitAction=ENTER');

     const json=await data.json();
     console.log(json);
     setResMenu(json.data);
   }

   const {name,cuisines,cloudinaryImageId,costForTwoMessage} = resMenu?.cards[2]?.card?.card?.info || 'No data found';

   const {itemCards}=resMenu?.cards[]
 
  if(resMenu===null){
        return <Shimmer/>;
  }
   return(
    <div className="menu">
       <h1>{name}</h1>
       <p>{cuisines.join(',')} - {costForTwoMessage}</p>
       <h3>{}</h3>
       <h2>{}</h2>
       <ul>
          <li>Burger</li>
          <li>Biryani</li>
          <li>Pizza</li>
          <li>Coffee</li>
       </ul>
    </div>
   )

}
export default RestaurantMenu;