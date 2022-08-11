import React, {useContext} from 'react'
import { UserContext, UserChannelContext } from "./index";
export default function Ecomp() {
    const user = useContext(UserContext);
    const channel = useContext(UserChannelContext);
  return (
    <div>
        {user} - {channel}
    </div>
  )
}
