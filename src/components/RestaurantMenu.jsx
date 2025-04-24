import {useState,useEffect} from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';

const RestaurantMenu=()=>{
    
const [resMenu,setResMenu]=useState(null);
// const resId=useParams();
     const {resId}=useParams();

   useEffect(()=>{
     fetchMenu();
   },[])

   const fetchMenu=async()=>{
     const data=await 
     fetch(MENU_API + resId);

     const json=await data.json();
     console.log(json);
     setResMenu(json.data);
   }

   const {name,cuisines,costForTwoMessage} = resMenu?.cards[2]?.card?.card?.info || {};

   const {itemCards}=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
  console.log(itemCards)
  if(resMenu===null){
        return <Shimmer/>;
  }
   return(
    <div className="menu">
       <h1>{name}</h1>
       <p>{cuisines.join(',')} - {costForTwoMessage}</p>
       
       <h2>Menu</h2>
       <ul>
          {itemCards.map((item)=>(
             <li key={item.card.info.id}>{item.card.info.name} - {"Rs."}{item.card.info.defaultPrice/100}</li>
          ))}
       </ul>
    </div>
   )

}
export default RestaurantMenu;