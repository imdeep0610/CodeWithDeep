import {useState,useEffect} from 'react';

const User=(props)=>{  // ({name}) -> this is destructuring
    const [count,setCount]=useState(0);
    useEffect(()=>{

      const timer=setInterval(()=>{
          console.log('Deep IAS');
      },1000)
      console.log(useEffect);

      return()=>{
        clearInterval(timer);
        console.log('useEffect return');
      }

      fetch('https://api.github.com/users/imdeep0610')
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data);
      })
    })
    return(
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h2>Name : {props.name}</h2>  {/* {name} -> used it like in case of destructuring*/} 
            <h3>Location : Banglore</h3>
            <h4>Contact : deep@gmail.com</h4>
        </div>
    )
}
export default User;