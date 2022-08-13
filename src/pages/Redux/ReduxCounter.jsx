import React from "react";
import { store, actions } from "./Store";
import { useSelector } from "react-redux";
export default function ReduxCounter() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      ReduxDemo {count}
      <button type="button" onClick={() => store.dispatch(actions.reset())}>
        {" "}
        Reset{" "}
      </button>
      <button type="button" onClick={() => store.dispatch(actions.incremental())}>
        Increment{" "}
      </button>
      <button type="button" onClick={() => store.dispatch(actions.decremental())}>
        Decrement{" "}
      </button>
    </div>
  );
}
