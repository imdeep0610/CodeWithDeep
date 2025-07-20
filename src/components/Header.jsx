import {LOGO_URL} from '../utils/constants';
import {CART_URL} from '../utils/constants';
import { useState ,useContext} from 'react';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header=()=>{
    const [loginBtn , setLoginBtn]=useState('Login'); 
    const onlineStatus=useOnlineStatus();
    const {loggedInUser}=useContext(UserContext);
    console.log(loggedInUser);

    //Subscribing the store using useSelector
    const cartItems=useSelector((store)=>store.cart.items);

    return(
      <div className='flex justify-between bg-pink-100 shadow-md mb-2'>
         <div>
         <img className='w-40' src={LOGO_URL} alt="App Logo" />
         </div>
         <div className='flex items-center'>
            <ul className='flex p-5 m-5 '>
               <li className='px-4'>Online Status : {onlineStatus ? '✅' : '🔴'}</li>
               <li className='px-4'><Link to='/'>Home</Link></li>
               <li className='px-4'><Link to='/about'>About Us</Link></li>
               <li className='px-4'><Link to='/contact'>Contact</Link></li>
               <li className='px-4'><Link to='/grocery'>Grocery</Link></li>
               <li className='px-4'><Link to='/cart'><img className='w-5' src={CART_URL} alt="Cart"/>({cartItems.length})</Link></li>
               <button className='px-4' onClick={(()=>{
                  loginBtn==='Login' ? (setLoginBtn('Logout')) : (setLoginBtn('Login'))
               })}>{loginBtn}</button>
               <li>{loggedInUser}</li>
            </ul>
         </div>
      </div>
    )
 }
 export default Header;