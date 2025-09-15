import React, { useMemo } from 'react';
import { useState } from 'react';

function UseMemo() {
    let [num,setNum]=useState(0);
    let [pow,setPow]=useState(0);
    let powerfunction=useMemo(()=>{
        return Math.pow(num,pow);
    },[num,pow])
    return (
        <div>
            <h1>UseMemo</h1>
            <p>powerfunction</p>
            <label htmlFor="">num: </label>
            <input type="number" value={num} onChange={(e)=>setNum(e.target.value)} />
            <label htmlFor="">pow: </label>
            <input type="number" value={pow} onChange={(e)=>setPow(e.target.value)} />
            <p>{num}</p>
            <p>{pow}</p>
            <button>result:{powerfunction}</button>
            <p>more functions</p>
            <button onClick={()=>setNum(+num+1)}>Increment</button>
            <button onClick={()=>setPow(+pow+1)}>Increment</button>
        </div>
    );
}
export default UseMemo;
