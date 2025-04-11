import RestaurantCard from './RestaurantCard';
import resList from '../utils/data';
import {useState} from 'react';

const Body=()=>{
   const [restList,setRestList]=useState(resList);
    return(
       <div className='body'>
          <div className='filter'>
              <button className='filter-btn' onClick={()=>{
                 const filterList=restList.filter((res)=>res.info.avgRating >4.6);
                 console.log(filterList)
                 setRestList(filterList);
              }}>Top Rated Restaurant</button>
          </div>
          <div className='res-container'>
              {/* <RestaurantCard resName='Deep Flavour'  cuisines='North Indian Food , Asian' rating='4.4 star' time='38 mins'/>
              <RestaurantCard resName='KFC' cuisines='Burger , Fast Foods' rating='4.2 star' time='42mins'/> */}
 
               {restList.map(restaurant=> (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>),
            )}
             
          </div>
          
       </div>
    )
 }
export default Body; 