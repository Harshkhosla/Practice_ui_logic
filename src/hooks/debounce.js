import { useRef } from "react";

const useDebounce=(orfn)=>{

    const clock  = useRef();
const fun = ()=>{
   clearTimeout( clock.current);

    clock.current = setTimeout(orfn,300)
}
return {
    fun
}
}
export default useDebounce;