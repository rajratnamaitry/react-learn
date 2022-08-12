import React from "react";
import { CompContext } from "./WithUseContext";
export default function Dcomp() {
  return (
    <div>
      Dcomp
      <CompContext.Consumer>
        {(state) => {
          return (
            <>
              {state.countState}
              <button type="button" onClick={() => state.dispatchState("Reset")}>
                {" "}
                Reset{" "}
              </button>
              <button type="button" onClick={() => state.dispatchState("Increment")}>
                Increment{" "}
              </button>
              <button type="button" onClick={() => state.dispatchState("Decrement")}>
                Decrement{" "}
              </button>
            </>
          );
        }}
      </CompContext.Consumer>
    </div>
  );
}
