import { useEffect, useRef } from "react";

 const debouncong=(func)=>{


    const clock = useRef();


    // useEffect(()=>{
        const funct = ()=>{

            clearTimeout(clock.current);
            clock.current= setTimeout(func,3000)
        }
    // },[])


    return funct
}

export default debouncong