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
      console.log(this.props.name + 'Child constructor')

      this.userInfo={
        name:'Dummy',
        location:'Muzaffarpur',
        avatar_url:'https.google.com'
      }
 }
  
 componentDidMount(){
    console.log(this.props.name +'Child Did Mount')
 }

 /*This is how we make API calls in class component and for updating the data into our webpage we create state varibale in constructor
 and update it in componentDidMount using setState*/
   async componentDidMount(){
   this.timer=setInterval(()=>{
    console.log('Deep is beautiful')
   },1000)

    const data=await fetch('https://api.github.com/users/imdeep0610');
    const json=await data.json();
    console.log(json);
    this.setState({
      userInfo:json,
    })
   }

   componentDidUpdate(){
    clearInterval(this.timer);
    console.log('Child is updated')
   }

   componentWillUnmount(){
       console.log('Component is unmount');
   }

  render(){

    // const{name,location}=this.props;
    const {count,count2}=this.state;
    const {name,bio,avatar_url}=this.state.userInfo || 'No data ';
    console.log(this.props.name + 'Child Render')
    
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
            <img src={avatar_url} alt={name}/>
            <h3>Location : {bio}</h3>
            <h4>Contact : deep@gmail.com</h4>
        </div>
    )
  }
}
export default UserClass;