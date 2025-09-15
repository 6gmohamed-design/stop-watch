import React,{useState,useEffect} from 'react'

const UseEffect = () => {
    let [backgroundcolor,setbackgroundcolor]=useState("green");
    let [count,setCount]=useState(0);
    let [width,setWidth]=useState(window.innerWidth);
    let [height,setHeight]=useState(window.innerHeight);
    useEffect(() => {
        window.addEventListener("resize",()=>{
            setWidth(window.innerWidth);  
            setHeight(window.innerHeight);  
            setbackgroundcolor("red");
            setTimeout(() => {
                setbackgroundcolor("green");
            }, 1000);
        });
        console.log("count",count);
    },[width,height,count,backgroundcolor]);
    function handle() {
        setCount(count=>count+1);
    }
  return (
    <>
    <div style={{backgroundColor:backgroundcolor}}    >
    <div>UseEffect</div>
    <h1>{count}</h1>
    <button onClick={handle}>click me</button>
    <h1>{width}</h1>
    <h1>{height}</h1>
    </div>
    </>
  )
}

export default UseEffect