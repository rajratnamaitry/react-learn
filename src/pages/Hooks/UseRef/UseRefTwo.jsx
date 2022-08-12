import React, { useState, useEffect, useRef } from "react";
export default function UseRefTwo() {
  const interValRef = useRef(null);
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    interValRef.current = setInterval((i) => {
      setTimer((pre) => pre + 1);
    }, 1000);
    return () => {
      clearInterval(interValRef.current);
    };
  }, [timer]);
  return (
    <div>
      UseRefTwo {timer}
      <button type="button" onClick={() => clearInterval(interValRef.current)}>
        Clear
      </button>
    </div>
  );
}
