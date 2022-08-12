import React, { useState, useEffect } from "react";
import useDocTitle from './CustomHooks'
export default function ClickCounter() {
  const [count, setCount] = useState(0);
  useDocTitle(count)
  return (
    <div>
      Click Counter
      <button type="button" onClick={() => setCount((pre) => pre + 1)}>
        Click {count}{" "}
      </button>
    </div>
  );
}
