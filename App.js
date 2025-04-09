import React from 'react';
import ReactDOM from 'react-dom/client';
import AppLogo from './asset/AppLogo.jpg';
import cart from './asset/cart.png';


/*
Heading -> 1.Logo  2.Nav Items
Body -> 1.Search Bar 2.RestaurantContainer 
                           Restaurant Card
                              1.Img   2.Res Name  3.Star Rating  4.Cuisine
Footer -> 1.Copyright  2.Links  3.Address 4.Contacts
*/

const Header=()=>{
   return(
     <div className='navbar'>
        <div className='logo'>
        <img className='image' src='https://cdn2.f-cdn.com/contestentries/2426851/74260034/6689bc27dfb41_thumb900.jpg' alt="App Logo" />
        </div>
        <div className='nav-items'>
           <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#about'>About Us</a></li>
              <li><a href='#contact'>Contact</a></li>
              <li><a href='#cart'><img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="Cart"/></a></li>
           </ul>
        </div>
     </div>
   )
}

resObj={
   "info": {
   "id": "8244",
   "name": "Polar Bear",
   "cloudinaryImageId": "57262fe3839f0bff174f3d7e7cc8a2b4",
   "locality": "Koramangala",
   "areaName": "Koramangala",
   "costForTwo": "₹200 for two",
   "cuisines": [
   "Ice Cream",
   "Desserts"
   ],
   "avgRating": 4.6,
   "parentId": "726",
   "avgRatingString": "4.6",
   "totalRatingsString": "14K+",
   "sla": {
   "deliveryTime": 17,
   "lastMileTravel": 0.6,
   "serviceability": "SERVICEABLE",
   "slaString": "15-20 mins",
   "lastMileTravelString": "0.6 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-09 23:59:00",
   "opened": true
   },
   "badges": {
"imageBadges": [
{
"imageId": "bolt/bolt%206.png",
"description": "bolt!"
},
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "D",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "bolt/bolt%206.png"
}
},
{
"attributes": {
   "description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.6",
"ratingCount": "3.1K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7fe0345d-6077-4624-a2e0-6a49efe5cc0f"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/polar-bear-koramangala-rest8244",
"type": "WEBLINK"
}
}

const RestaurantCard=(props)=>{
   return(
      <div className='res-card'>
         <img className='res-logo' 
         src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/7/26/a83f89b7-6c26-40bd-9ef5-17f0f9868459_012bb51b-124b-4acc-a745-f9aab570b6e6.JPG' 
         alt='Logo'/>
         <h3>{props.resName}</h3>
         <h4>{props.cuisines}</h4>
         <h4>{props.rating}</h4>
         <h4>{props.time}</h4>
      </div>
   )
}

const Body=()=>{
   return(
      <div className='body'>
         <div className='search'>Search</div>
         <div className='res-container'>
             <RestaurantCard resName='Deep Flavour'  cuisines='North Indian Food , Asian' rating='4.4 star' time='38 mins'/>
             <RestaurantCard resName='KFC' cuisines='Burger , Fast Foods' rating='4.2 star' time='42mins'/>
            
         </div>
      </div>
   )
}


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