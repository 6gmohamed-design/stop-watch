import React,{useState,useEffect} from 'react'
import './p.css'
const Counter = () => {
    const [count,setCount]=useState(0);
    function handleincrement(count) {
        count=count+1;
        setCount(count+1);
        
       
        console.log(count);
        
    }
  return (
    <>
    <div className="container expand-lg  text-dark p-5 border rounded mx-auto  min-w-100 min-h-100 position-absolute top-50 start-50 translate-middle  shadow-lg"  style={{backgroundColor:"green"}}    >
    <h1 className="text-center mb-5">Counter</h1>
    <h1 className="text-center fs-1 text-warning bg-dark w-25 position-relative top-50 start-50 translate-middle rounded border">{count}</h1>
    <div className="button-container d-flex justify-content-between">
    <button onClick={()=>{handleincrement(count) }} className="btn btn-primary w-25">Increment</button>
    <button onClick={()=>{setCount(0)}} className="btn btn-secondary w-25">Reset</button>
    <button onClick={()=>{setCount(count=>count-1)
        setCount(count=>count-1)
    }} className="btn btn-danger w-25">Decrement</button>
    </div>
    </div>
    </>
  )
}

export default Counter