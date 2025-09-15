import React from 'react'
import { useState } from 'react';
import './p.css'
import { useRef } from 'react';
const Fruits = () => {
   const [fruits,setFruits]=useState([]);
   const [fruit,setFruit]=useState();
   const inputref=useRef(null);
    const handleAddFruit=()=>{
        let value=inputref.current.value;
        if(value.trim() !== ""){
            setFruits([...fruits,value]);
            inputref.current.value="";
    
        }
    }
    const handleRemoveFruit=(fruitremove)=>{
        setFruits(fruits.filter((fruit,index)=>fruit!==fruitremove));
    }
  return (
    <>
    <div className="container expand-lg  text-dark p-5 border rounded mx-auto  min-w-100 min-h-100 position-absolute top-50 start-50 translate-middle  shadow-lg"  style={{backgroundColor:"green"}}    >
    <h1 className="text-center mb-5 text-white text-decoration-underline fs-1">Fruits</h1>
    <h2 className="text-center mb-5 text-white fs-2 bg-dark border rounded">enter your favorite fruit</h2>
    <div className="input-container d-flex justify-content-between align-items-center gap-2 mb-5">
    <input type="text" placeholder="Enter your fruit" className="form-control w-75" onChange={(e)=>setFruit(e.target.value)} ref={inputref}/>
    <button className="btn btn-primary w-25" onClick={handleAddFruit}>add</button>
    </div>
    <ul className="list list-group list-group-flush mb-5">
        {fruits.map((fruit,index)=> <li key={index} className="d-flex justify-content-between text-warning fw-bold fs-3 list-group-item list-group-item-action mt-2 text-uppercase">{index}:{fruit}<button onClick={()=>handleRemoveFruit(fruit)} className="btn btn-danger w-25 ms-auto ">remove</button></li>)}
    </ul>
    </div>
    </>
      )
}

export default Fruits