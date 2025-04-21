import {LOGO_URL} from '../utils/constants';
import {CART_URL} from '../utils/constants';
import { useState } from 'react';
import {Link} from 'react-router-dom';

const Header=()=>{
    const [loginBtn , setLoginBtn]=useState('Login'); 

    return(
      <div className='navbar'>
         <div className='logo'>
         <img className='image' src={LOGO_URL} alt="App Logo" />
         </div>
         <div className='nav-items'>
            <ul>
               <li><Link to='/'>Home</Link></li>
               <li><Link to='/about'>About Us</Link></li>
               <li><Link to='/contact'>Contact</Link></li>
               <li><Link to='/cart'><img src={CART_URL} alt="Cart"/></Link></li>
               <button className='login' onClick={(()=>{
                  loginBtn==='Login' ? (setLoginBtn('Logout')) : (setLoginBtn('Login'))
               })}>{loginBtn}</button>
            </ul>
         </div>
      </div>
    )
 }
 export default Header;