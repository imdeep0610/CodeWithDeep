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

resList=[
   {
   "info": {
   "id": "565580",
   "name": "KFC",
   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/d2e6497c-c00e-47ce-8fcb-e0e3617a9d7b_565580.JPG",
   "locality": "Sealdah",
   "areaName": "Esplanade",
   "costForTwo": "₹400 for two",
   "cuisines": [
   "Fast Food",
   "Burgers",
   "Rolls & Wraps"
   ],
   "avgRating": 4.4,
   "parentId": "547",
   "avgRatingString": "4.4",
   "totalRatingsString": "4.2K+",
   "sla": {
   "deliveryTime": 33,
   "lastMileTravel": 6.2,
   "serviceability": "SERVICEABLE",
   "slaString": "30-35 mins",
   "lastMileTravelString": "6.2 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-10 03:00:00",
   "opened": true
   },
   "badges": {
   "imageBadges": [
   {
   "imageId": "Rxawards/_CATEGORY-Burger.png",
   "description": "Delivery!"
   }
   ]
   },
   "isOpen": true,
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {
   "badgeObject": [
   {
   "attributes": {
   "description": "Delivery!",
   "imageId": "Rxawards/_CATEGORY-Burger.png"
   }
   }
   ]
   },
   "textBased": {},
   "textExtendedBadges": {}
   }
   },
   "aggregatedDiscountInfoV3": {
   "header": "ITEMS",
   "subHeader": "AT ₹59"
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
   "rating": "4.1",
   "ratingCount": "985"
   },
   "source": "GOOGLE",
   "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
   },
   "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   },
   "analytics": {
   "context": "seo-data-6bc7b771-e101-4b70-8cca-8c2dfc6499c4"
   },
   "cta": {
   "link": "https://www.swiggy.com/city/kolkata/kfc-sealdah-esplanade-rest565580",
   "type": "WEBLINK"
   }
   },
   {
   "info": {
   "id": "407661",
   "name": "Burger King",
   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/5e5b7fa5-61b2-44e2-8612-5ee68fa97e1c_407661.jpg",
   "locality": "New Market",
   "areaName": "Esplanade",
   "costForTwo": "₹350 for two",
   "cuisines": [
   "Burgers",
   "American"
   ],
   "avgRating": 4.3,
   "parentId": "166",
   "avgRatingString": "4.3",
   "totalRatingsString": "17K+",
   "sla": {
   "deliveryTime": 28,
   "lastMileTravel": 5.9,
   "serviceability": "SERVICEABLE",
   "slaString": "25-30 mins",
   "lastMileTravelString": "5.9 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-10 06:00:00",
   "opened": true
   },
   "badges": {},
   "isOpen": true,
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {},
   "textBased": {},
   "textExtendedBadges": {}
   }
   },
   "aggregatedDiscountInfoV3": {
   "header": "60% OFF",
   "subHeader": "UPTO ₹120"
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
   "rating": "4.5",
   "ratingCount": "2.0K+"
   },
   "source": "GOOGLE",
   "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
   },
   "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   },
   "analytics": {
   "context": "seo-data-6bc7b771-e101-4b70-8cca-8c2dfc6499c4"
   },
   "cta": {
   "link": "https://www.swiggy.com/city/kolkata/burger-king-new-market-esplanade-rest407661",
   "type": "WEBLINK"
   }
   },
   {
   "info": {
   "id": "341240",
   "name": "La Pino'z Pizza",
   "cloudinaryImageId": "tx4nkcrymnxl4skumwm9",
   "locality": "Central Kolkata",
   "areaName": "Park Street Area",
   "costForTwo": "₹300 for two",
   "cuisines": [
   "Pizzas",
   "Pastas",
   "Italian",
   "Desserts",
   "Beverages"
   ],
   "avgRating": 4.2,
   "parentId": "4961",
   "avgRatingString": "4.2",
   "totalRatingsString": "13K+",
   "sla": {
   "deliveryTime": 33,
   "lastMileTravel": 7.2,
   "serviceability": "SERVICEABLE",
   "slaString": "30-35 mins",
   "lastMileTravelString": "7.2 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-10 04:00:00",
   "opened": true
   },
   "badges": {
   "imageBadges": [
   {
   "imageId": "Rxawards/_CATEGORY-Pizza.png",
   "description": "Delivery!"
   }
   ]
   },
   "isOpen": true,
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {
   "badgeObject": [
   {
   "attributes": {
   "description": "Delivery!",
   "imageId": "Rxawards/_CATEGORY-Pizza.png"
   }
   }
   ]
   },
   "textBased": {},
   "textExtendedBadges": {}
   }
   },
   "aggregatedDiscountInfoV3": {
   "header": "ITEMS",
   "subHeader": "AT ₹99"
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
   "rating": "--"
   }
   },
   "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   },
   "analytics": {
   "context": "seo-data-6bc7b771-e101-4b70-8cca-8c2dfc6499c4"
   },
   "cta": {
   "link": "https://www.swiggy.com/city/kolkata/la-pinoz-pizza-central-park-street-area-rest341240",
   "type": "WEBLINK"
   }
   },
   {
   "info": {
   "id": "8912",
   "name": "Subway",
   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/7d7000b3-e78a-4dda-b345-1f6d37307a4b_8912.JPG",
   "locality": "Park Street",
   "areaName": "Park Street",
   "costForTwo": "₹350 for two",
   "cuisines": [
   "sandwich",
   "Salads",
   "wrap",
   "Healthy Food"
   ],
   "avgRating": 4.3,
   "parentId": "2",
   "avgRatingString": "4.3",
   "totalRatingsString": "23K+",
   "sla": {
   "deliveryTime": 32,
   "lastMileTravel": 6.6,
   "serviceability": "SERVICEABLE",
   "slaString": "30-35 mins",
   "lastMileTravelString": "6.6 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-10 07:59:00",
   "opened": true
   },
   "badges": {},
   "isOpen": true,
   "aggregatedDiscountInfoV2": {},
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {},
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
   "rating": "4.2",
   "ratingCount": "1.3K+"
   },
   "source": "GOOGLE",
   "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
   },
   "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   },
   "analytics": {
   "context": "seo-data-6bc7b771-e101-4b70-8cca-8c2dfc6499c4"
   },
   "cta": {
   "link": "https://www.swiggy.com/city/kolkata/subway-park-street-rest8912",
   "type": "WEBLINK"
   }
   },
   {
   "info": {
   "id": "651011",
   "name": "Pizza Hut",
   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/93c007f0-777d-402a-bdeb-17eef97512f0_651011.jpg",
   "locality": "New Market",
   "areaName": "Esplanade",
   "costForTwo": "₹350 for two",
   "cuisines": [
   "Pizzas"
   ],
   "avgRating": 4.3,
   "parentId": "721",
   "avgRatingString": "4.3",
   "totalRatingsString": "1.6K+",
   "sla": {
   "deliveryTime": 39,
   "lastMileTravel": 5.5,
   "serviceability": "SERVICEABLE",
   "slaString": "35-40 mins",
   "lastMileTravelString": "5.5 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-10 04:00:00",
   "opened": true
   },
   "badges": {
   "imageBadges": [
   {
   "imageId": "Rxawards/_CATEGORY-Pizza.png",
   "description": "Delivery!"
   }
   ]
   },
   "isOpen": true,
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {
   "badgeObject": [
   {
   "attributes": {
   "description": "Delivery!",
   "imageId": "Rxawards/_CATEGORY-Pizza.png"
   }
   }
   ]
   },
   "textBased": {},
   "textExtendedBadges": {}
   }
   },
   "aggregatedDiscountInfoV3": {
   "header": "40% OFF",
   "subHeader": "UPTO ₹80"
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
   "rating": "--"
   }
   },
   "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   },
   "analytics": {
   "context": "seo-data-6bc7b771-e101-4b70-8cca-8c2dfc6499c4"
   },
   "cta": {
   "link": "https://www.swiggy.com/city/kolkata/pizza-hut-new-market-esplanade-rest651011",
   "type": "WEBLINK"
   }
   },
   {
   "info": {
   "id": "18518",
   "name": "Wow! Momo",
   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/19/4e3076b6-88e2-4c5a-bbce-2c260339e48d_18518.JPG",
   "locality": "Girish Park",
   "areaName": "Girish Park",
   "costForTwo": "₹300 for two",
   "cuisines": [
   "Momos",
   "Chinese",
   "fastfood",
   "Asian",
   "Beverages"
   ],
   "avgRating": 4.5,
   "parentId": "1776",
   "avgRatingString": "4.5",
   "totalRatingsString": "9.7K+",
   "sla": {
   "deliveryTime": 26,
   "lastMileTravel": 4.6,
   "serviceability": "SERVICEABLE",
   "slaString": "25-30 mins",
   "lastMileTravelString": "4.6 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-10 02:00:00",
   "opened": true
   },
   "badges": {
   "imageBadges": [
   {
   "imageId": "Rxawards/_CATEGORY-Chinese.png",
   "description": "Delivery!"
   }
   ]
   },
   "isOpen": true,
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {
   "badgeObject": [
   {
   "attributes": {
   "description": "Delivery!",
   "imageId": "Rxawards/_CATEGORY-Chinese.png"
   }
   }
   ]
   },
   "textBased": {},
   "textExtendedBadges": {}
   }
   },
   "aggregatedDiscountInfoV3": {
   "header": "ITEMS",
   "subHeader": "AT ₹99"
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
   "rating": "4.0",
   "ratingCount": "510"
   },
   "source": "GOOGLE",
   "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
   },
   "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   },
   "analytics": {
   "context": "seo-data-6bc7b771-e101-4b70-8cca-8c2dfc6499c4"
   },
   "cta": {
   "link": "https://www.swiggy.com/city/kolkata/wow-momo-girish-park-rest18518",
   "type": "WEBLINK"
   }
   },
   {
   "info": {
   "id": "384612",
   "name": "Baskin Robbins - Ice Cream Desserts",
   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/f2bd9122-a0d5-4d99-9de0-3972cd8ac8b2_384612.jpg",
   "locality": "KOLKATA MUNICIPAL CORPORATION",
   "areaName": "Burrabazar",
   "costForTwo": "₹250 for two",
   "cuisines": [
   "Desserts",
   "Ice Cream"
   ],
   "avgRating": 4.7,
   "veg": true,
   "parentId": "5588",
   "avgRatingString": "4.7",
   "totalRatingsString": "1.0K+",
   "sla": {
   "deliveryTime": 23,
   "lastMileTravel": 4.3,
   "serviceability": "SERVICEABLE",
   "slaString": "20-25 mins",
   "lastMileTravelString": "4.3 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-10 02:30:00",
   "opened": true
   },
   "badges": {
   "imageBadges": [
   {
   "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
   "description": "Delivery!"
   }
   ]
   },
   "isOpen": true,
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {
   "badgeObject": [
   {
   "attributes": {
   "description": "Delivery!",
   "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
   }
   }
   ]
   },
   "textBased": {},
   "textExtendedBadges": {}
   }
   },
   "aggregatedDiscountInfoV3": {
   "header": "₹125 OFF",
   "subHeader": "ABOVE ₹199",
   "discountTag": "FLAT DEAL"
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
   "rating": "--"
   }
   },
   "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   },
   "analytics": {
   "context": "seo-data-6bc7b771-e101-4b70-8cca-8c2dfc6499c4"
   },
   "cta": {
   "link": "https://www.swiggy.com/city/kolkata/baskin-robbins-ice-cream-desserts-municipal-corporation-burrabazar-rest384612",
   "type": "WEBLINK"
   }
   },
   {
   "info": {
   "id": "231998",
   "name": "Cafe Coffee Day",
   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/19/58c9a4e4-ba9d-4926-b05d-875cf7e0972b_231998.JPG",
   "locality": "B B D Bagh",
   "areaName": "Shyambazar",
   "costForTwo": "₹400 for two",
   "cuisines": [
   "Beverages",
   "Cafe",
   "Snacks",
   "Desserts",
   "Burgers",
   "Ice Cream",
   "Bakery",
   "Fast Food"
   ],
   "avgRating": 4.6,
   "parentId": "1",
   "avgRatingString": "4.6",
   "totalRatingsString": "851",
   "sla": {
   "deliveryTime": 32,
   "lastMileTravel": 5.7,
   "serviceability": "SERVICEABLE",
   "slaString": "30-35 mins",
   "lastMileTravelString": "5.7 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-17 00:00:00",
   "opened": true
   },
   "badges": {},
   "isOpen": true,
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {},
   "textBased": {},
   "textExtendedBadges": {}
   }
   },
   "aggregatedDiscountInfoV3": {
   "header": "50% OFF",
   "subHeader": "UPTO ₹100"
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
   "rating": "4.2",
   "ratingCount": "1.6K+"
   },
   "source": "GOOGLE",
   "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
   },
   "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   },
   "analytics": {
   "context": "seo-data-6bc7b771-e101-4b70-8cca-8c2dfc6499c4"
   },
   "cta": {
   "link": "https://www.swiggy.com/city/kolkata/cafe-coffee-day-b-b-d-bagh-shyambazar-rest231998",
   "type": "WEBLINK"
   }
   },
   {
   "info": {
   "id": "285852",
   "name": "Starbucks Coffee",
   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/17/8af1ff75-6ff1-45cc-b49c-7639fb2e5980_285852.JPG",
   "locality": "Park Street",
   "areaName": "Park Street",
   "costForTwo": "₹400 for two",
   "cuisines": [
   "Beverages",
   "Cafe",
   "Snacks",
   "Desserts",
   "Bakery",
   "Ice Cream"
   ],
   "avgRating": 4.4,
   "parentId": "195515",
   "avgRatingString": "4.4",
   "totalRatingsString": "2.8K+",
   "sla": {
   "deliveryTime": 29,
   "lastMileTravel": 6.5,
   "serviceability": "SERVICEABLE",
   "slaString": "25-30 mins",
   "lastMileTravelString": "6.5 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-10 00:30:00",
   "opened": true
   },
   "badges": {
   "imageBadges": [
   {
   "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
   "description": "Delivery!"
   }
   ]
   },
   "isOpen": true,
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {
   "badgeObject": [
   {
   "attributes": {
   "description": "Delivery!",
   "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
   }
   }
   ]
   },
   "textBased": {},
   "textExtendedBadges": {}
   }
   },
   "aggregatedDiscountInfoV3": {
   "header": "ITEMS",
   "subHeader": "AT ₹197"
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
   "rating": "4.4",
   "ratingCount": "5.7K+"
   },
   "source": "GOOGLE",
   "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
   },
   "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   },
   "analytics": {
   "context": "seo-data-6bc7b771-e101-4b70-8cca-8c2dfc6499c4"
   },
   "cta": {
   "link": "https://www.swiggy.com/city/kolkata/starbucks-coffee-park-street-rest285852",
   "type": "WEBLINK"
   }
   },
   {
   "info": {
   "id": "795338",
   "name": "Taco Bell",
   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/7/5b0b5ade-26ee-470d-8502-548399770455_795338.jpg",
   "locality": "Park Street area",
   "areaName": "BFL Estate East Gate",
   "costForTwo": "₹300 for two",
   "cuisines": [
   "Mexican",
   "Fast Food",
   "Snacks"
   ],
   "avgRating": 4.4,
   "parentId": "1557",
   "avgRatingString": "4.4",
   "totalRatingsString": "1.4K+",
   "sla": {
   "deliveryTime": 29,
   "lastMileTravel": 6.3,
   "serviceability": "SERVICEABLE",
   "slaString": "25-30 mins",
   "lastMileTravelString": "6.3 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-10 01:00:00",
   "opened": true
   },
   "badges": {},
   "isOpen": true,
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {},
   "textBased": {},
   "textExtendedBadges": {}
   }
   },
   "aggregatedDiscountInfoV3": {
   "header": "ITEMS",
   "subHeader": "AT ₹129"
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
   "rating": "--"
   }
   },
   "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   },
   "analytics": {
   "context": "seo-data-6bc7b771-e101-4b70-8cca-8c2dfc6499c4"
   },
   "cta": {
   "link": "https://www.swiggy.com/city/kolkata/taco-bell-park-street-area-bfl-estate-east-gate-rest795338",
   "type": "WEBLINK"
   }
   },
   {
   "info": {
   "id": "10734",
   "name": "Arsalan",
   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/b255e719-7903-4f84-b391-ec85b0056aa1_10734.jpg",
   "locality": "Hati Bagan",
   "areaName": "Hatibagan",
   "costForTwo": "₹500 for two",
   "cuisines": [
   "Biryani",
   "Mughlai",
   "Indian",
   "Kebabs",
   "Tandoor",
   "Awadhi"
   ],
   "avgRating": 4.5,
   "parentId": "1255",
   "avgRatingString": "4.5",
   "totalRatingsString": "68K+",
   "sla": {
   "deliveryTime": 27,
   "lastMileTravel": 6.3,
   "serviceability": "SERVICEABLE",
   "slaString": "25-30 mins",
   "lastMileTravelString": "6.3 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-10 04:00:00",
   "opened": true
   },
   "badges": {
   "imageBadges": [
   {
   "imageId": "Rxawards/_CATEGORY-Biryani.png",
   "description": "Delivery!"
   }
   ]
   },
   "isOpen": true,
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {
   "badgeObject": [
   {
   "attributes": {
   "description": "Delivery!",
   "imageId": "Rxawards/_CATEGORY-Biryani.png"
   }
   }
   ]
   },
   "textBased": {},
   "textExtendedBadges": {}
   }
   },
   "aggregatedDiscountInfoV3": {
   "header": "ITEMS",
   "subHeader": "AT ₹759"
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
   "rating": "4.2",
   "ratingCount": "13K+"
   },
   "source": "GOOGLE",
   "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
   },
   "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   },
   "analytics": {
   "context": "seo-data-6bc7b771-e101-4b70-8cca-8c2dfc6499c4"
   },
   "cta": {
   "link": "https://www.swiggy.com/city/kolkata/arsalan-hati-bagan-hatibagan-rest10734",
   "type": "WEBLINK"
   }
   },
   {
   "info": {
   "id": "435964",
   "name": "Keventers - Milkshakes & Desserts",
   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/1/d215cff7-d119-4841-a808-a9bd0249be1c_435964.jpg",
   "locality": "New Empire Cinema, Kolkata",
   "areaName": "New Empire Cinema",
   "costForTwo": "₹200 for two",
   "cuisines": [
   "Beverages",
   "Ice Cream",
   "Desserts"
   ],
   "avgRating": 4.5,
   "veg": true,
   "parentId": "268997",
   "avgRatingString": "4.5",
   "totalRatingsString": "1.5K+",
   "sla": {
   "deliveryTime": 25,
   "lastMileTravel": 5.8,
   "serviceability": "SERVICEABLE",
   "slaString": "25-30 mins",
   "lastMileTravelString": "5.8 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-10 02:00:00",
   "opened": true
   },
   "badges": {},
   "isOpen": true,
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {},
   "textBased": {},
   "textExtendedBadges": {}
   }
   },
   "aggregatedDiscountInfoV3": {
   "header": "ITEMS",
   "subHeader": "AT ₹100"
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
   "rating": "--"
   }
   },
   "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   },
   "analytics": {
   "context": "seo-data-6bc7b771-e101-4b70-8cca-8c2dfc6499c4"
   },
   "cta": {
   "link": "https://www.swiggy.com/city/kolkata/keventers-milkshakes-and-desserts-new-empire-cinema-rest435964",
   "type": "WEBLINK"
   }
   },
   {
   "info": {
   "id": "651931",
   "name": "Kwality Walls Ice Cream and More",
   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/558ecdec-88de-4d27-94fa-dfeccd817c73_651931.JPG",
   "locality": "Haradhole Lane",
   "areaName": "Dumdum",
   "costForTwo": "₹200 for two",
   "cuisines": [
   "Desserts",
   "Ice Cream",
   "Ice Cream Cakes"
   ],
   "avgRating": 4.6,
   "veg": true,
   "parentId": "582",
   "avgRatingString": "4.6",
   "totalRatingsString": "358",
   "sla": {
   "deliveryTime": 26,
   "lastMileTravel": 5.8,
   "serviceability": "SERVICEABLE",
   "slaString": "25-30 mins",
   "lastMileTravelString": "5.8 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-10 01:15:00",
   "opened": true
   },
   "badges": {
   "imageBadges": [
   {
   "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
   "description": "Delivery!"
   }
   ]
   },
   "isOpen": true,
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {
   "badgeObject": [
   {
   "attributes": {
   "description": "Delivery!",
   "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
   }
   }
   ]
   },
   "textBased": {},
   "textExtendedBadges": {}
   }
   },
   "aggregatedDiscountInfoV3": {
   "header": "40% OFF",
   "subHeader": "UPTO ₹80"
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
   "rating": "--"
   }
   },
   "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   },
   "analytics": {
   "context": "seo-data-6bc7b771-e101-4b70-8cca-8c2dfc6499c4"
   },
   "cta": {
   "link": "https://www.swiggy.com/city/kolkata/kwality-walls-ice-cream-and-more-haradhole-lane-dumdum-rest651931",
   "type": "WEBLINK"
   }
   },
   {
   "info": {
   "id": "37107",
   "name": "Natural Ice Cream",
   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/cda443ee-725b-4cf9-b63f-8cb5548aa6c2_37107.jpg",
   "locality": "Park Street",
   "areaName": "Park Street",
   "costForTwo": "₹150 for two",
   "cuisines": [
   "Ice Cream",
   "Desserts"
   ],
   "avgRating": 4.8,
   "parentId": "2093",
   "avgRatingString": "4.8",
   "totalRatingsString": "24K+",
   "sla": {
   "deliveryTime": 25,
   "lastMileTravel": 6.8,
   "serviceability": "SERVICEABLE",
   "slaString": "20-25 mins",
   "lastMileTravelString": "6.8 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-10 01:00:00",
   "opened": true
   },
   "badges": {
   "imageBadges": [
   {
   "imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
   "description": "Delivery!"
   }
   ]
   },
   "isOpen": true,
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {
   "badgeObject": [
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
   "aggregatedDiscountInfoV3": {
   "header": "20% OFF",
   "subHeader": "UPTO ₹50"
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
   "ratingCount": "13K+"
   },
   "source": "GOOGLE",
   "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
   },
   "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   },
   "analytics": {
   "context": "seo-data-6bc7b771-e101-4b70-8cca-8c2dfc6499c4"
   },
   "cta": {
   "link": "https://www.swiggy.com/city/kolkata/natural-ice-cream-park-street-rest37107",
   "type": "WEBLINK"
   }
   },
   {
   "info": {
   "id": "806700",
   "name": "KFC",
   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/a35799f7-80c8-4616-85ef-640ee4c948de_806700.JPG",
   "locality": "Huges Road",
   "areaName": "Arcadia Centre",
   "costForTwo": "₹400 for two",
   "cuisines": [
   "Fast Food",
   "Burgers",
   "Rolls & Wraps"
   ],
   "avgRating": 4.4,
   "parentId": "116758",
   "avgRatingString": "4.4",
   "totalRatingsString": "2.0K+",
   "sla": {
   "deliveryTime": 39,
   "lastMileTravel": 9.6,
   "serviceability": "SERVICEABLE",
   "slaString": "35-40 mins",
   "lastMileTravelString": "9.6 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-10 03:00:00",
   "opened": true
   },
   "badges": {
   "imageBadges": [
   {
   "imageId": "Rxawards/_CATEGORY-Burger.png",
   "description": "Delivery!"
   }
   ]
   },
   "isOpen": true,
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {
   "badgeObject": [
   {
   "attributes": {
   "description": "Delivery!",
   "imageId": "Rxawards/_CATEGORY-Burger.png"
   }
   }
   ]
   },
   "textBased": {},
   "textExtendedBadges": {}
   }
   },
   "aggregatedDiscountInfoV3": {
   "header": "ITEMS",
   "subHeader": "AT ₹59"
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
   "rating": "--"
   }
   },
   "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   },
   "analytics": {
   "context": "seo-data-6bc7b771-e101-4b70-8cca-8c2dfc6499c4"
   },
   "cta": {
   "link": "https://www.swiggy.com/city/kolkata/kfc-huges-road-arcadia-centre-rest806700",
   "type": "WEBLINK"
   }
   },
   {
   "info": {
   "id": "432094",
   "name": "Keventers Waffles & Ice Cream",
   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/b7303d38-827f-40f8-aee8-dc3b04e48e7e_432094.jpg",
   "locality": "New Empire Cinema, Kolkata",
   "areaName": "New Empire Cinema",
   "costForTwo": "₹200 for two",
   "cuisines": [
   "Ice Cream",
   "Desserts"
   ],
   "avgRating": 4.5,
   "veg": true,
   "parentId": "624796",
   "avgRatingString": "4.5",
   "totalRatingsString": "707",
   "sla": {
   "deliveryTime": 32,
   "lastMileTravel": 5.8,
   "serviceability": "SERVICEABLE",
   "slaString": "30-35 mins",
   "lastMileTravelString": "5.8 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-10 02:00:00",
   "opened": true
   },
   "badges": {},
   "isOpen": true,
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {},
   "textBased": {},
   "textExtendedBadges": {}
   }
   },
   "aggregatedDiscountInfoV3": {
   "header": "ITEMS",
   "subHeader": "AT ₹100"
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
   "rating": "--"
   }
   },
   "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   },
   "analytics": {
   "context": "seo-data-6bc7b771-e101-4b70-8cca-8c2dfc6499c4"
   },
   "cta": {
   "link": "https://www.swiggy.com/city/kolkata/keventers-waffles-and-ice-cream-new-empire-cinema-rest432094",
   "type": "WEBLINK"
   }
   },
   {
   "info": {
   "id": "361755",
   "name": "Mama Mia! - Italian Ice Creams & Cakes",
   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/44d09603-aad5-44ad-bbc9-17159a9ed3dc_361755.jpg",
   "locality": "Central Kolkata",
   "areaName": "Esplanade",
   "costForTwo": "₹250 for two",
   "cuisines": [
   "Ice Cream",
   "Desserts",
   "Bakery",
   "Ice Cream Cakes"
   ],
   "avgRating": 4.6,
   "parentId": "471728",
   "avgRatingString": "4.6",
   "totalRatingsString": "2.6K+",
   "sla": {
   "deliveryTime": 28,
   "lastMileTravel": 6.9,
   "serviceability": "SERVICEABLE",
   "slaString": "25-30 mins",
   "lastMileTravelString": "6.9 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-10 02:00:00",
   "opened": true
   },
   "badges": {
   "imageBadges": [
   {
   "imageId": "newg.png",
   "description": "Gourmet"
   }
   ]
   },
   "isOpen": true,
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {
   "badgeObject": [
   {
   "attributes": {
   "description": "Gourmet",
   "imageId": "newg.png"
   }
   }
   ]
   },
   "textBased": {},
   "textExtendedBadges": {}
   }
   },
   "aggregatedDiscountInfoV3": {
   "header": "40% OFF",
   "subHeader": "UPTO ₹80"
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
   "rating": "--"
   }
   },
   "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   },
   "analytics": {
   "context": "seo-data-6bc7b771-e101-4b70-8cca-8c2dfc6499c4"
   },
   "cta": {
   "link": "https://www.swiggy.com/city/kolkata/mama-mia-italian-ice-creams-and-cakes-central-esplanade-rest361755",
   "type": "WEBLINK"
   }
   },
   {
   "info": {
   "id": "356638",
   "name": "Delights by INOX",
   "cloudinaryImageId": "b857fcf611707fedd3773eb02688f925",
   "locality": "5 Jawaharlal Nehru Road",
   "areaName": "Taltala",
   "costForTwo": "₹400 for two",
   "cuisines": [
   "Snacks"
   ],
   "avgRating": 4.3,
   "veg": true,
   "parentId": "385095",
   "avgRatingString": "4.3",
   "totalRatingsString": "113",
   "sla": {
   "deliveryTime": 32,
   "lastMileTravel": 5.6,
   "serviceability": "SERVICEABLE",
   "slaString": "30-35 mins",
   "lastMileTravelString": "5.6 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-10 01:00:00",
   "opened": true
   },
   "badges": {
   "imageBadges": [
   {
   "imageId": "v1695133679/badges/Pure_Veg111.png",
   "description": "pureveg"
   }
   ]
   },
   "isOpen": true,
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {
   "badgeObject": [
   {
   "attributes": {
   "description": "pureveg",
   "imageId": "v1695133679/badges/Pure_Veg111.png"
   }
   }
   ]
   },
   "textBased": {},
   "textExtendedBadges": {}
   }
   },
   "aggregatedDiscountInfoV3": {
   "header": "60% OFF",
   "subHeader": "UPTO ₹120"
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
   "rating": "--"
   }
   },
   "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   },
   "analytics": {
   "context": "seo-data-6bc7b771-e101-4b70-8cca-8c2dfc6499c4"
   },
   "cta": {
   "link": "https://www.swiggy.com/city/kolkata/delights-by-inox-5-jawaharlal-nehru-road-taltala-rest356638",
   "type": "WEBLINK"
   }
   },
   {
   "info": {
   "id": "851896",
   "name": "Wow! Kulfi",
   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/9761e695-8ff0-4dc4-bd25-24f3df8c0a6d_851896.JPG",
   "locality": "Taltala",
   "areaName": "Park Street",
   "costForTwo": "₹120 for two",
   "cuisines": [
   "Ice Cream",
   "Desserts"
   ],
   "avgRating": 4.9,
   "veg": true,
   "parentId": "501088",
   "avgRatingString": "4.9",
   "totalRatingsString": "23",
   "sla": {
   "deliveryTime": 28,
   "lastMileTravel": 6.5,
   "serviceability": "SERVICEABLE",
   "slaString": "25-30 mins",
   "lastMileTravelString": "6.5 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-10 03:00:00",
   "opened": true
   },
   "badges": {
   "imageBadges": [
   {
   "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
   "description": "OnlyOnSwiggy"
   }
   ]
   },
   "isOpen": true,
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {
   "badgeObject": [
   {
   "attributes": {
   "description": "OnlyOnSwiggy",
   "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
   }
   }
   ]
   },
   "textBased": {},
   "textExtendedBadges": {}
   }
   },
   "aggregatedDiscountInfoV3": {
   "header": "60% OFF",
   "subHeader": "UPTO ₹120"
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
   "rating": "--"
   }
   },
   "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   },
   "analytics": {
   "context": "seo-data-6bc7b771-e101-4b70-8cca-8c2dfc6499c4"
   },
   "cta": {
   "link": "https://www.swiggy.com/city/kolkata/wow-kulfi-taltala-park-street-rest851896",
   "type": "WEBLINK"
   }
   },
   {
   "info": {
   "id": "580620",
   "name": "GetAWay-Ice Creams & Desserts",
   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/12/c91efabd-f648-462e-958c-a52060aadb1d_580620 (2).jpg",
   "locality": "South Kolkata",
   "areaName": "Dhakuria",
   "costForTwo": "₹200 for two",
   "cuisines": [
   "Ice Cream",
   "Desserts",
   "Healthy Food"
   ],
   "avgRating": 4.7,
   "veg": true,
   "parentId": "354819",
   "avgRatingString": "4.7",
   "totalRatingsString": "676",
   "sla": {
   "deliveryTime": 38,
   "lastMileTravel": 11.5,
   "serviceability": "SERVICEABLE",
   "slaString": "35-40 mins",
   "lastMileTravelString": "11.5 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2025-04-10 01:00:00",
   "opened": true
   },
   "badges": {
   "textExtendedBadges": [
   {
   "iconId": "guiltfree/GF_Logo_android_3x",
   "shortDescription": "brand",
   "fontColor": "#7E808C"
   }
   ]
   },
   "isOpen": true,
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {},
   "textBased": {},
   "textExtendedBadges": {
   "badgeObject": [
   {
   "attributes": {
   "description": "",
   "fontColor": "#7E808C",
   "iconId": "guiltfree/GF_Logo_android_3x",
   "shortDescription": "brand"
   }
   }
   ]
   }
   }
   },
   "aggregatedDiscountInfoV3": {
   "header": "60% OFF",
   "subHeader": "UPTO ₹120"
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
   "rating": "--"
   }
   },
   "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   },
   "analytics": {
   "context": "seo-data-6bc7b771-e101-4b70-8cca-8c2dfc6499c4"
   },
   "cta": {
   "link": "https://www.swiggy.com/city/kolkata/getaway-ice-creams-and-desserts-south-dhakuria-rest580620",
   "type": "WEBLINK"
   }
   }
   ]
   


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
      <div className='res-card'>
         <img className='res-logo' 
         src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId}
         alt='Logo'/>
         <h3>{name}</h3>
         <h4>{cuisines.join(',')}</h4>
         <h4>{avgRating}</h4>
         <h4>{deliveryTime} mins</h4>
         <h4>{costForTwo}</h4>
      </div>
   )
}

const Body=()=>{
   return(
      <div className='body'>
         <div className='search'>Search</div>
         <div className='res-container'>
             {/* <RestaurantCard resName='Deep Flavour'  cuisines='North Indian Food , Asian' rating='4.4 star' time='38 mins'/>
             <RestaurantCard resName='KFC' cuisines='Burger , Fast Foods' rating='4.2 star' time='42mins'/> */}

              {resList.map(restaurant=> (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
            
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