import React, { useState } from "react";

export default function UseStateHooksTwo() {
  let initial = 0
  const [count, setCount] = useState(initial);
  const Increment5 = () =>{
    for (let i = 0; i < 5; i++) {
      setCount(pre => pre+1);
    }
  }
  return (
    <div>
      UseStateHooks {count}
      <button type="button" onClick={() => setCount(initial)}> Reset </button>
      <button type="button" onClick={() => setCount(count + 1)}>Increment </button>
      <button type="button" onClick={() => setCount(count - 1)}>Decrement </button>
      <button type="button" onClick={() => Increment5()}>Increment 5 times</button>
    </div>
  );
}
