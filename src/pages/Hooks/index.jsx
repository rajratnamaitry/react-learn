import React, { useState } from "react";
import UseStateHooks from "./State/useStateHooks";
import UseStateHooksTwo from "./State/useStateHooksTwo";
import UserStateObj from "./State/userStateObj";
import UseEffect from "./Effect/useEffect";
import UseEffectConditional from "./Effect/useEffectConditional";
import UseEffectOnce from "./Effect/useEffectOnce";
import UseEffectCleanUp from "./Effect/useEffectCleanUp";
import Bcomp from "./Context/Bcomp";
import { UserContext, UserChannelContext } from "./Context";
export default function Hooks() {
  const [isFlag,setIsFlag] = useState(true);
  return (
    <div>
      <UserContext.Provider value={'From hook index'}>
        <UserChannelContext.Provider value={'From nasted provider hook index'}>
        <Bcomp></Bcomp>
        </UserChannelContext.Provider>
      </UserContext.Provider>
      {/* <button type="button" onClick={()=> setIsFlag(!isFlag)} >Toggle</button>
      { isFlag ? <UseEffectCleanUp></UseEffectCleanUp> : ''} */}
      {/* <UseEffectOnce></UseEffectOnce> */}
      {/* <UseEffectConditional></UseEffectConditional> */}
      {/* <UseEffect></UseEffect> */}
      {/* <UserStateObj></UserStateObj> */}
      {/* <UseStateHooksTwo></UseStateHooksTwo> */}
      {/* <UseStateHooks></UseStateHooks> */}
    </div>
  );
}
