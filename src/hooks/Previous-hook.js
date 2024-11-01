import { useEffect, useRef } from "react";

export const  UsePrevious= (value)=>{
    const ref = useRef()
    useEffect(()=>{
         ref.current = value ;
    },[value])
    
    return ref.current

}