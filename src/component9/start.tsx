import React,{useState,useEffect,useRef} from 'react'

const Start = () => {
    let count=0;
    const countref=useRef(count);
    console.log("countref",countref.current);
    
    useEffect(() => {
    
        console.log("countref",countref.current);
    },[count]);
    
    
  return (
    <>
    <div>Start</div>
   
   <p>count:{count}</p>
   <button onClick={()=>countref.current=count+1}>Increment</button>
   <button onClick={()=>countref.current=count-1}>Decrement</button>
    </>
  )
}

export default Start