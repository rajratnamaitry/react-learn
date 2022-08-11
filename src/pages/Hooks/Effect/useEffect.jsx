import React, {useState,useEffect} from 'react'

export default function UseEffect() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title = 'Count '+count;
    })
    return (
      <div>
          UseEffect
          <button type="button" onClick={()=>setCount(count+1)} >click {count}</button>
      </div>
    )
}
