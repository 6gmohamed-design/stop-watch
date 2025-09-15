import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import "./p.css"
const Input = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const userRef = useRef(null);
    const handleclick=(e)=>{
        console.log(e.currentTarget.value);
        
    }
  return (
    <>  
    <div className='container'>
    
    <form action=""  className='form'>
        
    <label htmlFor="" className='form-label' >Name</label>
    <input type="text" className='form-control' onChange={(e)=>setName(e.currentTarget.value)} ref={userRef}/>
    <p style={{color:"blue"}}>{name?.length>5 ? name : ""}</p>
    <label htmlFor="" className='form-label'>Email</label>
    <input type="email" className='form-control' onChange={(e)=>setEmail(e.currentTarget.value)} ref={userRef}/>
    <p style={{color:"blue"}}>{email?.length>5 ? email : ""}</p>
    <label htmlFor="" className='form-label'>Password</label>
    <input type="password" className='form-control' onChange={(e)=>setPassword(e.currentTarget.value)} ref={userRef}/>
    <p style={{ color: name?.length > 0 ? "blue" : "green" }}>
  {password?.length > 5 ? password : ""}
</p>
    
    <button className='btn btn-primary' onClick={handleclick}>Submit</button>
 
    </form>
    </div>
    </>
  )
}

export default Input