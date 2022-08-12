import React,{ useReducer } from 'react'
const initial = 0;
const reducer = (state,action) =>{
    switch (action) {
        case 'Reset':
            return initial;
        case 'Increment':
            return state + 1;
        case 'Decrement':
            return state - 1;
    }
}
export default function UseReducer() {
    const [count,dispatch] = useReducer(reducer,initial);
  return (
    <div>UseReducer
        {count}
      <button type="button" onClick={() => dispatch('Reset')}> Reset </button>
      <button type="button" onClick={() => dispatch('Increment')}>Increment </button>
      <button type="button" onClick={() => dispatch('Decrement')}>Decrement </button>
    </div>
  )
}
