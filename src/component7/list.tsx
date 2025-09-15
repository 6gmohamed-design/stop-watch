import React from 'react'
import './p.css'
const list = () => {
    let fruits = [
        { name: "apple", calories: "calories " + 100, price: 100 },
        { name: "banana", calories: "calories " + 200, price: 200 },
        { name: "orange", calories: "calories " + 300, price: 300 },
        { name: "grapes", calories: "calories " + 400, price: 400 }
      ];
        let filterFruits=fruits.filter((fruit,index)=>{
            return fruit.price>200;
        })

  return (
    <>
    
      <h3>filter fruits {filterFruits.length}</h3>
    <ul className="list">
    {filterFruits.map((filterfruit,index)=>{
       return <li key={index} className="list">{filterfruit.name}</li>;
    })}
    </ul>
    <div>list</div>
    <h3>all fruits</h3>
    <ul className="list">
    {fruits.map((fruit,index)=>{
       return <li key={index} className="list">{fruit.name} <br/>{fruit.calories} <br/>{fruit.price}</li>;
    })}
    </ul>
    
    </>
  )
}

export default list