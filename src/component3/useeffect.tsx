import React, { useEffect, useRef, useState } from 'react';
import { usepersisted } from "../hooks/usepresisted";

function UseEffect() {
  let [count, setCount] = usepersisted("count", 0);
  let [items,setItems]=useState([]);
  let valref = useRef(null);
  let count2=useRef(0);

  useEffect(() => {
    console.log("xcc");
    valref.current.focus();
   count2.current++;
  });

  function handle() {
    setCount(count + 1);
    valref.current.focus();
    console.log(valref.current.value);
    
    setItems([...items,valref.current.value]);
   
  }

  return (
    <div>
      <h1>{count}</h1>
      <h2>useref</h2>
      <input type="text" ref={valref} />
      <button onClick={handle}>click me</button>
      <p>{valref.current?.value}</p>
      <ul><li>{items.map((item,index)=> <li key={index}>{item}</li>)}</li></ul>
      <button onClick={()=>setCount(count-1)}>-1</button>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>+1</button>
      <p>useref :{ count2.current}</p>
    </div>
  );
}

export default UseEffect;