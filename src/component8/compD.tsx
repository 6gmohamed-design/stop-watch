import React from 'react'
import { useContext } from 'react';
import { Usecontextcontent } from './usecontext';
 import { createContext } from 'react';
 
export const Usecontextcontent3 = createContext();
const CompD = () => {
  const {name,age} = useContext(Usecontextcontent);
  
  return (
    <>
    <div style={{backgroundColor:"purple"}}>CompD {name} {age}</div>
   
    </>
  )
}

export default CompD