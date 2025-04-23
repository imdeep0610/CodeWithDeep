import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';
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
   </div>
  )
  }
}
export default About;