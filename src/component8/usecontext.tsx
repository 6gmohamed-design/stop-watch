import React from 'react'
import CompA from './compA';
import CompB from './compB';
import CompC from './compC';
import CompD from './compD';
 
import { createContext } from 'react';
export const Usecontextcontent2 = createContext();
export const Usecontextcontent = createContext();
const UsecontextProvider = () => {
  return (
    <div style={{backgroundColor:"red"}}>
    <Usecontextcontent.Provider value={{name:"John",age:30}} >
    <Usecontextcontent2.Provider value={{mail:"123456789"}}>
    <div>Usecontext</div>
    <CompA/>
    <CompB/>
    <CompC/>
    <CompD/>
  
    </Usecontextcontent2.Provider>
    </Usecontextcontent.Provider>
    </div>
  )
}

export default UsecontextProvider