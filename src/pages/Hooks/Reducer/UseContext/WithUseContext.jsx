import React, { useReducer } from "react";
import Bcomp from "./Bcomp";
export const CompContext = React.createContext();
const initial = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Reset":
      return initial;
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
  }
};
export default function WithUseContext() {
  const [count, dispatch] = useReducer(reducer, initial);
  return <div>
    WithUseContext
    <CompContext.Provider value={{countState : count,dispatchState:dispatch}}>
        <Bcomp/>
    </CompContext.Provider>
  </div>;
}
