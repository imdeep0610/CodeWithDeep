import {useState} from 'react';

const User=(props)=>{  // ({name}) -> this is destructuring
    const [count,setCount]=useState(0);
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