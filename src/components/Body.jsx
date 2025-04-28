import RestaurantCard , {withPromotedLabel} from './RestaurantCard';
import Shimmer from '../components/Shimmer';
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body=()=>{
   const [restList,setRestList]=useState([]);
   const [filterRestList,setFilterRestList]=useState([]);
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

      /*Here we are using thiswhen we want to filter on the basis of search result bcoz when we use only setRestList , it will 
      give the correct ans in only first time , next time we want to filter it will try to filter on the already filter data*/ 
      setFilterRestList(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log(res);
    }

    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false) return(
      <h1>Looks like you're offline !! Please check your internet connection</h1>
    )

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


/*This is called Conditional Rendering -> rendering of UI on the basis of some condition, it can be done using ternary operator also    
    if(restList.length===0){
        return <Shimmer/>
    }*/

    return restList.length===0 ? (<Shimmer/>) : (
       <div className='body'>
          <div className='filter flex'>
            <div className='search m-4 p-4'>
               <input type='text' className='search-box border border-solid border-black' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
               <button className='px-4 m-4 py-1 rounded-lg bg-green-300' onClick={()=>{
                  console.log(searchText)
                 const filterRes= restList.filter((res)=>{
                      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                  });
                  console.log(filterRes);

                  setFilterRestList(filterRes);
               }}>Search</button>
            </div>
            <div className=' flex items-center'>
               <button className='filter-btn px-4 py-1 rounded-lg m-4 bg-red-300' onClick={()=>{
                 const filterList=restList.filter((res)=>res.info.avgRating >4.2);
                 console.log(filterList)
               //   setRestList(filterList);
                 setFilterRestList(filterList)
              }}>Top Rated Restaurant</button>
              </div>
          </div>
          <div className='res-container flex flex-wrap'>
              {/* <RestaurantCard resName='Deep Flavour'  cuisines='North Indian Food , Asian' rating='4.4 star' time='38 mins'/>
              <RestaurantCard resName='KFC' cuisines='Burger , Fast Foods' rating='4.2 star' time='42mins'/> */}
 
               {filterRestList.map(restaurant=> (
                 <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                   {restaurant.info.promoted ? (
                     <RestaurantCardPromoted resData={restaurant}/>
                   ) :(
                     <RestaurantCard resData={restaurant}/>
                   )}
                  </Link>),
            )}
             
          </div>
          
       </div>
    )
 }
export default Body; 