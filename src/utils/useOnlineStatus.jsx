import {useEffect,useState} from 'react';
/* For any custom hook , first finalize contract , i.e. input and output of the hook
In this hook we are checking online status means internet connection 
So we need any input -> NO */
const useOnlineStatus=()=>{
  const [onlineStatus,setOnlineStatus]=useState(true);
    //check whether online/offline
    useEffect(()=>{
        //this eventListener is given by browser to check the online status
       window.addEventListener('offline',()=>{
            setOnlineStatus(false);
       })
       window.addEventListener('online',()=>{
            setOnlineStatus(true);
       })

    },[])

    //return onlineStatus
    return onlineStatus;
}
export default useOnlineStatus;
    