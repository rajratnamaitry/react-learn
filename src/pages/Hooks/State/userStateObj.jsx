import React , { useState } from 'react'

export default function UserStateObj() {
    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    })
  return (
    <div>
        UserStateObj
        <form>
            <input 
            type="text" 
            name='firstname'
            placeholder='firstname'
            value={name.firstName}
            onChange={(e)=> setName({...name, firstName: e.target.value})}/>
            <input 
            type="text"
            name='lastname' 
            placeholder='lastname' 
            value={name.lastName}
            onChange={(e)=> setName({...name, lastName: e.target.value})}/>
            <pre>{JSON.stringify(name)}</pre>
        </form>
    </div>
  )
}
