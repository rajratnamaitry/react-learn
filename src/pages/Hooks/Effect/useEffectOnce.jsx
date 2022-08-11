import React, {useState,useEffect} from 'react'

export default function UseEffectOnce() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logMouse = (e)=>{
        console.log('logMouse fn')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useEffect fn');
        document.addEventListener('mousemove',logMouse)
    },[])
    return (
      <div>
        X - {x} and Y - {y}
      </div>
    )
}
