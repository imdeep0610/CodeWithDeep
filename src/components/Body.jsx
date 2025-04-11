import RestaurantCard from './RestaurantCard';
import Shimmer from '../components/Shimmer';
import {useState,useEffect} from 'react';

const Body=()=>{
   const [restList,setRestList]=useState([]);
   const [searchText,setSearchText]=useState('');

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
      const data=await fetch(
         'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.594048&lng=88.335677&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );

      const res=await data.json();
      setRestList(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log(res);
    }


/*This is called Conditional Rendering -> rendering of UI on the basis of some condition, it can be done using ternary operator also    
    if(restList.length===0){
        return <Shimmer/>
    }*/

    return restList.length===0 ? (<Shimmer/>) : (
       <div className='body'>
          <div className='filter'>
            <div className='search'>
               <input type='text' className='search-box' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
               <button onClick={()=>{
                  console.log(searchText)
                 const filterRes= restList.filter((res)=>{
                     res.info.name.includes(searchText);
                  });
                    setRestList(filterRes);
               }}>Search</button>
            </div>
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