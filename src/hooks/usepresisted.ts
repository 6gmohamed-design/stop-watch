import React from "react";  
import { useEffect,useState } from "react";
import { getItem, setItem } from "../for_storage/localstorage";
export function usepersisted<T>(key: string, initialvalue: T) {
    const [value, setValue] = useState(()=>{
        const item=getItem(key)
      return  (item as T) || initialvalue;})
      useEffect(() => { 
       setItem(key,value)
      }, [value])
      return [value,setValue] as const;
}