import React,{useState} from 'react'
 import "./p2.css"
 import "bootstrap/dist/css/bootstrap.min.css";
 import "bootstrap/dist/js/bootstrap.bundle.min.js";
 import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Styles = () => {
const[name,setName]=useState([]);

const handleChange=(e)=>{
    console.log(e.currentTarget.value);
    setName([...name,e.currentTarget.value]);
}
const handleitem=(nameremove)=>{
 
 setName([...name.filter((name2,index)=>name2!==nameremove )]);
} 
const handleSubmit=(e)=>{
      setName([]);
} 
  return (
  
  <>    
  <div className="container expand-lg bg-light text-dark p-5 border rounded mx-auto mt-5 " >
    
    <p> 
    <input type="checkbox" className="form-check-input" onChange={handleChange} value="name1"/>
    <label htmlFor="" className="form-check-label ms-2"   >name1</label>
    </p>
    <p> 
    <input type="checkbox" className="form-check-input" onChange={handleChange} value="name2"/>
    <label htmlFor="" className="form-check-label ms-2"   >name2</label>
    </p>
    <p> 
    <input type="checkbox" className="form-check-input" onChange={handleChange} value="name3"/>
    <label htmlFor="" className="form-check-label ms-2"   >name3</label>
    </p>  
    <p>   
    <input type="checkbox" className="form-check-input" onChange={handleChange} value="name4"/>
    <label htmlFor="" className="form-check-label ms-2"   >name4</label>
    </p>
    <p> 
    <input type="checkbox" className="form-check-input" onChange={handleChange} value="name5"/>
    <label htmlFor="" className="form-check-label ms-2"   >name5</label>
    </p>
    <h1>your choices are </h1>
    <ul>
    {name.map((name,index)=> <li key={index}>{name}<button onClick={()=>handleitem(name)}>clear</button></li>)}
    </ul>
    </div>
    <button className="btn btn-primary" onClick={handleSubmit} >Submit</button>
    </>
   
  )
}

export default Styles