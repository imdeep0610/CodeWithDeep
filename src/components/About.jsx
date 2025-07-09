import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';
// const About=()=>{
//  return(
//     <div>
//       <h2>I am About us</h2>
//       <User name={'Deepshikha Singh (functional)'}/>
//       <UserClass name={'Shanu Shubham (class)'} location={'Banglore'}/>
//    </div>
    
//  )
// }


class About extends Component{
  constructor(props) {
    super(props); 
    console.log('Parent constructor');
  }

componentDidMount(){
  console.log('Parent componentDidMount');
}

  render(){
    console.log('Parent render');
    return(
      <div>
      <h2>I am About us</h2>
      <User name={'Deepshikha Singh (functional)'}/>
      <UserClass name={'Shanu Shubham (class)'} location={'Banglore'}/>
      <UserClass name={'Shipra Shilpi (class)'} location={'America'}/>
      {/*This is the way we can use Context in class componennt */}
      <div>
        Logged In User : 
      <UserContext.Consumer>
        {({loggedInUser})=>(
          <h1 className='text-xl font-bold'>{loggedInUser}</h1>
        )}
      </UserContext.Consumer>
      </div>
   </div>
  )
  }
}
export default About;