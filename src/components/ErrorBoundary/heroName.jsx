import React from 'react'

export default function HeroName({name}) {
    if(name == 'joker'){
        throw new Error('not hero');
    }
  return (
    <div>Hero Name is {name}</div>
  )
}
