import React, {useState} from 'react'

export default function UseStateHooks() {
const [count, setCount] = useState(0)
  return (
    <div>
        UseStateHooks
        <button type="button" onClick={()=>setCount(count+1)} >click {count}</button>
    </div>
  )
}
