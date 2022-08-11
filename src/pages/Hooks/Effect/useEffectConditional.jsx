import React, { useState, useEffect } from "react";

export default function UseEffectConditional() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("useEffect");
    document.title = "Count " + count;
  },[count]);
  return (
    <div>
      UseEffect
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button type="button" onClick={() => setCount(count + 1)}>
        click {count}
      </button>
    </div>
  );
}
