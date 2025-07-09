import {CDN_URL} from '../utils/constants';


const RestaurantCard=(props)=>{
    const {resData}=props;
 
    const {
       cloudinaryImageId,
       name,
       cuisines,
       avgRating,
       deliveryTime,
       costForTwo
    }=resData?.info;
    return(
       <div className='res-card m-4 p-4 w-[250px] bg-gray-300  hover:bg-gray-700 rounded-md'>  {/*If we want to write any pixel which is not present then w-[200px] */}
          <img className='res-logo rounded-lg' 
          src={CDN_URL+cloudinaryImageId}
          alt='Logo'/>
          <h3 className='font-bold py-3 text-xl'>{name}</h3>
          <h4>{cuisines.join(',')}</h4>
          <h4>{avgRating}</h4>
          <h4>{deliveryTime} mins</h4>
          <h4>{costForTwo}</h4>
       </div>
    )
}

 //It takes a component and return a component.
 export const withPromotedLabel=(RestaurantCard)=>{
   return(props)=>{
       return(
         <div>
            <label className='absolute bg-black text-white m-2 p-2 rounded'>Promoted</label>
            <RestaurantCard {...props}/>
         </div>
       )
   }
}

export default RestaurantCard;