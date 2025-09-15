import React from 'react'
import './p.css'
import { useState } from 'react';
const Color = () => {
    const [color,setColor]=useState("black");
  return (
    <>
    
        <div className="container expand-lg  text-dark p-5 border rounded mx-auto  min-w-100 min-h-100 position-absolute top-50 start-50 translate-middle  shadow-lg"  style={{backgroundColor:color}}    >
        <p className="text-center fs-1  text-primary  text-decoration-underline ">Color</p>
        <h6 className=' fs-3 text-dark w-100'>color is {color}</h6>
        <div className="form-group">
        <label htmlFor="color" className="form-label fs-3 text-success text-center mx-auto w-100">Color</label>
        <input type="color" id="color" onChange={(e)=>setColor(e.target.value)} value={color} style={{backgroundColor:color,border:"7px solid white ",boxShadow:"0 0 10px white" ,padding:"1px" ,width:"30%"  ,borderRadius:"10%" ,position:"relative" ,zIndex:"1" ,left:"40%" ,top:"50%" ,cursor:"pointer"}}/>
        </div>
        
        
        
        
        
        
        
        
    
    </div>
    </>
  )
}

export default Color