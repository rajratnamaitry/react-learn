import React from 'react'

export default function UserList(props) {
  return (
    <div>
        <pre>
            <ul>
            {props.list.map(e => (
                <li key={e.id}>{e.title}</li>
            ))}
            </ul>
       </pre>
    </div>
  )
}
