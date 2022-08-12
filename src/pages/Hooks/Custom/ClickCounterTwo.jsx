import React, { useState, useEffect } from "react";
import useDocTitle from './CustomHooks'
export default function ClickCounterTwo() {
  const [count, setCount] = useState(0);
  useDocTitle(count)
  return (
    <div>
      Click Counter Two
      <button type="button" onClick={() => setCount((pre) => pre + 1)}>
        Click {count}{" "}
      </button>
    </div>
  );
}
