import React, { useState,useRef } from 'react'
import { MouseEvent } from 'react';

function Todolist(){
      const [tasks,setTasks] = useState([]);
       const userTask = useRef(null);
 
      const handleAddTask = () => {
        const text=userTask.current.value;
        if(text.trim() !== ""){
          setTasks([...tasks,text]);
        }
        userTask.current.value="";
      };
      return (
        <div className="todo-list">
          <h1 className="text-center">Todolist</h1>
          <div className="input-container">
          <input type="text" placeholder="Add a task"  ref={userTask} className="form-control"/>
          <div className="button-container">
          <button className="btn btn-primary " onClick={() => handleAddTask()}>Add</button>
          <button className="btn btn-danger" onClick={() => setTasks([])}>Clear</button>
        </div>
          <ul>
            {tasks.map((task,index )=> <li key={index}
             className="item">{task}
               <button className="btn2" onClick={() => setTasks(tasks.filter((_,i) => i !== index))}>Clear</button></li>)}
          </ul>
        </div>
        </div>
      );
}
export default Todolist;
