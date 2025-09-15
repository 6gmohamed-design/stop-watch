import React from 'react'
import { useEffect, useState } from 'react';    
import { useCallback } from 'react';
import Head from '../component2/Head';
export const cb = () => {
    let [count,setCount]=useState(0);
    function handle() {
        setCount(count+1);
       
    }
    let newfn=useCallback(()=>{},[count])
      
    useEffect(() => {
        console.log("count",count);
    },[count]);
  return (
    <>
    <div>cb</div>
    <h1>{count}</h1>
    <button onClick={handle}>click me</button>   
    <button >click me</button>
    
    <Head newfn={newfn}/>
    </>
  )
}
export default cb
