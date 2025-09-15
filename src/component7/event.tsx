import React from 'react'

const Event = () => {
  let imgurl= "src/assets/images (1).jpg"
     const handleclick=(name)=>{
        console.log("clicked",`${name.toUpperCase()}`);
        
       
    }
    const handleclick2=(e)=>{
        console.log(e.currentTarget.innerText);
       
    }
 
  return (
    <div>
        <button onClick={()=>handleclick("bro")}>click 😘</button>
        <button onClick={(e)=>handleclick2(e)}>click 😘</button>
        <p>hello world</p>
    <img src={imgurl} alt="" />
   
    </div>

  )
}

export default Event