import {LOGO_URL} from '../utils/constants';
import {CART_URL} from '../utils/constants';

const Header=()=>{
    return(
      <div className='navbar'>
         <div className='logo'>
         <img className='image' src={LOGO_URL} alt="App Logo" />
         </div>
         <div className='nav-items'>
            <ul>
               <li><a href='#'>Home</a></li>
               <li><a href='#about'>About Us</a></li>
               <li><a href='#contact'>Contact</a></li>
               <li><a href='#cart'><img src={CART_URL} alt="Cart"/></a></li>
            </ul>
         </div>
      </div>
    )
 }
 export default Header;