import React, {useReducer} from 'react'
const initial ={
    firstCounter:0,
    secCounter:10
}
const reducer = (state,action) =>{
    switch (action.type) {
        case 'Reset':
            return initial;
        case 'Increment1':
            return {...state, firstCounter: state.firstCounter + action.value};
        case 'Decrement1':
            return {...state, firstCounter: state.firstCounter - action.value};
        case 'Increment2':
            return {...state, secCounter: state.secCounter + action.value};
        case 'Decrement2':
            return {...state, secCounter: state.secCounter - action.value};
    }
}
export default function UseReducerComplex() {
    const [count, dispatch] = useReducer(reducer,initial)
  return (
    <div>
       <pre> first {count.firstCounter} </pre> 
       <pre> second {count.secCounter} </pre> 
      <button type="button" onClick={() => dispatch({type:'Reset'})}> Reset </button>
      <button type="button" onClick={() => dispatch({type:'Increment1', value : 1})}>Increment </button>
      <button type="button" onClick={() => dispatch({type:'Decrement1', value : 1})}>Decrement </button>
      <button type="button" onClick={() => dispatch({type:'Increment2', value : 2})}>Increment 2</button>
      <button type="button" onClick={() => dispatch({type:'Decrement2', value : 2})}>Decrement 2</button>
    </div>
  )
}
