import React from "react";
import { UserContext, UserChannelContext } from "./index";
export default function Dcomp() {
  return (
    <div>
      Dcomp
      <UserContext.Consumer>
        {
          user => {
            return <UserChannelContext.Consumer>{
                channel => {
                  return <div>Child receive {user} - {channel}</div>
                }
              }</UserChannelContext.Consumer>
          }
        }
      </UserContext.Consumer>
    </div>
  );
}
