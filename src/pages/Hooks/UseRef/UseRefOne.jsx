import React, {useRef , useEffect} from 'react'
export default function UseRefOne() {
  const inputRef = useRef(null);
    useEffect(()=>{
      inputRef.current.focus();
    },[])
  return (
    <div> 
        UseRef
        <input type="text" 
        ref={inputRef}
         ></input>
    </div>
  )
}
