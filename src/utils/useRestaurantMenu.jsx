import {useEffect , useState} from 'react';
import { MENU_API } from './constants';
//basically here we are fetching the restaurant data so that RestaurantMenu component has only think about displaying the data 
const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
   useEffect(()=>{
     fetchData();
   },[])
    
const fetchData=async()=>{
    const data=await fetch(MENU_API + resId);
    const json=await data.json();
    setResInfo(json.data);
}
    return resInfo;
}
export default useRestaurantMenu;