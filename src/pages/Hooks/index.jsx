import React, { useState } from "react";
import UseStateHooks from "./State/useStateHooks";
import UseStateHooksTwo from "./State/useStateHooksTwo";
import UserStateObj from "./State/userStateObj";
import UseEffect from "./Effect/useEffect";
import UseEffectConditional from "./Effect/useEffectConditional";
import UseEffectOnce from "./Effect/useEffectOnce";
import UseEffectCleanUp from "./Effect/useEffectCleanUp";
export default function Hooks() {
  const [isFlag,setIsFlag] = useState(true);
  return (
    <div>
      <button type="button" onClick={()=> setIsFlag(!isFlag)} >Toggle</button>
      { isFlag ? <UseEffectCleanUp></UseEffectCleanUp> : ''}
      {/* <UseEffectOnce></UseEffectOnce> */}
      {/* <UseEffectConditional></UseEffectConditional> */}
      {/* <UseEffect></UseEffect> */}
      {/* <UserStateObj></UserStateObj> */}
      {/* <UseStateHooksTwo></UseStateHooksTwo> */}
      {/* <UseStateHooks></UseStateHooks> */}
    </div>
  );
}
