import React,{useState} from 'react'
import './p.css'
 interface Props {
    name:string,
    age:number,
    address:string,
    phone:number,
    email:string,
    isactive:boolean
    
 }
const Start = ({name,age,address,phone,email,isactive}:Props) => {
   let isActive = isactive ? "active" : "inactive";
      
  return (
    <>
    <div className="cardcontainer">
    <div className="card" style={{width: "18rem"}}>
  <img src="./src/assets/images (4).jpg" className="card-img-top" alt="image"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
   
  </div>

     <p>hello world</p>
     <h2>my name is {name}</h2>
     <p>my age is {age}</p>
     <p>my address is {address}</p>
     <p>my phone is {phone}</p>
     <p>my email is {email}</p>
     <p>my isactive is {isActive}</p>
     <a href="#" className="btn btn-primary">Go somewhere</a>
     </div>
    </div>
    </>

  )
}

export default Start