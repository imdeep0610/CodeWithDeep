import React from 'react';

class UserClass extends React.Component{
 /* For receiving props in class component , we need constructor */
 constructor(props){
      super(props);
      console.log(props);

      this.state={
        count:1,
        count2:2,
      }
 }
  render(){

    const{name,location}=this.props;
    const {count,count2}=this.state;
    return(
        <div className="user-card">
            <h1>Count : {count}</h1>    {/* {this.state.count} -> if we didn't destructure it  */}
            <button onClick={()=>{
                //NEVER UPDATE STATE VARIABLE DIRECTLY -> this.state.count=this.state.count+1;
                this.setState({ //this.setState() is an function given by react and we pass an object inside it
                    count:this.state.count+1,  //this is how we update the state variable
                    count2:this.state.count2 +1,
                })
            }}>Count</button>
            <h2>Count : {count2}</h2> 
            <h2>Name : {name}</h2> {/* {this.props.name} -> if we didn't destructure it  */}
            <h3>Location : {location}</h3>
            <h4>Contact : deep@gmail.com</h4>
        </div>
    )
  }
}
export default UserClass;