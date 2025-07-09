import {useState,useEffect} from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu=()=>{

   const [showIndex,setShowIndex]=useState(null);
    
// const [resMenu,setResMenu]=useState(null);
// const resId=useParams();
   const {resId}=useParams(); 
   console.log(resId);
   const resMenu=useRestaurantMenu(resId);
   console.log(resMenu);

   // bcoz now custom hook is created
   // useEffect(()=>{
   //   fetchMenu();
   // },[])

   // const fetchMenu=async()=>{
   //   const data=await 
   // //   fetch(MENU_API + resId);

   //   const json=await data.json();
   //   console.log(json);
   //   setResMenu(json.data);
   // }

   const {name,cuisines,costForTwoMessage} = resMenu?.cards[2]?.card?.card?.info || {};

   const {itemCards}=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
  console.log(itemCards)
  const categories=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>(
         c.card?.card?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  )) 
  console.log(categories)

  if(resMenu===null){
        return <Shimmer/>;
  }
   return(
    <div className="text-center">
       <h1 className='font-bold my-6 text-2xl '>{name}</h1>
       <p className='font-bold text-lg'>{cuisines.join(',')} - {costForTwoMessage}</p>
       
       {/*categories */}
      
       {categories.map((category,index)=>(
         
          <RestaurantCategory 
          showItems={index===showIndex ? true : false} 
          setShowIndex={()=>setShowIndex(index)}
          key={category?.card?.card?.categoryId}
           data={category?.card?.card}/>
       ))}
       {/* <h2>Menu</h2>
       <ul>
         {itemCards.length >0 ?
         <div>{itemCards.map((item)=>(
            <li key={item.card.info.id}>{item.card.info.name} - {"Rs."}{item.card.info.defaultPrice/100}</li>
         ))} </div>:
         <div>No items found</div>
         }
          
       </ul> */}
    </div>
   )

}
export default RestaurantMenu;